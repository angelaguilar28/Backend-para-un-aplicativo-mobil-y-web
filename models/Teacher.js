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
   static async update(id, studentCode, examenparcial, practicas, examenfinal, course) {
     try {
       const query = 'UPDATE notes SET student_code = $1*';
       const values = [studentCode, professorCode, note, cycle, course, id];

       const result = await db.query(query, values);
       return result.rows[0];
      } catch (error) {
        throw error;
      }
    }






  
  }
  
  module.exports = Teacher;