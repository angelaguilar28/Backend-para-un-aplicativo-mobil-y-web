const Grades = require('../models/Grades');

class GradesController {
  static async createGrades(req, res) {
    try {
      const { studentCode, professorCode, note, cycle, course } = req.body;
      const createdGrade = await Grades.create(studentCode, professorCode, note, cycle, course);
      res.json(createdGrade);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while creating the grades.' });
    }
  }

  static async getGrades(req, res) {
    try {
      const grades = await Grades.getGrades();
      res.json(grades);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching the grades.' });
    }
  }

  static async updateGrades(req, res) {
    try {
      const gradeId = req.params.id;
      const { studentCode, professorCode, note, cycle, course } = req.body;

      const updatedGrade = await Grades.update(gradeId, studentCode, professorCode, note, cycle, course);
      res.json(updatedGrade);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while updating the grades.' });
    }
  }

  static async deleteGrades(req, res) {
    try {
      const gradeId = req.params.id;

      const deletedGrade = await Grades.delete(gradeId);
      res.json(deletedGrade);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while deleting the grades.' });
    }
  }
}

module.exports = GradesController;
