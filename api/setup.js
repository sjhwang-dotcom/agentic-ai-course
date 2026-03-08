import { getDb } from './_db.js'

export default async function handler(req, res) {
  const sql = getDb()

  await sql`
    CREATE TABLE IF NOT EXISTS ideas (
      id SERIAL PRIMARY KEY,
      author TEXT NOT NULL,
      title TEXT NOT NULL DEFAULT '',
      idea TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT NOW()
    )
  `

  await sql`
    CREATE TABLE IF NOT EXISTS interests (
      id SERIAL PRIMARY KEY,
      idea_id INTEGER NOT NULL REFERENCES ideas(id) ON DELETE CASCADE,
      name TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT NOW()
    )
  `

  await sql`
    ALTER TABLE ideas ADD COLUMN IF NOT EXISTS title TEXT NOT NULL DEFAULT ''
  `

  await sql`
    CREATE TABLE IF NOT EXISTS presentations (
      id SERIAL PRIMARY KEY,
      week TEXT NOT NULL,
      topic_idx INTEGER NOT NULL,
      subtopic_idx INTEGER NOT NULL,
      student_name TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT NOW(),
      UNIQUE(topic_idx, subtopic_idx)
    )
  `

  res.status(200).json({ ok: true, message: 'Tables created' })
}
