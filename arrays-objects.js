// Create an array of at least five patient objects.
// Each patient should have the following properties:
// {
//   id: 1,
//   firstName: "Aarav",
//   lastName: "Sharma",
//   age: 28,
//   gender: "Male",
//   email: "aarav@example.com"
// }
// Complete the following tasks:
// Display all patients in the list.
// Add a new patient to the array.
// Update a patient's email using their ID.
// Remove a patient using their ID.
// Find a patient using their ID.
// Extract a patient's first name, last name and email using object destructuring.
// Create a copy of the patient array using the spread operator.
// Merge two patient arrays using the spread operator.
// Create a function that accepts any number of patient names using rest parameters and returns them as an array.
// Create a new patient object by copying an existing patient and updating their email.

const patients = [
  {
    id: 1,
    firstName: "Vijay",
    lastName: "Sharma",
    age: 28,
    gender: "Male",
    email: "demo1@example.com",
  },
  {
    id: 2,
    firstName: "Swami",
    lastName: "Patel",
    age: 32,
    gender: "Male",
    email: "demo2@example.com",
  },
  {
    id: 3,
    firstName: "Harshada",
    lastName: "Kumar",
    age: 45,
    gender: "Female",
    email: "demo3@example.com",
  },
  {
    id: 4,
    firstName: "Snehal",
    lastName: "Singh",
    age: 29,
    gender: "Female",
    email: "demo4@example.com",
  },
  {
    id: 5,
    firstName: "Gayatri",
    lastName: "Verma",
    age: 38,
    gender: "Female",
    email: "demo5@example.com",
  },
];

// Display all patients in the list

console.log("All patients are as follows :");
patients.forEach((val) => {
  console.log(val.firstName);
});

// Add a new patient to the array
let newPatient = {
  id: 6,
  firstName: "Khushi",
  lastName: "Sharma",
  age: 28,
  gender: "Female",
  email: "demo6@example.com",
};
patients.push(newPatient);

console.log(patients);

let patientId = prompt("Enter the id:");
let newEmail = prompt("Enter the new Email:");

patients.forEach((val) => {
  if (val.id == patientId) {
    val.email = newEmail;
    console.log("Updated Email is : " + val.email);
    console.log(val);
  }
});

// Remove a patient using their ID
let removeId = prompt("Enter the id to remove patient:");
let index = patients.findIndex((val) => val.id == removeId);

if (index !== -1) {
  console.log(patients[index]);
  patients.splice(index, 1);
  console.log("Patient removed successfully.");
  console.log(patients);
} else {
  console.log("Patient not found.");
}

// Find a patient using their ID
let findId = prompt("Enter the id to find patient:");
let foundPatient = patients.find((val) => val.id == findId);
console.log("Found Patient is :");
console.log(foundPatient);

// Extract a patient's first name, last name and email using object destructuring
const { firstName, lastName, email } = foundPatient;
console.log(
  `First Name: ${firstName}, Last Name: ${lastName}, Email: ${email}`,
);

//Create a copy of the patient array using the spread operator.

const newArray = [...patients];
console.log("Copy of Patietns :");
console.log(newArray);

// Merge two patient arrays using the spread operator.

const patients2 = [
  {
    id: 7,
    firstName: "Rahul",
    lastName: "Gupta",
    age: 30,
    gender: "Male",
    email: "demo7@example.com",
  },
  {
    id: 8,
    firstName: "Priya",
    lastName: "Sharma",
    age: 25,
    gender: "Female",
    email: "demo8@example.com",
  },
];

const mergedArray = [...patients, ...patients2];
console.log("Merged Array is :");
console.log(mergedArray);

//Create a function that accepts any number of patient names using rest parameters and returns them as an array.

function getName(...firstname) {
  return firstname;
}
console.log("Output of Rest operator:");
console.log(getName("fgh", "uyt", "wer"));

//Create a new patient object by copying an existing patient and updating their email.

const existingPatient = patients[0];
const updatedPatient = { ...existingPatient, email: "hello@gmail.com" };
console.log("Updated Patient is :");
console.log(updatedPatient);
