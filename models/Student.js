const db = require('../config/db');

class Student {
    // static async create(studentCode, professorCode, note, cycle, course) {
    //   try {
    //     const query = 'INSERT INTO notes (student_code, professor_code, note, cycle, course) VALUES ($1, $2, $3, $4, $5) RETURNING *';
    //     const values = [studentCode, professorCode, note, cycle, course];
  
    //     const result = await db.query(query, values);
    //     return result.rows[0];
    //   } catch (error) {
    //     throw error;
    //   }
    // }
  
    static async getStudent() {
      try {
        const query = 'SELECT  FROM alumnos WHERE id_alumno = ${2018000329}';
        const result = await db.query(query);
        return result.rows;
      } catch (error) {
        throw error;
      }
    }
  
    // static async update(id, studentCode, professorCode, note, cycle, course) {
    //   try {
    //     const query = 'UPDATE notes SET student_code = $1, professor_code = $2, note = $3, cycle = $4, course = $5 WHERE id = $6 RETURNING *';
    //     const values = [studentCode, professorCode, note, cycle, course, id];
  
    //     const result = await db.query(query, values);
    //     return result.rows[0];
    //   } catch (error) {
    //     throw error;
    //   }
    // }
  
    // static async delete(id) {
    //   try {
    //     const query = 'DELETE FROM notes WHERE id = $1 RETURNING *';
    //     const values = [id];
  
    //     const result = await db.query(query, values);
    //     return result.rows[0];
    //   } catch (error) {
    //     throw error;
    //   }
    // }
  }
  
  module.exports = Student;