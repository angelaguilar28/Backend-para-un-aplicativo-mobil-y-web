const db = require('../config/db');

class AuthController {
  static async login(req, res) {
    try {
      const { username, password } = req.body;

      const user = await db.query('SELECT * FROM users WHERE username = $1', [username]);
      if (user.rows.length === 0) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }

      if (user.rows[0].password !== password) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }

      res.json({ message: 'Login successful' });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while logging in.' });
    }
  }
}

module.exports = AuthController;
