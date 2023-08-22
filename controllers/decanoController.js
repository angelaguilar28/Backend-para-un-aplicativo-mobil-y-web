const Decano = require('../models/Decano');

class DecanoController {


    static async getEscuelas(req, res) {
        try {

          const escuelas = await Decano.getEscuelas();
          res.json(escuelas);

        } catch (error) {
  
          res.status(500).json({ error: 'An error occurred while fetching the notes.' });
        }
      }





}

module.exports = DecanoController;
