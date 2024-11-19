import mysql from 'mysql2';

const db = mysql.createConnection({
  host: 'localhost', // replace with your DB host
  user: 'root', // replace with your DB username
  password: '', // replace with your DB password
  database: 'skillgro', // replace with your database name
});

export default function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'GET') {
    // Fetch a single course by ID
    db.query('SELECT * FROM courses WHERE id = ?', [id], (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      if (results.length === 0) return res.status(404).json({ message: 'Course not found' });
      res.status(200).json(results[0]);
    });
  } else if (req.method === 'PUT') {
    // Update a course
    const { title, description, instructor_id, is_published, course_price } = req.body;
    db.query(
      'UPDATE courses SET title = ?, description = ?, instructor_id = ?, is_published = ?, course_price = ? WHERE id = ?',
      [title, description, instructor_id, is_published, course_price, id],
      (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ message: 'Course updated' });
      }
    );
  } else if (req.method === 'DELETE') {
    // Delete a course
    db.query('DELETE FROM courses WHERE id = ?', [id], (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ message: 'Course deleted' });
    });
  }
}
