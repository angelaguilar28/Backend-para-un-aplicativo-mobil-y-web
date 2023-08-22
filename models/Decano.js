const db = require('../config/db');

class Decano{

    static async getEscuelas() {
        try {
          const query = 'SELECT * FROM obtener_escuelas()';
          const result = await db.query(query);
          return result.rows;
        } catch (error) {
          throw error;
        }
      }


}

module.exports = Decano;


