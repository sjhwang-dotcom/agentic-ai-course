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
    const count = await sql`
      SELECT COUNT(*)::int AS cnt FROM interests WHERE idea_id = ${id}
    `
    if (count[0].cnt >= 3) {
      return res.status(400).json({ error: '지원 인원이 마감되었습니다. (최대 3명)' })
    }
    await sql`INSERT INTO interests (idea_id, name) VALUES (${id}, ${name})`
    return res.status(201).json({ ok: true })
  }

  if (req.method === 'DELETE') {
    const { interestId } = req.query
    if (!interestId) {
      return res.status(400).json({ error: 'interestId is required' })
    }
    await sql`DELETE FROM interests WHERE id = ${interestId} AND idea_id = ${id}`
    return res.status(200).json({ ok: true })
  }

  res.setHeader('Allow', 'POST, DELETE')
  res.status(405).json({ error: 'Method not allowed' })
}
