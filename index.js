const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const noteRoutes = require('./routes/noteRoutes');
const db = require('./config/db');

const app = express();

app.use(bodyParser.json());
app.use('/auth', authRoutes);
app.use('/api', noteRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// app.get('/', (req, res) => {
//   res.send('Hello World');
// });

/* app.get('/ping', async (req, res) => {
 try {
   const result = await pool.query('SELECT NOW()');
    return res.json(result.rows[0]);
  } catch (error) {
    console.error('Error en la consulta:', error);
    return res.status(500).json({ error: 'Error en la consulta' });
 }
});*/
