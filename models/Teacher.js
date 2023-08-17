const db = require('../config/db');

class Teacher {

    static async getTeacher(teacherCod) {
      try {
        const query = 'SELECT public.obtener_info_profesor($1)';
        
        const values = [teacherCod];

        const result = await db.query(query,values);
        
        return result.rows;

      } catch (error) {
        throw error;
      }
    }



    static async getTeacherSubjectsList(teacherCod) {
      try {
        const query = 'SELECT * FROM obtener_cursos_asignados($1)';
        
        const values = [teacherCod];
        const result = await db.query(query,values);      
        return result.rows;

      } catch (error) {
        throw error;
      }
    }


    static async getTeacherSubjects(subjectCod) {
      try {
        const query = 'SELECT * FROM obtener_info_curso($1)';
        
        const values = [subjectCod];
        const result = await db.query(query,values);      
        return result.rows;

      } catch (error) {
        throw error;
      }
    }

  
  }
  
  module.exports = Teacher;