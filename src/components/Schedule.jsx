import { useState } from 'react'
import { curriculum } from '../data/curriculum'
import { readingList } from '../data/readingList'

export default function Schedule() {
  const [openReadings, setOpenReadings] = useState(null)

  const toggleReadings = (weekIdx) => {
    setOpenReadings(openReadings === weekIdx ? null : weekIdx)
  }

  return (
    <section className="section" id="schedule">
      <div className="container">
        <div className="section-header fade-in">
          <div className="section-label">Schedule</div>
          <h2 className="section-title">Tentative Schedule</h2>
          <p className="section-desc">
            Spring 2026 &middot; Friday 9:00–12:00 &middot; Each week features a 1.5-hour lecture
            followed by a 1.5-hour seminar with paper presentations.
          </p>
        </div>
        <div className="schedule-list">
          {curriculum.map((item, idx) => {
            const readings = item.readingIdx != null ? readingList[item.readingIdx] : null
            const totalPapers = readings ? readings.seminal.length + readings.recent.length : 0
            const isReadingsOpen = openReadings === idx

            return (
              <div
                className={`schedule-item fade-in${item.highlight ? ' schedule-item--highlight' : ''}`}
                key={item.week}
              >
                <div className="schedule-item-header">
                  <div className="schedule-week">
                    <span className="schedule-week-num">{item.week}</span>
                    <span className="schedule-week-date">{item.date}</span>
                  </div>
                  <div className="schedule-content">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                    <div className="schedule-tags">
                      {item.tags.map((tag) => (
                        <span className="schedule-tag" key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {readings && (
                  <>
                    <button
                      className={`schedule-readings-toggle${isReadingsOpen ? ' active' : ''}`}
                      onClick={() => toggleReadings(idx)}
                    >
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" width="14" height="14">
                        <path d="M2 2h9l3 3v9a1 1 0 01-1 1H2a1 1 0 01-1-1V3a1 1 0 011-1z" />
                        <path d="M5 1v4h6" />
                        <line x1="5" y1="8" x2="11" y2="8" />
                        <line x1="5" y1="10.5" x2="9" y2="10.5" />
                      </svg>
                      {totalPapers} papers
                      <svg
                        className="schedule-readings-chevron"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        width="12"
                        height="12"
                      >
                        <path d="M4 6l4 4 4-4" />
                      </svg>
                    </button>
                    <div
                      className="schedule-readings"
                      style={{ maxHeight: isReadingsOpen ? `${totalPapers * 90 + 120}px` : '0' }}
                    >
                      <div className="schedule-readings-inner">
                        {/* Seminal Papers */}
                        <div className="reading-set">
                          <div className="reading-set-label">
                            <span className="reading-set-dot reading-set-dot--seminal"></span>
                            Seminal Papers
                          </div>
                          {readings.seminal.map((paper) => (
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
                          {readings.recent.map((paper) => (
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
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
