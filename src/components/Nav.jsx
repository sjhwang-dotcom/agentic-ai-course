import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#" className="nav-logo">
          <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="28" height="28" rx="6" fill="#1E293B" />
            <circle cx="14" cy="9" r="2" fill="white" />
            <circle cx="8.5" cy="17" r="2" fill="white" />
            <circle cx="19.5" cy="17" r="2" fill="white" />
            <line x1="14" y1="11" x2="9.5" y2="15.5" stroke="white" strokeWidth="1.2" />
            <line x1="14" y1="11" x2="18.5" y2="15.5" stroke="white" strokeWidth="1.2" />
            <line x1="10.5" y1="17" x2="17.5" y2="17" stroke="white" strokeWidth="1.2" />
          </svg>
          Agentic AI
        </a>
        <div className={`nav-links${open ? ' open' : ''}`}>
          {['Overview', 'Grading', 'FAQ', 'Schedule'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
          <a href="/ideas" onClick={() => setOpen(false)}>Project Ideas</a>
        </div>
        <button className="nav-mobile-toggle" aria-label="Menu" onClick={() => setOpen(!open)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
    </nav>
  )
}
