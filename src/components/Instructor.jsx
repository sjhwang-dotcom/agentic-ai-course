export default function Instructor() {
  return (
    <section className="section section-alt" id="instructor">
      <div className="container">
        <div className="section-header fade-in">
          <div className="section-label">Instructor</div>
          <h2 className="section-title">Meet Your Instructor</h2>
        </div>
        <div className="instructor-card fade-in">
          <div className="instructor-img">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
              <circle cx="12" cy="8" r="4" />
              <path d="M20 21a8 8 0 10-16 0" />
            </svg>
          </div>
          <div className="instructor-info">
            <h3>Prof. Sung Ju Hwang</h3>
            <div className="instructor-role">KAIST Endowed Chair Professor &middot; Kim Jaechul Graduate School of AI</div>
            <div className="instructor-bio">
              <p>
                Sung Ju Hwang is a KAIST Endowed Chair Professor at the Kim Jaechul Graduate
                School of AI and the School of Computing, where he leads the MLAI (Machine Learning
                and Artificial Intelligence) Lab. He is also the CEO of DeepAuto.ai.
              </p>
              <p>
                He received his Ph.D. from the University of Texas at Austin, and was a postdoctoral
                researcher at Disney Research. His research spans generative AI, LLMs, self-evolving AI,
                on-device learning, and safe AI, with 15,500+ citations and publications at NeurIPS, ICML,
                ICLR, and CVPR.
              </p>
            </div>
            <div className="instructor-links">
              <a href="https://www.mlai-kaist.com/" target="_blank" rel="noopener noreferrer" className="instructor-link">
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 8a6 6 0 1112 0A6 6 0 012 8z" /><path d="M8 2a10 10 0 014 6 10 10 0 01-4 6 10 10 0 01-4-6 10 10 0 014-6z" /><line x1="2" y1="8" x2="14" y2="8" /></svg>
                MLAI Lab
              </a>
              <a href="https://scholar.google.com/citations?user=RP4Qx3QAAAAJ" target="_blank" rel="noopener noreferrer" className="instructor-link">
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 4l6-2 6 2-6 4z" /><path d="M12 6v5c0 2-2.7 3-4 3s-4-1-4-3V6" /></svg>
                Google Scholar
              </a>
              <a href="https://deepauto.ai/" target="_blank" rel="noopener noreferrer" className="instructor-link">
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="12" height="12" rx="2" /><path d="M6 6h4M6 8h4M6 10h2" /></svg>
                DeepAuto.ai
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
