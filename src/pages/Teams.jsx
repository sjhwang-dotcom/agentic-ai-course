import { useState, useEffect } from 'react'

export default function ProjectIdeas() {
  const [ideas, setIdeas] = useState([])
  const [name, setName] = useState('')
  const [title, setTitle] = useState('')
  const [idea, setIdea] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [loading, setLoading] = useState(true)
  const [expanded, setExpanded] = useState({})

  const fetchIdeas = async () => {
    try {
      const res = await fetch('/api/ideas')
      if (res.ok) setIdeas(await res.json())
    } catch (err) {
      console.error('Failed to fetch ideas:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchIdeas() }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!name.trim() || !title.trim() || !idea.trim()) return
    try {
      const res = await fetch('/api/ideas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ author: name.trim(), title: title.trim(), idea: idea.trim() }),
      })
      if (res.ok) {
        setName('')
        setTitle('')
        setIdea('')
        setShowForm(false)
        fetchIdeas()
      }
    } catch (err) {
      console.error('Failed to post idea:', err)
    }
  }

  const handleInterest = async (ideaId) => {
    const who = prompt('이름을 입력하세요:')
    if (!who || !who.trim()) return
    try {
      const res = await fetch(`/api/ideas?id=${ideaId}&action=interest`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: who.trim() }),
      })
      if (res.ok) fetchIdeas()
      else if (res.status === 409) alert('이미 지원한 프로젝트입니다.')
      else if (res.status === 400) {
        const data = await res.json()
        alert(data.error || '지원에 실패했습니다.')
      }
    } catch (err) {
      console.error('Failed to express interest:', err)
    }
  }

  const handleRemoveInterest = async (ideaId, interestId, ideaAuthor) => {
    const who = prompt('아이디어 등록자 이름을 입력하세요 (본인 확인):')
    if (!who || !who.trim()) return
    if (who.trim() !== ideaAuthor) {
      alert('아이디어 등록자만 지원자를 삭제할 수 있습니다.')
      return
    }
    if (!confirm('이 지원자를 삭제하시겠습니까?')) return
    try {
      const res = await fetch(`/api/ideas?id=${ideaId}&action=interest&interestId=${interestId}`, {
        method: 'DELETE',
      })
      if (res.ok) fetchIdeas()
    } catch (err) {
      console.error('Failed to remove interest:', err)
    }
  }

  const handleDelete = async (ideaId) => {
    if (!confirm('정말 삭제하시겠습니까?')) return
    try {
      const res = await fetch(`/api/ideas?id=${ideaId}`, { method: 'DELETE' })
      if (res.ok) fetchIdeas()
    } catch (err) {
      console.error('Failed to delete idea:', err)
    }
  }

  return (
    <div className="ideas-page">
      <header className="ideas-header">
        <div className="container">
          <a href="/" className="ideas-back">&larr; 코스 홈</a>
          <h1>프로젝트 아이디어</h1>
          <p>프로젝트 아이디어를 공유하고 팀원을 찾아보세요. 관심 있는 아이디어에 지원할 수 있습니다.</p>
        </div>
      </header>

      <main className="container">
        {/* Card Grid */}
        <section className="ideas-grid">
          {loading && <div className="ideas-empty">로딩 중...</div>}
          {!loading && ideas.length === 0 && (
            <div className="ideas-empty">
              아직 등록된 아이디어가 없습니다. 첫 번째로 아이디어를 공유해보세요!
            </div>
          )}
          {ideas.map((item) => (
            <div className="idea-card" key={item.id}>
              <div className="idea-card-body">
                <h3 className="idea-card-title">{item.title || '제목 없음'}</h3>
                <p className={`idea-card-desc${expanded[item.id] ? '' : ' collapsed'}`}>{item.idea}</p>
                {item.idea && item.idea.length > 200 && (
                  <button className="idea-card-expand" onClick={() => setExpanded(prev => ({ ...prev, [item.id]: !prev[item.id] }))}>
                    {expanded[item.id] ? '접기 ▲' : '더 보기 ▼'}
                  </button>
                )}
              </div>
              <div className="idea-card-meta">
                <div className="idea-card-author">
                  <span className="idea-card-avatar">{item.author[0]}</span>
                  <span>{item.author}</span>
                </div>
                <span className="idea-card-time">
                  {new Date(item.created_at).toLocaleDateString('ko-KR', { month: 'short', day: 'numeric' })}
                </span>
              </div>
              <div className="idea-card-interested">
                <div className="idea-card-interested-header">
                  <span className="idea-card-interested-label">
                    Team Members
                  </span>
                  <span className="idea-card-interested-count">
                    {item.interested?.length || 0}/3
                  </span>
                </div>
                {item.interested && item.interested.length > 0 ? (
                  <div className="idea-card-interested-list">
                    {item.interested.map((m) => (
                      <div className="idea-card-member" key={m.id}>
                        <span className="idea-card-member-avatar">
                          {m.name[0]}
                        </span>
                        <span className="idea-card-member-name">{m.name}</span>
                        <button
                          className="idea-btn-remove-interest"
                          onClick={() => handleRemoveInterest(item.id, m.id, item.author)}
                          title="지원자 삭제"
                        >×</button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="idea-card-no-interest">
                    No one yet — be the first to join!
                  </div>
                )}
              </div>
              <div className="idea-card-actions">
                <button
                  className="idea-btn-interest"
                  onClick={() => handleInterest(item.id)}
                  disabled={item.interested && item.interested.length >= 3}
                >
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8 3c-2-2-5.5-.5-5.5 2.5C2.5 9 8 13 8 13s5.5-4 5.5-7.5C13.5 2.5 10 1 8 3z"/></svg>
                  {item.interested && item.interested.length >= 3 ? '지원 마감 (3/3)' : `지원하기 (${item.interested ? item.interested.length : 0}/3)`}
                </button>
                <button className="idea-btn-delete" onClick={() => handleDelete(item.id)} title="삭제">
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 4h12M5.33 4V2.67a1.33 1.33 0 011.34-1.34h2.66a1.33 1.33 0 011.34 1.34V4M12.67 4v9.33a1.33 1.33 0 01-1.34 1.34H4.67a1.33 1.33 0 01-1.34-1.34V4"/></svg>
                </button>
              </div>
            </div>
          ))}
        </section>

        {/* Post Form */}
        <section className="ideas-post-section">
          {!showForm ? (
            <button className="ideas-post-btn" onClick={() => setShowForm(true)}>
              + 프로젝트 아이디어 등록
            </button>
          ) : (
            <form className="ideas-form" onSubmit={handleSubmit}>
              <h3>프로젝트 아이디어 등록</h3>
              <div className="ideas-form-row">
                <label>이름</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="이름을 입력하세요"
                  required
                />
              </div>
              <div className="ideas-form-row">
                <label>프로젝트 제목</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="프로젝트를 설명하는 짧은 제목"
                  required
                />
              </div>
              <div className="ideas-form-row">
                <label>설명</label>
                <textarea
                  value={idea}
                  onChange={(e) => setIdea(e.target.value)}
                  placeholder="프로젝트 아이디어를 자세히 설명해주세요 — 어떤 문제를 해결하는지, 어떤 에이전트/도구를 만들 것인지, 예상 결과는 무엇인지?"
                  rows={10}
                  required
                />
              </div>
              <div className="ideas-form-actions">
                <button type="submit" className="ideas-submit-btn">등록하기</button>
                <button type="button" className="ideas-cancel-btn" onClick={() => setShowForm(false)}>취소</button>
              </div>
            </form>
          )}
        </section>
      </main>

      <footer className="ideas-footer">
        <div className="container">
          AI 89900 Agentic AI &middot; KAIST 2026 봄학기 &middot;{' '}
          <a href="/">코스 홈으로</a>
        </div>
      </footer>
    </div>
  )
}
