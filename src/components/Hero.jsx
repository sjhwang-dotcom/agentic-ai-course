export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="fade-in">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            KAIST Graduate School of AI &middot; Fall 2025
          </div>
          <h1>Introduction to<br />Agentic AI</h1>
          <p className="hero-sub">
            A comprehensive graduate course covering the design, implementation, and deployment
            of AI agent systems &mdash; from architecture patterns and tool use to real-world applications.
          </p>
          <div className="hero-actions">
            <a href="#curriculum" className="btn-primary">
              View Curriculum
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#logistics" className="btn-secondary">
              Course Logistics
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
        <div className="hero-metrics fade-in">
          <div className="hero-metric">
            <div className="hero-metric-value">16 Weeks</div>
            <div className="hero-metric-label">Full Semester</div>
          </div>
          <div className="hero-metric-divider"></div>
          <div className="hero-metric">
            <div className="hero-metric-value">Fri 9–12</div>
            <div className="hero-metric-label">Lecture + Seminar</div>
          </div>
          <div className="hero-metric-divider"></div>
          <div className="hero-metric">
            <div className="hero-metric-value">KAIST</div>
            <div className="hero-metric-label">Graduate School of AI</div>
          </div>
        </div>
      </div>
    </section>
  )
}
