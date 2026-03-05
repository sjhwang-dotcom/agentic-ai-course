const cards = [
  {
    title: 'Agent Architectures',
    desc: 'ReAct, Plan-and-Execute, Reflection, and other core agentic design patterns for building autonomous AI systems.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: 'Tools & Memory',
    desc: 'Function calling, Model Context Protocol (MCP), RAG pipelines, and short/long-term memory systems for grounded agents.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: 'Multi-Agent Systems',
    desc: 'Orchestration, delegation, and collaboration patterns across multiple agents using frameworks like CrewAI and LangGraph.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    title: 'Real-World Applications',
    desc: 'Code-generation agents, desktop agents, web browsing agents, embodied agents, and social & empathetic agents.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
]

export default function Overview() {
  return (
    <section className="section section-alt" id="overview">
      <div className="container">
        <div className="section-header fade-in">
          <div className="section-label">Course Overview</div>
          <h2 className="section-title">What You Will Learn</h2>
          <p className="section-desc">
            From foundational agent architectures to production-ready multi-agent systems,
            this course covers the full stack of agentic AI.
          </p>
        </div>
        <div className="overview-grid">
          {cards.map((c) => (
            <div className="overview-card fade-in" key={c.title}>
              <div className="overview-icon">{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
