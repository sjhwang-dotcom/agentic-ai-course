const items = [
  { label: 'Schedule', value: 'Friday 9:00 – 12:00' },
  { label: 'Format', value: '1.5h Lecture + 1.5h Seminar' },
  { label: 'Location', value: 'TBD' },
  { label: 'Department', value: 'Kim Jaechul Graduate School of AI' },
  { label: 'Instructor', value: 'Prof. Sung Ju Hwang' },
  { label: 'Contact', value: 'sjhwang82@kaist.ac.kr' },
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
