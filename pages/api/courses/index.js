import mysql from 'mysql2';

const db = mysql.createConnection({
  host: 'raasacademy-db.c3ce4yum6ngd.us-east-1.rds.amazonaws.com',     // Database host, usually 'localhost' for local development
  user: 'raasacademy', // Replace with your MySQL username
  password: 'raasacademy2024', // Replace with your MySQL password
  database: 'raasacademy-db', // Replace with your database name
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
