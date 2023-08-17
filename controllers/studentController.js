const Student = require('../models/Student');

class StudentController {

    static async getStudent(req, res) {
      try {
        const studentCod = req.params.id;
        //console.log('codigo en el controller:', studentCod); 
        const student = await Student.getStudent(studentCod);
        res.json(student);
      } catch (error) {

        res.status(500).json({ error: 'An error occurred while fetching the notes.' });
      }


    }

    static async getSections(req, res) {
      try {
        const studentCod = req.params.id;
        //console.log('codigo en el controller:', studentCod);
        const student = await Student.getSection(studentCod);
        res.json(student);
      } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the notes.' });
      }
    }

  }
  
  module.exports = StudentController;
  