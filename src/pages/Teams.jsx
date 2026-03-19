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
    const who = prompt('Enter your name:')
    if (!who || !who.trim()) return
    try {
      const res = await fetch(`/api/ideas?id=${ideaId}&action=interest`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: who.trim() }),
      })
      if (res.ok) fetchIdeas()
      else if (res.status === 409) alert('You have already joined this project.')
      else if (res.status === 400) {
        const data = await res.json()
        alert(data.error || 'Failed to join.')
      }
    } catch (err) {
      console.error('Failed to express interest:', err)
    }
  }

  const handleRemoveInterest = async (ideaId, interestId, ideaAuthor) => {
    const who = prompt('Enter the project author name to confirm:')
    if (!who || !who.trim()) return
    if (who.trim() !== ideaAuthor) {
      alert('Only the project author can remove team members.')
      return
    }
    if (!confirm('Remove this team member?')) return
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
    if (!confirm('Are you sure you want to delete this project?')) return
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
          <a href="/" className="ideas-back">&larr; Course Home</a>
          <h1>Project Ideas</h1>
          <p>Share your project ideas and find teammates. You can join projects you're interested in.</p>
        </div>
      </header>

      <main className="container">
        {/* Card Grid */}
        <section className="ideas-grid">
          {loading && <div className="ideas-empty">Loading...</div>}
          {!loading && ideas.length === 0 && (
            <div className="ideas-empty">
              No project ideas yet. Be the first to share one!
            </div>
          )}
          {ideas.map((item) => (
            <div className="idea-card" key={item.id}>
              <div className="idea-card-body">
                <h3 className="idea-card-title">{item.title || 'Untitled'}</h3>
                <p className={`idea-card-desc${expanded[item.id] ? '' : ' collapsed'}`}>{item.idea}</p>
                {item.idea && item.idea.length > 200 && (
                  <button className="idea-card-expand" onClick={() => setExpanded(prev => ({ ...prev, [item.id]: !prev[item.id] }))}>
                    {expanded[item.id] ? 'Show less ▲' : 'Show more ▼'}
                  </button>
                )}
              </div>
              <div className="idea-card-meta">
                <div className="idea-card-author">
                  <span className="idea-card-avatar">{item.author[0]}</span>
                  <span>{item.author}</span>
                </div>
                <span className="idea-card-time">
                  {new Date(item.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
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
                        {item.is_owner && (
                          <button
                            className="idea-btn-remove-interest"
                            onClick={() => handleRemoveInterest(item.id, m.id, item.author)}
                            title="Remove member"
                          >×</button>
                        )}
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
                  {item.interested && item.interested.length >= 3 ? 'Closed (3/3)' : `Join (${item.interested ? item.interested.length : 0}/3)`}
                </button>
                {item.is_owner && (
                  <button className="idea-btn-delete" onClick={() => handleDelete(item.id)} title="Delete">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 4h12M5.33 4V2.67a1.33 1.33 0 011.34-1.34h2.66a1.33 1.33 0 011.34 1.34V4M12.67 4v9.33a1.33 1.33 0 01-1.34 1.34H4.67a1.33 1.33 0 01-1.34-1.34V4"/></svg>
                  </button>
                )}
              </div>
            </div>
          ))}
        </section>

        {/* Post Form */}
        <section className="ideas-post-section">
          {!showForm ? (
            <button className="ideas-post-btn" onClick={() => setShowForm(true)}>
              + Post a Project Idea
            </button>
          ) : (
            <form className="ideas-form" onSubmit={handleSubmit}>
              <h3>Post a Project Idea</h3>
              <div className="ideas-form-row">
                <label>Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="ideas-form-row">
                <label>Project Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="A short title for your project"
                  required
                />
              </div>
              <div className="ideas-form-row">
                <label>Description</label>
                <textarea
                  value={idea}
                  onChange={(e) => setIdea(e.target.value)}
                  placeholder="Describe your project idea in detail — what problem does it solve, what agent/tools will you build, and what are the expected outcomes?"
                  rows={10}
                  required
                />
              </div>
              <div className="ideas-form-actions">
                <button type="submit" className="ideas-submit-btn">Submit</button>
                <button type="button" className="ideas-cancel-btn" onClick={() => setShowForm(false)}>Cancel</button>
              </div>
            </form>
          )}
        </section>
      </main>

      <footer className="ideas-footer">
        <div className="container">
          AI 89900 Agentic AI &middot; KAIST Spring 2026 &middot;{' '}
          <a href="/">Course Home</a>
        </div>
      </footer>
    </div>
  )
}
