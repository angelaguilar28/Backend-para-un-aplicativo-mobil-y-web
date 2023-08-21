const db = require('../config/db');

class AuthController {
  static async login(req, res) {
    try {

      const username = req.params.email;
      const password = req.params.pswd;

      // console.log('El usuario: ',username);
      // console.log('La contraseña: ',password);

      const values = [username,password]

      const user = await db.query('SELECT * FROM validar_usuario( $1 , $2 )', values);
      
      if (user.rows.length === 0) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }

      res.json(user.rows);

    } catch (error) {
      res.status(500).json({ error: 'An error occurred while logging in.' });
    }
  }
}

module.exports = AuthController;
