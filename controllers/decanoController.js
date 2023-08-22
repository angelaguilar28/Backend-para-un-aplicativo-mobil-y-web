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



      static async getPeriodos(req, res) {
        try {

          const periodos = await Decano.getPeriodos();
          res.json(periodos);

        } catch (error) {
  
          res.status(500).json({ error: 'An error occurred while fetching the notes.' });
        }
      }



}

module.exports = DecanoController;
