import { useState, useEffect } from 'react'

export default function ProjectIdeas() {
  const [ideas, setIdeas] = useState([])
  const [name, setName] = useState('')
  const [idea, setIdea] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [loading, setLoading] = useState(true)

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
    if (!name.trim() || !idea.trim()) return
    try {
      const res = await fetch('/api/ideas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ author: name.trim(), idea: idea.trim() }),
      })
      if (res.ok) {
        setName('')
        setIdea('')
        setShowForm(false)
        fetchIdeas()
      }
    } catch (err) {
      console.error('Failed to post idea:', err)
    }
  }

  const handleInterest = async (ideaId) => {
    const who = prompt('이름을 입력하세요 (Name):')
    if (!who || !who.trim()) return
    try {
      const res = await fetch(`/api/ideas/${ideaId}/interest`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: who.trim() }),
      })
      if (res.ok) fetchIdeas()
      else if (res.status === 409) alert('이미 관심을 표명했습니다.')
    } catch (err) {
      console.error('Failed to express interest:', err)
    }
  }

  const handleDelete = async (ideaId) => {
    if (!confirm('정말 삭제하시겠습니까?')) return
    try {
      const res = await fetch(`/api/ideas/${ideaId}`, { method: 'DELETE' })
      if (res.ok) fetchIdeas()
    } catch (err) {
      console.error('Failed to delete idea:', err)
    }
  }

  return (
    <div className="teams-page">
      <header className="teams-header">
        <div className="container">
          <a href="/" className="teams-back">&larr; Course Home</a>
          <h1>Project Ideas</h1>
          <p>Share your project idea and find teammates. Browse ideas and express interest to join.</p>
        </div>
      </header>

      <main className="container">
        <section className="teams-post-section">
          {!showForm ? (
            <button className="teams-post-btn" onClick={() => setShowForm(true)}>
              + Post a Project Idea
            </button>
          ) : (
            <form className="teams-form" onSubmit={handleSubmit}>
              <h3>Post Your Project Idea</h3>
              <div className="teams-form-row">
                <label>Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="teams-form-row">
                <label>Project Idea</label>
                <textarea
                  value={idea}
                  onChange={(e) => setIdea(e.target.value)}
                  placeholder="Describe your project idea..."
                  rows={4}
                  required
                />
              </div>
              <div className="teams-form-actions">
                <button type="submit" className="teams-submit-btn">Post Idea</button>
                <button type="button" className="teams-cancel-btn" onClick={() => setShowForm(false)}>Cancel</button>
              </div>
            </form>
          )}
        </section>

        <section className="teams-feed">
          <h2 className="teams-feed-title">Project Ideas ({ideas.length})</h2>
          {loading && <div className="teams-empty">Loading...</div>}
          {!loading && ideas.length === 0 && (
            <div className="teams-empty">
              No ideas posted yet. Be the first to share your project idea!
            </div>
          )}
          {ideas.map((item) => (
            <div className="teams-card" key={item.id}>
              <div className="teams-card-header">
                <div className="teams-card-author">
                  <span className="teams-card-avatar">{item.author[0]}</span>
                  <div>
                    <strong>{item.author}</strong>
                  </div>
                </div>
                <span className="teams-card-time">
                  {new Date(item.created_at).toLocaleDateString('ko-KR', { month: 'short', day: 'numeric' })}
                </span>
              </div>
              <div className="teams-card-idea">{item.idea}</div>
              <div className="teams-card-footer">
                <div className="teams-card-members">
                  {item.interested && item.interested.length > 0 && (
                    <>
                      <span className="teams-card-members-label">Interested</span>
                      {item.interested.map((m) => (
                        <span className="teams-card-member teams-card-member--interested" key={m.id}>{m.name}</span>
                      ))}
                    </>
                  )}
                </div>
                <div className="teams-card-actions">
                  <button className="teams-interest-btn" onClick={() => handleInterest(item.id)}>
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8 3c-2-2-5.5-.5-5.5 2.5C2.5 9 8 13 8 13s5.5-4 5.5-7.5C13.5 2.5 10 1 8 3z"/></svg>
                    I'm interested
                  </button>
                  <button className="teams-delete-btn" onClick={() => handleDelete(item.id)} title="Delete">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 4h12M5.33 4V2.67a1.33 1.33 0 011.34-1.34h2.66a1.33 1.33 0 011.34 1.34V4M12.67 4v9.33a1.33 1.33 0 01-1.34 1.34H4.67a1.33 1.33 0 01-1.34-1.34V4"/></svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>

      <footer className="teams-footer">
        <div className="container">
          AI 89900 Agentic AI &middot; KAIST Spring 2026 &middot;{' '}
          <a href="/">Back to Course</a>
        </div>
      </footer>
    </div>
  )
}
