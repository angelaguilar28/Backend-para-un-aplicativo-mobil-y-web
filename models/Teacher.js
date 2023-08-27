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


    // ACTUALIZACION DE NOTAS 
    
   static async updateGrades(id, examenparcial, practicas, examenfinal) {
     try {
      
       const query = 'SELECT actualizar_notas($1 , $2, $3, $4)'
       const values = [id, examenparcial, practicas, examenfinal];
       console.log('VALUES en QUERY',id, examenparcial, practicas, examenfinal );
       const result = await db.query(query, values);
       return result.rows[0];
       
      } catch (error) {
        throw error;
      }
    }


    //VALIDACION DE EDICIÓN DE CELDAS

    static async updateValidate(id_validacion, permiso_editar_notas, notasf_ep, notasf_pp,notasf_ef) {
      try {
       
        const query = 'SELECT public.actualizar_validacion_y_cursos($1 , $2, $3, $4, $5)'
        const values = [id_validacion, permiso_editar_notas, notasf_ep, notasf_pp, notasf_ef];
        console.log('VALUES en QUERY',id_validacion, permiso_editar_notas, notasf_ep, notasf_pp,notasf_ef);
        const result = await db.query(query, values);
        return result.rows[0];
        
       } catch (error) {
         throw error;
       }
     }


      // UPDATE DE URL DE LA FOTO TOMADA POR EL PROFESOR

     static async updatePhoto(id,urlImg) {
      try {
       
        const query = 'SELECT public.actualizar_img($1 , $2)'
        const values = [id,urlImg];
        console.log('VALUES en QUERY',id,urlImg);
        const result = await db.query(query, values);
        return result.rows[0];
        
       } catch (error) {
         throw error;
       }
     }
 



  }
  
  module.exports = Teacher;