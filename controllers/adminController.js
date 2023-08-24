const Admin = require('../models/Admin');

class AdminController {


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


      static async getProfesorPeriodo(req, res) {
        try {
          const {periodo,escuela} = req.query;
          console.log(periodo,escuela);
          const profesores = await Admin.getProfesorPeriodo( periodo,escuela);
          res.json(profesores);

        } catch (error) {
  
          res.status(500).json({ error: 'An error occurred while fetching the notes.' });
        }
      }




      static async getProfesorPeriodoCurso(req, res) {
        try {
          const {periodo,escuela,profesor} = req.query;
          console.log(periodo,escuela,profesor);
          const cursos = await Admin.getProfesorPeriodoCurso( periodo,escuela,profesor);
          res.json(cursos);

        } catch (error) {
  
          res.status(500).json({ error: 'An error occurred while fetching the notes.' });
        }
      }

}

module.exports = AdminController;
