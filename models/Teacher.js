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
    static async getTeacherSubjects(teacherCod) {
      try {
        const query = 'SELECT obtener_cursos_asignados($1)';        
        const values = [teacherCod];
        const result = await db.query(query,values);

        return result.rows;
      } catch (error) {
        throw error;
      }
    }



    static async getTeacherSubjectsList(teacherSubjCod) {
      try {

        const query = 'SELECT * FROM obtener_cursos_asignados($1)';
        const values = [teacherSubjCod];
        const result = await db.query(query,values);      
        return result.rows;
        
      } catch (error) {
        throw error;
      }
    }


    static async getTeacherSingleSubjects(subjectCod) {
      try {
        const query = 'SELECT * FROM obtener_info_curso($1)';
        
        const values = [subjectCod];
        const result = await db.query(query,values);      
        return result.rows;

      } catch (error) {
        throw error;
      }
    }

    static async getTeacherStudents(subjectCod) {
      try {
        const query = 'SELECT * FROM obtener_lista_alumnos($1);';
        
        const values = [subjectCod];
        const result = await db.query(query,values);      
        return result.rows;

      } catch (error) {
        throw error;
      }
    }


    // FALTA TERMINAR DE DESARROLLAR
   static async updateGrades(id, examenparcial, practicas, examenfinal) {
     try {
      
       const query = 'SELECT actualizar_notas ($1 , $2, $3, $4)'
       const values = [id, examenparcial, practicas, examenfinal];
       console.log('VALUES en QUERY',id, examenparcial, practicas, examenfinal );
       const result = await db.query(query, values);
       return result.rows[0];
       
      } catch (error) {
        throw error;
      }
    }
  }
  
  module.exports = Teacher;