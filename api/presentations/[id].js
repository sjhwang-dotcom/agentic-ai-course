import { getDb } from '../_db.js'

export default async function handler(req, res) {
  const sql = getDb()
  const { id } = req.query

  if (req.method === 'DELETE') {
    await sql`DELETE FROM presentations WHERE id = ${id}`
    return res.status(200).json({ ok: true })
  }

  res.setHeader('Allow', 'DELETE')
  res.status(405).json({ error: 'Method not allowed' })
}
