const express = require('express');
const NoteController = require('../controllers/noteController');

const router = express.Router();

router.post('/notes', NoteController.createNote);
router.get('/notes', NoteController.getNotes);
router.put('/notes/:id', NoteController.updateNote);
router.delete('/notes/:id', NoteController.deleteNote);

module.exports = router;