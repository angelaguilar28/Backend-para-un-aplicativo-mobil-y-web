const Student = require('../models/Student');

class StudentController {

    static async getStudent(req, res) {
      try {
        const studentCod = req.params.id;
        const student = await Student.getStudent(studentCod);
        res.json(student);
      } catch (error) {

        res.status(500).json({ error: 'An error occurred while fetching the students.' });
      }
    }

    static async getSection(req, res) {
      try {
        const studentCod = req.params.id;

        const student = await Student.getSection(studentCod);
        res.json(student);

      } catch (error) {

        res.status(500).json({ error: 'An error occurred while fetching the sections.' });
      }
    }
  
  }
  
  module.exports = StudentController;
  