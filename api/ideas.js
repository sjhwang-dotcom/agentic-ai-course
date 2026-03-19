import { getDb } from './_db.js'

export default async function handler(req, res) {
  const sql = getDb()
  const { id, action, interestId } = req.query

  // GET /api/ideas — list all ideas with interested members
  if (req.method === 'GET') {
    const ideas = await sql`
      SELECT i.*, COALESCE(json_agg(
        json_build_object('id', t.id, 'name', t.name)
      ) FILTER (WHERE t.id IS NOT NULL), '[]') AS interested
      FROM ideas i
      LEFT JOIN interests t ON t.idea_id = i.id
      GROUP BY i.id
      ORDER BY i.created_at DESC
    `
    return res.status(200).json(ideas)
  }

  // POST /api/ideas — create new idea
  // POST /api/ideas?id=X&action=interest — express interest
  if (req.method === 'POST') {
    if (id && action === 'interest') {
      const { name } = req.body
      if (!name) {
        return res.status(400).json({ error: 'name is required' })
      }
      const existing = await sql`
        SELECT id FROM interests WHERE idea_id = ${id} AND name = ${name}
      `
      if (existing.length > 0) {
        return res.status(409).json({ error: '이미 지원한 프로젝트입니다.' })
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

    const { author, title, idea } = req.body
    if (!author || !idea) {
      return res.status(400).json({ error: 'author and idea are required' })
    }
    const result = await sql`
      INSERT INTO ideas (author, title, idea) VALUES (${author}, ${title || ''}, ${idea})
      RETURNING *
    `
    return res.status(201).json(result[0])
  }

  // DELETE /api/ideas?id=X — delete idea
  // DELETE /api/ideas?id=X&action=interest&interestId=Y — remove interest
  if (req.method === 'DELETE') {
    if (!id) {
      return res.status(400).json({ error: 'id is required' })
    }
    if (action === 'interest' && interestId) {
      await sql`DELETE FROM interests WHERE id = ${interestId} AND idea_id = ${id}`
      return res.status(200).json({ ok: true })
    }
    await sql`DELETE FROM ideas WHERE id = ${id}`
    return res.status(200).json({ ok: true })
  }

  res.setHeader('Allow', 'GET, POST, DELETE')
  res.status(405).json({ error: 'Method not allowed' })
}
