import { getDb } from '../../_db.js'

export default async function handler(req, res) {
  const sql = getDb()
  const { id } = req.query

  if (req.method === 'POST') {
    const { name } = req.body
    if (!name) {
      return res.status(400).json({ error: 'name is required' })
    }
    const existing = await sql`
      SELECT id FROM interests WHERE idea_id = ${id} AND name = ${name}
    `
    if (existing.length > 0) {
      return res.status(409).json({ error: 'Already expressed interest' })
    }
    await sql`INSERT INTO interests (idea_id, name) VALUES (${id}, ${name})`
    return res.status(201).json({ ok: true })
  }

  res.setHeader('Allow', 'POST')
  res.status(405).json({ error: 'Method not allowed' })
}
