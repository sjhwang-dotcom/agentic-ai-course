import { curriculum } from '../data/curriculum'

export default function Curriculum() {
  return (
    <section className="section" id="curriculum">
      <div className="container">
        <div className="section-header fade-in">
          <div className="section-label">Curriculum</div>
          <h2 className="section-title">16-Week Schedule</h2>
          <p className="section-desc">
            Each week features a 1.5-hour lecture followed by a 1.5-hour seminar with paper
            presentations and discussions.
          </p>
        </div>
        <div className="curriculum-list">
          {curriculum.map((item) => (
            <div className={`curriculum-item fade-in${item.highlight ? ' highlight' : ''}`} key={item.week}>
              <div className="curriculum-week">{item.week}</div>
              <div className="curriculum-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <div className="curriculum-tags">
                  {item.tags.map((tag) => (
                    <span className="curriculum-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
