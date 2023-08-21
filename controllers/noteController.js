const Note = require('../models/Note');

class NoteController {
  static async createNote(req, res) {
    try {
      const { studentCode, professorCode, note, cycle, course } = req.body;
      const createdNote = await Note.create(studentCode, professorCode, note, cycle, course);
      res.json(createdNote);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while creating the note.' });
    }
  }

  static async getNotes(req, res) {
    try {
      const notes = await Note.getNotes();
      res.json(notes);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching the notes.' });
    }
  }

  static async updateNote(req, res) {
    try {
      const noteId = req.params.id;
      
      const { studentCode, professorCode, note, cycle, course } = req.body;
      
      const updatedNote = await Note.update(noteId, studentCode, professorCode, note, cycle, course);
      res.json(updatedNote);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while updating the note.' });
    }
  }

  static async deleteNote(req, res) {
    try {
      const noteId = req.params.id;

      const deletedNote = await Note.delete(noteId);
      res.json(deletedNote);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while deleting the note.' });
    }
  }
}

module.exports = NoteController;
