import { useState } from 'react'

const faqs = [
  {
    q: 'What are the prerequisites for this course?',
    a: 'Solid foundations in machine learning and deep learning are expected. Proficiency in Python programming and familiarity with PyTorch or similar frameworks is required. Prior experience with LLMs or NLP is helpful but not mandatory.',
  },
  {
    q: 'How are the lectures and seminars structured?',
    a: 'Each Friday session consists of two parts: a 1.5-hour lecture by the instructor covering the week\'s topic, followed by a 1.5-hour seminar where students present and discuss recent research papers related to the topic.',
  },
  {
    q: 'What does the course project involve?',
    a: 'Teams will build an AI agent system addressing a real-world problem. The project has three milestones: a written proposal (no presentation), a midterm report with presentation, and a final report with presentation and live demo. Projects can range from novel agent architectures to practical applications.',
  },
  {
    q: 'How does the paper presentation work?',
    a: 'Each student will present at least one recent research paper on agentic AI during the seminar sessions. Presentations should include a clear summary, critical analysis, and discussion questions. A curated reading list will be provided at the beginning of the semester.',
  },
  {
    q: 'How can I contact the instructor?',
    a: 'You can reach Prof. Hwang via email at sungju.hwang@kaist.ac.kr. Office hours and TA information will be announced at the start of the semester. Course announcements will be shared through KLMS.',
  },
]

export default function FAQ() {
  const [activeIdx, setActiveIdx] = useState(null)

  const toggle = (idx) => {
    setActiveIdx(activeIdx === idx ? null : idx)
  }

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-header fade-in">
          <div className="section-label">FAQ</div>
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>
        <div className="faq-list fade-in">
          {faqs.map((faq, idx) => (
            <div className={`faq-item${activeIdx === idx ? ' active' : ''}`} key={idx}>
              <button className="faq-question" onClick={() => toggle(idx)}>
                <span>{faq.q}</span>
                <span className="faq-icon">
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <line x1="8" y1="3" x2="8" y2="13" />
                    <line x1="3" y1="8" x2="13" y2="8" />
                  </svg>
                </span>
              </button>
              <div className="faq-answer" style={{ maxHeight: activeIdx === idx ? '200px' : '0' }}>
                <div className="faq-answer-inner">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
