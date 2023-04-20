export default class HolbertonCourse {
  constuctor(name, length, students) {
    this._name = '';
    this._length = 0;
    this._students = [];

    this._name = name;
    this._length = length;
    this._students = students;
  }

  // getter and setter for name
  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  // getter and setter for length
  get length() {
    return this._length;
  }

  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
  }

  // getter and setter for students
  get students() {
    return this._students;
  }

  set students(students) {
    if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array of strings');
    }
    students.forEach((student) => {
      if (typeof student !== 'string') {
        throw new TypeError('Each student must be a string');
      }
    });
    this._students = students;
  }
}
