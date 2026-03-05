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
          <div className="grading-card grading-card--project">
            <div className="grading-value">60%</div>
            <div className="grading-label">Course Project</div>
            <div className="grading-desc">Team project building an AI agent system with three milestones.</div>
            <div className="grading-project-breakdown">
              <div className="grading-project-row">
                <span>Proposal (written)</span>
                <span>10%</span>
              </div>
              <div className="grading-project-row">
                <span>Midterm Report &amp; Presentation</span>
                <span>20%</span>
              </div>
              <div className="grading-project-row">
                <span>Final Report &amp; Presentation</span>
                <span>30%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
