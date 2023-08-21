const db = require('../config/db');

class Student {

  
    static async getStudent(studentCod) {
      try {
        const query = 'SELECT * FROM obtener_info_alumno($1)';

        const values = [studentCod];

        const result = await db.query(query, values);
        return result.rows;

      } catch (error) {
        throw error;
      }
    }


      static async getSection(studentCod) {
      try {
        const query = 'SELECT * FROM obtener_cursos_matriculados($1)';

        const values = [studentCod];

        //console.log(values);
        const result = await db.query(query, values);
        return result.rows;
        
      } catch (error) {
        throw error;
      }
    }
  
  }
  
  module.exports = Student;