const db = require('../config/db');

class Admin{

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

      
      static async getProfesorPeriodo(periodo,escuela) {
        try {
          const values = [periodo,escuela];
          console.log(values);
          const query = 'SELECT * FROM obtener_profesores_periodo( $1 , $2 )';
          const result = await db.query(query,values);
          return result.rows;
        } catch (error) {
          throw error;
        }
      }

      
      static async getProfesorPeriodoCurso(periodo,escuela,profesor) {
        try {
          const values = [periodo,escuela,profesor];
          console.log(values);
          const query = 'SELECT * FROM obtener_cursos_y_ids_por_profesor( $1 , $2 ,$3)';
          const result = await db.query(query,values);
          return result.rows;
        } catch (error) {
          throw error;
        }
      }




}

module.exports = Admin;
