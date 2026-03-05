export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-brand-name">
              <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <rect width="28" height="28" rx="6" fill="#1E293B" />
                <circle cx="14" cy="9" r="2" fill="white" />
                <circle cx="8.5" cy="17" r="2" fill="white" />
                <circle cx="19.5" cy="17" r="2" fill="white" />
                <line x1="14" y1="11" x2="9.5" y2="15.5" stroke="white" strokeWidth="1.2" />
                <line x1="14" y1="11" x2="18.5" y2="15.5" stroke="white" strokeWidth="1.2" />
                <line x1="10.5" y1="17" x2="17.5" y2="17" stroke="white" strokeWidth="1.2" />
              </svg>
              Agentic AI
            </div>
            <p>
              Agentic AI — A graduate course at KAIST Kim Jaechul Graduate School of AI,
              taught by Prof. Sung Ju Hwang.
            </p>
          </div>
          <div className="footer-col">
            <h4>Course</h4>
            <ul>
              <li><a href="#overview">Overview</a></li>
              <li><a href="#grading">Grading</a></li>
              <li><a href="#instructor">Instructor</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#schedule">Schedule</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li><a href="https://www.mlai-kaist.com/" target="_blank" rel="noopener noreferrer">MLAI Lab</a></li>
              <li><a href="https://scholar.google.com/citations?user=RP4Qx3QAAAAJ" target="_blank" rel="noopener noreferrer">Google Scholar</a></li>
              <li><a href="https://deepauto.ai/" target="_blank" rel="noopener noreferrer">DeepAuto.ai</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>KAIST</h4>
            <ul>
              <li><a href="https://gsai.kaist.ac.kr/" target="_blank" rel="noopener noreferrer">Graduate School of AI</a></li>
              <li><a href="https://cs.kaist.ac.kr/" target="_blank" rel="noopener noreferrer">School of Computing</a></li>
              <li><a href="https://www.kaist.ac.kr/" target="_blank" rel="noopener noreferrer">KAIST Main</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 KAIST MLAI Lab. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="mailto:sungju.hwang@kaist.ac.kr">Contact</a>
            <a href="https://www.mlai-kaist.com/" target="_blank" rel="noopener noreferrer">MLAI Lab</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
