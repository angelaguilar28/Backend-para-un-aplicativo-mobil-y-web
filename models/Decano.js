const db = require('../config/db');

class Decano{

    // CONSULTA PARA OBTENER LAS ESCUELAS EN VISTA DEL DECANO

    static async getEscuelas() {
        try {
          const query = 'SELECT * FROM obtener_escuelas()';
          const result = await db.query(query);
          return result.rows;
        } catch (error) {
          throw error;
        }
      }

    // CONSULTA PARA OBTENER LOS PERIODOS EN VISTA DEL DECANO


      static async getPeriodos() {
        try {
          const query = 'SELECT * FROM obtener_periodos()';
          const result = await db.query(query);
          return result.rows;
        } catch (error) {
          throw error;
        }
      }

}









module.exports = Decano;


