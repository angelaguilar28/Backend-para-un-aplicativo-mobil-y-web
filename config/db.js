require('dotenv').config();

const{ Pool } = require ('pg')

//const conexion = 'postgres://proyecto_idm_user:dt0PDUcT9hoqGppKhvFUJPlhmdjf3kgb@dpg-cjc347k5kgrc7392ing0-a.oregon-postgres.render.com/proyecto_idm?ssl=true';


const pool = new Pool({
    //connectionString: conexion,
    connectionString: process.env.DATABASE_URL,
});

module.exports = pool;