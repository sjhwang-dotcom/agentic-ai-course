export default function Grading() {
  return (
    <section className="section" id="grading">
      <div className="container">
        <div className="section-header fade-in">
          <div className="section-label">Grading Policy</div>
          <h2 className="section-title">Assessment Criteria</h2>
        </div>
        <div className="grading-grid fade-in">
          <div className="grading-card">
            <div className="grading-value">20%</div>
            <div className="grading-label">Attendance &amp; Participation</div>
            <div className="grading-desc">Active engagement in lectures, seminars, and in-class discussions.</div>
          </div>
          <div className="grading-card">
            <div className="grading-value">20%</div>
            <div className="grading-label">Paper Presentation</div>
            <div className="grading-desc">Present and lead discussion on a recent agentic AI research paper during seminar.</div>
          </div>
          <div className="grading-card">
            <div className="grading-value">60%</div>
            <div className="grading-label">Course Project</div>
            <div className="grading-desc">Team project building an AI agent system: proposal, midterm, and final deliverables.</div>
          </div>
          <div className="grading-card">
            <div className="grading-value">A+</div>
            <div className="grading-label">Grade Scale</div>
            <div className="grading-desc">Standard KAIST graduate grading scale. No curve enforcement.</div>
          </div>
        </div>
        <div className="grading-breakdown fade-in">
          <h3>Project Breakdown (60% Total)</h3>
          <div className="grading-row">
            <span className="grading-row-label">Project Proposal (no presentation)</span>
            <span className="grading-row-value">10%</span>
          </div>
          <div className="grading-row">
            <span className="grading-row-label">Midterm Report &amp; Presentation</span>
            <span className="grading-row-value">20%</span>
          </div>
          <div className="grading-row">
            <span className="grading-row-label">Final Report &amp; Presentation</span>
            <span className="grading-row-value">30%</span>
          </div>
        </div>
      </div>
    </section>
  )
}
