import { useState, useEffect } from 'react'
import { curriculum } from '../data/curriculum'
import { readingList } from '../data/readingList'

export default function Presentations() {
  const [assignments, setAssignments] = useState([])
  const [activeTab, setActiveTab] = useState(0)
  const [loading, setLoading] = useState(true)

  const weeks = curriculum.filter(w => w.readingIdx != null && w.week !== 'W1')

  const fetchAssignments = async () => {
    try {
      const res = await fetch('/api/presentations')
      if (res.ok) setAssignments(await res.json())
    } catch (err) {
      console.error('Failed to fetch presentations:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchAssignments() }, [])

  const getSlotAssignment = (topicIdx, subtopicIdx) =>
    assignments.find(a => a.topic_idx === topicIdx && a.subtopic_idx === subtopicIdx)

  const handleSignUp = async (week, topicIdx, subtopicIdx) => {
    const name = prompt('이름을 입력하세요 (Enter your name):')
    if (!name || !name.trim()) return
    try {
      const res = await fetch('/api/presentations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ week, topic_idx: topicIdx, subtopic_idx: subtopicIdx, student_name: name.trim() }),
      })
      if (res.ok) fetchAssignments()
      else {
        const data = await res.json()
        alert(data.error || 'Failed to sign up')
      }
    } catch (err) {
      console.error('Failed to sign up:', err)
    }
  }

  const handleRemove = async (id) => {
    if (!confirm('이 배정을 제거하시겠습니까?')) return
    try {
      const res = await fetch(`/api/presentations/${id}`, { method: 'DELETE' })
      if (res.ok) fetchAssignments()
    } catch (err) {
      console.error('Failed to remove:', err)
    }
  }

  const currentWeek = weeks[activeTab]
  const currentReadings = readingList[currentWeek.readingIdx]
  const totalSlots = weeks.reduce((sum, w) => sum + readingList[w.readingIdx].subtopics.length, 0)

  return (
    <div className="pres-page">
      <header className="pres-header">
        <div className="container">
          <a href="/" className="pres-back">&larr; Course Home</a>
          <h1>Paper Presentations</h1>
          <p>Sign up for a subtopic to present. Each student presents one subtopic during the semester.</p>
          <div className="pres-counter">{assignments.length} / {totalSlots} subtopics assigned</div>
        </div>
      </header>

      <main className="container">
        <div className="pres-tabs">
          {weeks.map((w, idx) => {
            const topicIdx = w.readingIdx
            const subtopicCount = readingList[topicIdx].subtopics.length
            const assigned = assignments.filter(a => a.topic_idx === topicIdx).length
            return (
              <button
                key={w.week}
                className={`pres-tab${activeTab === idx ? ' active' : ''}${assigned === subtopicCount ? ' full' : ''}`}
                onClick={() => setActiveTab(idx)}
              >
                {w.week}
                {assigned > 0 && <span className="pres-tab-badge">{assigned}/{subtopicCount}</span>}
              </button>
            )
          })}
        </div>

        <div className="pres-topic-header">
          <h2>{currentWeek.title}</h2>
          <span className="pres-topic-date">{currentWeek.date}</span>
        </div>

        <div className="pres-grid">
          {loading && <div className="pres-empty">Loading...</div>}
          {!loading && currentReadings.subtopics.map((subtopic, stIdx) => {
            const assignment = getSlotAssignment(currentWeek.readingIdx, stIdx)
            return (
              <div className={`pres-card${assignment ? ' pres-card--taken' : ''}`} key={stIdx}>
                <div className="pres-card-header">
                  <span className={`pres-card-dot pres-card-dot--st${stIdx}`} />
                  <h3 className="pres-card-title">{subtopic.name}</h3>
                </div>
                <div className="pres-card-papers">
                  {subtopic.papers.map((paper) => (
                    <a href={paper.url} target="_blank" rel="noopener noreferrer" className="pres-paper" key={paper.url}>
                      <span className="pres-paper-title">{paper.title}</span>
                      <span className="pres-paper-meta">{paper.authors} · {paper.venue}</span>
                    </a>
                  ))}
                </div>
                <div className="pres-card-footer">
                  {assignment ? (
                    <div className="pres-assigned">
                      <span className="pres-assigned-avatar">{assignment.student_name[0]}</span>
                      <span className="pres-assigned-name">{assignment.student_name}</span>
                      <button className="pres-btn-remove" onClick={() => handleRemove(assignment.id)} title="Remove">×</button>
                    </div>
                  ) : (
                    <button className="pres-btn-signup" onClick={() => handleSignUp(currentWeek.week, currentWeek.readingIdx, stIdx)}>
                      Sign Up
                    </button>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </main>

      <footer className="pres-footer">
        <div className="container">
          AI 89900 Agentic AI &middot; KAIST Spring 2026 &middot;{' '}
          <a href="/">Back to Course</a>
        </div>
      </footer>
    </div>
  )
}
