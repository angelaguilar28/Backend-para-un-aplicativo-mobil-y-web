const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const gradesRoutes = require('./routes/gradesRoutes');
const studentRoutes = require('./routes/studentRoutes');
const teacherRoutes = require('./routes/teacherRoutes');
const decanoRoutes = require('./routes/decanoRoutes');
const adminRoutes = require('./routes/adminRoutes')

const app = express();

app.use(cors())

app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/api', gradesRoutes);
app.use('/api', studentRoutes);
app.use('/api', teacherRoutes);
app.use('/api', decanoRoutes);
app.use('/api', adminRoutes);



// app.use((req,res,next) => {
//   res.header('Access-Control-Allow-Origin','*');
//   res.header('Access-Control-Allow-Origin','Authorization, X-API-KEY,X-Requested-With, Content-Type,Accept,Access-Control-Allow-Request-Method');
//   res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,DELETE');
//   res.header('Allow','GET,POST,OPTIONS,PUT,DELETE');
//   next();
// })



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
