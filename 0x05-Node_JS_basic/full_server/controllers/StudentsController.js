import readDatabase from '../utils.js';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const studentsByField = await readDatabase(req.database);
      let response = 'This is the list of our students\n';
      Object.keys(studentsByField).sort((a, b) => a.localeCompare(b)).forEach((field) => {
        const count = studentsByField[field].length;
        const list = studentsByField[field].join(', ');
        response += `Number of students in ${field}: ${count}. List: ${list}\n`;
      });
      res.status(200).send(response);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    try {
      const studentsByField = await readDatabase(req.database);
      const students = studentsByField[major] || [];
      const response = `List: ${students.join(', ')}`;
      res.status(200).send(response);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
