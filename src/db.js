const {Pool} = require('pg');

const pool = new Pool({
user: 'proyecto_idm_user',
host: 'dpg-cjc347k5kgrc7392ing0-a.oregon-postgres.render.com',
database: 'proyecto_idm',
password: 'dt0PDUcT9hoqGppKhvFUJPlhmdjf3kgb',
port: 5432

})


async function connect(){
    pool.connect();
    console.log('Database: Connected')

}

module.exports = {connect};