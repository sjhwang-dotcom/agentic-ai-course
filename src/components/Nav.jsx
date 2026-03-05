import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#" className="nav-logo">
          <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="28" height="28" rx="6" fill="#1E293B" />
            <path d="M8 10.5L14 7L20 10.5V17.5L14 21L8 17.5V10.5Z" stroke="white" strokeWidth="1.5" fill="none" />
            <circle cx="14" cy="14" r="2.5" fill="white" />
          </svg>
          Agentic AI
        </a>
        <div className={`nav-links${open ? ' open' : ''}`}>
          {['Overview', 'Curriculum', 'Reading List', 'Grading', 'Instructor', 'FAQ'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
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
