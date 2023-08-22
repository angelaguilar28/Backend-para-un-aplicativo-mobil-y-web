const express = require('express');
const DecanoController = require('../controllers/decanoController');

const router = express.Router();

//router.post('/notes', NoteController.createNote);
router.get('/escuelas', DecanoController.getEscuelas);
//router.put('/notes/:id', NoteController.updateNote);
//router.delete('/notes/:id', NoteController.deleteNote);

module.exports = router;