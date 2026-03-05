const items = [
  { label: 'Semester', value: 'Spring 2026 (Mar 6 – Jun 19)' },
  { label: 'Schedule', value: 'Friday 9:00 – 12:00' },
  { label: 'Format', value: '1.5h Lecture + 1.5h Seminar' },
  { label: 'Location', value: 'TBD' },
  { label: 'Department', value: 'Kim Jaechul Graduate School of AI' },
  { label: 'Instructor', value: 'Prof. Sung Ju Hwang' },
  { label: 'Contact', value: 'sungju.hwang@kaist.ac.kr' },
]

export default function Logistics() {
  return (
    <section className="logistics-section" id="logistics">
      <div className="container fade-in">
        <h2>Course Logistics</h2>
        <p>Key information for enrolled and prospective students.</p>
        <div className="logistics-grid">
          {items.map((item) => (
            <div className="logistics-item" key={item.label}>
              <div className="logistics-item-label">{item.label}</div>
              <div className="logistics-item-value">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
