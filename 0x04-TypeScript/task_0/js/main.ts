// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  location: "New York",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 23,
  location: "Los Angeles",
};

// Create an array containing the two students
const studentsList: Student[] = [student1, student2];

// Get a reference to the table element in the DOM
const table = document.querySelector("table");

// Loop through the students and add a new row to the table for each one
studentsList.forEach((student) => {
  // Create a new row element
  const row = document.createElement("tr");

  // Add a cell for the first name
  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  row.appendChild(firstNameCell);

  // Add a cell for the location
  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;
  row.appendChild(locationCell);

  // Add the row to the table
  table.appendChild(row);
});

