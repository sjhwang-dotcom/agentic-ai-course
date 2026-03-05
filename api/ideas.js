import { getDb } from './_db.js'

export default async function handler(req, res) {
  const sql = getDb()

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

  if (req.method === 'POST') {
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

  res.setHeader('Allow', 'GET, POST')
  res.status(405).json({ error: 'Method not allowed' })
}
