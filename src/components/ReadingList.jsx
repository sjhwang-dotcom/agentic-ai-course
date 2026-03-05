import { useState } from 'react'
import { readingList } from '../data/readingList'

export default function ReadingList() {
  const [openTopic, setOpenTopic] = useState(null)

  const toggle = (idx) => {
    setOpenTopic(openTopic === idx ? null : idx)
  }

  return (
    <section className="section section-alt" id="reading-list">
      <div className="container">
        <div className="section-header fade-in">
          <div className="section-label">Reading List</div>
          <h2 className="section-title">Papers by Topic</h2>
          <p className="section-desc">
            Key papers and resources organized by topic. Each topic includes seminal works
            and recent (2025–2026) papers for seminar presentations and discussions.
          </p>
        </div>
        <div className="reading-list fade-in">
          {readingList.map((group, idx) => {
            const totalPapers = group.seminal.length + group.recent.length
            return (
              <div className={`reading-topic${openTopic === idx ? ' active' : ''}`} key={group.topic}>
                <button className="reading-topic-header" onClick={() => toggle(idx)}>
                  <div className="reading-topic-left">
                    <span className="reading-topic-count">{totalPapers}</span>
                    <span className="reading-topic-name">{group.topic}</span>
                  </div>
                  <span className="reading-topic-icon">
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <line x1="8" y1="3" x2="8" y2="13" />
                      <line x1="3" y1="8" x2="13" y2="8" />
                    </svg>
                  </span>
                </button>
                <div className="reading-topic-papers" style={{ maxHeight: openTopic === idx ? `${totalPapers * 100 + 120}px` : '0' }}>
                  <div className="reading-topic-papers-inner">
                    {/* Seminal Papers */}
                    <div className="reading-set">
                      <div className="reading-set-label">
                        <span className="reading-set-dot reading-set-dot--seminal"></span>
                        Seminal Papers
                      </div>
                      {group.seminal.map((paper) => (
                        <a
                          href={paper.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="reading-paper"
                          key={paper.title}
                        >
                          <div className="reading-paper-title">{paper.title}</div>
                          <div className="reading-paper-meta">
                            <span>{paper.authors}</span>
                            <span className="reading-paper-venue">{paper.venue}</span>
                          </div>
                        </a>
                      ))}
                    </div>
                    {/* Recent Papers */}
                    <div className="reading-set">
                      <div className="reading-set-label">
                        <span className="reading-set-dot reading-set-dot--recent"></span>
                        Recent (2025–2026)
                      </div>
                      {group.recent.map((paper) => (
                        <a
                          href={paper.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="reading-paper reading-paper--recent"
                          key={paper.title}
                        >
                          <div className="reading-paper-title">{paper.title}</div>
                          <div className="reading-paper-meta">
                            <span>{paper.authors}</span>
                            <span className="reading-paper-venue">{paper.venue}</span>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
