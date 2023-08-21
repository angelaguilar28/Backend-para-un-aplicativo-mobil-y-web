const Teacher = require('../models/Teacher');

class TeacherController {



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

    static async UpdateGrades(req, res) {
      try {

        const { id,examenparcial, practicas, examenfinal, notafinal } = req.body;
        const updatedGrade = await Note.updateGrades(id, examenparcial, practicas, examenfinal, notafinal);
        res.json(updatedGrade);
      } catch (error) {
        res.status(500).json({ error: 'An error occurred while updating the note.' });
      }
    }
  
  }
  
  module.exports = TeacherController;
  