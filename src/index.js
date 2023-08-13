import express from 'express';
import pg from 'pg';
import { config } from 'dotenv';

config();

const app = express();

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/ping', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    return res.json(result.rows[0]);
  } catch (error) {
    console.error('Error en la consulta:', error);
    return res.status(500).json({ error: 'Error en la consulta' });
  }
});

app.listen(3000);
console.log('Server on port: 3000');