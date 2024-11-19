// db.js
import mysql from 'mysql2';

const db = mysql.createPool({
  host: 'localhost',     // Database host, usually 'localhost' for local development
  user: 'root', // Replace with your MySQL username
  password: '', // Replace with your MySQL password
  database: 'skillgro', // Replace with your database name
});

export default db;
