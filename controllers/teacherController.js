const Teacher = require('../models/Teacher');

class TeacherController {

    static async getTeacherSubjects(req, res){
      try{
        const teacherCod = req.params.id;
        const teacher = await Teacher.getTeacherSubjects(teacherCod);
        res.json(teacher);
      }catch (error){
        res.status(500).json({error: 'An error ocurred while fetching the teacher information.'})
      }
    }


    //FUNCION PARA OBTENER LA INFORMACIÓN DE UN PROFESOR


    static async getTeacher(req, res) {
      try {
        const teacherCod = req.params.id;

        console.log('codigo en el controller:', teacherCod);

        const teacher = await Teacher.getTeacher(teacherCod);
        res.json(teacher);
      } catch (error) {

        res.status(500).json({ error: 'An error occurred while fetching the notes.' });
      }
    }  

    //FUNCION PARA OBTENER LA LISTA DE CURSOS DE UN PROFESOR

    static async getTeacherSubjectsList(req, res) {
      try {
        const teacherSubjCod = req.params.id;
        const teacher = await Teacher.getTeacherSubjectsList(teacherSubjCod);
        res.json(teacher);

      } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the notes.' });
      }
    }
  

    //FUNCION PARA OBTENER DATOS DE UN SOLO CURSO DE UN PROFESOR

    static async getTeacherSingleSubjects(req, res) {
      try {

        const teacherSubjCod = req.params.id;
        //console.log('codigo en el controller:', teacherSubjCod);
        const teacher = await Teacher.getTeacherSingleSubjects(teacherSubjCod);
        res.json(teacher);
      } catch (error) {

        res.status(500).json({ error: 'An error occurred while fetching the notes.' });
      }
    }

    // FUNCION PARA PEDIR LA LISTA DE LOS ALUMNOS POR CURSO UI PROFESOR

    static async getTeacherStudents(req, res) {
      try {
        const teacherSubjCod = req.params.id;
        const teacher = await Teacher.getTeacherStudents(teacherSubjCod);
        res.json(teacher);
      } catch (error) {

        res.status(500).json({ error: 'An error occurred while fetching the notes.' });
      }
    }

    // FALTA CONTINUAR DESARROLLO

    
    static async updateGrades(req, res) {
      try {
          const { id, examenparcial, practicas, examenfinal } = req.query;
          console.log('VALUES en controller',id, examenparcial, practicas, examenfinal );
          const updatedGrade = await Teacher.updateGrades(id, examenparcial, practicas, examenfinal);
          
          res.json(updatedGrade);
      } catch (error) {
          res.status(500).json({ error: 'An error occurred while updating the grades.' });
      }
  }



  }
  
  module.exports = TeacherController;
  