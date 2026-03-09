import { getDb } from './_db.js'

export default async function handler(req, res) {
  const sql = getDb()

  if (req.method === 'GET') {
    const rows = await sql`
      SELECT * FROM presentations ORDER BY topic_idx, subtopic_idx
    `
    return res.status(200).json(rows)
  }

  if (req.method === 'POST') {
    const { week, topic_idx, subtopic_idx, student_name } = req.body
    if (!week || topic_idx == null || subtopic_idx == null || !student_name) {
      return res.status(400).json({ error: 'All fields are required' })
    }

    const existing = await sql`
      SELECT id FROM presentations WHERE student_name = ${student_name.trim()}
    `
    if (existing.length > 0) {
      return res.status(409).json({ error: 'Each student can only present one subtopic. Please remove your current assignment first.' })
    }

    const slot = await sql`
      SELECT id FROM presentations WHERE topic_idx = ${topic_idx} AND subtopic_idx = ${subtopic_idx}
    `
    if (slot.length > 0) {
      return res.status(409).json({ error: 'This subtopic has already been assigned.' })
    }

    const result = await sql`
      INSERT INTO presentations (week, topic_idx, subtopic_idx, student_name)
      VALUES (${week}, ${topic_idx}, ${subtopic_idx}, ${student_name.trim()})
      RETURNING *
    `
    return res.status(201).json(result[0])
  }

  res.setHeader('Allow', 'GET, POST')
  res.status(405).json({ error: 'Method not allowed' })
}
