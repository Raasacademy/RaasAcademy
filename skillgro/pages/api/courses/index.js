import mysql from 'mysql2';

const db = mysql.createConnection({
  host: 'localhost', // replace with your DB host
  user: 'root', // replace with your DB username
  password: '', // replace with your DB password
  database: 'skillgro', // replace with your database name
});

export default function handler(req, res) {
  if (req.method === 'GET') {
    // Fetch all courses
    db.query('SELECT * FROM courses', (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json(results);
    });
  } else if (req.method === 'POST') {
    // Create a new course
    const { title, description, instructor_id, is_published, course_price } = req.body;
    db.query(
      'INSERT INTO courses (title, description, instructor_id, is_published, course_price) VALUES (?, ?, ?, ?, ?)',
      [title, description, instructor_id, is_published, course_price],
      (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Course created', id: results.insertId });
      }
    );
  }
}
