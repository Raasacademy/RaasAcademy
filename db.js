// db.js
import mysql from 'mysql2';

const db = mysql.createPool({
  host: 'raasacademy-db.c3ce4yum6ngd.us-east-1.rds.amazonaws.com',     // Database host, usually 'localhost' for local development
  user: 'raasacademy', // Replace with your MySQL username
  password: 'raasacademy2024', // Replace with your MySQL password
  database: 'raasacademy-db', // Replace with your database name
});

export default db;
