// Write separate JavaScript functions to perform the following tasks:
// Create a function that accepts a patient's first and last name and returns their full name.
// Create a function that accepts a patient's age and returns whether they are an adult.
// Create a function that accepts two numbers and returns their sum.
// Create a function that accepts a consultation fee and discount percentage and returns the final amount.
// Create a function that accepts a patient's name and returns a greeting message.
// Create a function that accepts a number and returns its factorial.

// 1. Fullname generating function
let firstName;
let lastName;

firstName = prompt("Enter your patient's firstname: ");
lastName = prompt("Enter patient's lastName :");
console.log(firstName);
console.log(lastName);

let getFullName = (firstName, lastName) => {
  return firstName + " " + lastName;
};

alert(`Full name of patient is ${getFullName(firstName, lastName)}`);

//2.patient's age and adult status checking

let age;
age = prompt("Enter the patient's age :");
console.log(age);

let getAdultStatus = (age) => {
  if (age >= 20 && age <= 40) {
    return true;
  }
  return false;
};

if (getAdultStatus(age)) {
  alert(`The patient is adult of ${age} years old`);
} else {
  alert(`The patient is not an adult`);
}

// 3. Two numbers and returns their sum.

let num1 = Number(prompt("Enter a num1"));
let num2 = Number(prompt("Enter a num2"));

let getSum = (num1, num2) => {
  return num1 + num2;
};

alert(`The sumation of no.s is ${getSum(num1, num2)}`);

// 4. consultation fee and discount percentage and returns the final amount.

let fee = Number(prompt("Enter the consultation fee: "));
let discount = Number(prompt("Enter the discount percentage: "));

let getFinalAmount = (fee, discount) => {
  let discountAmount = (fee * discount) / 100;
  return fee - discountAmount;
};

alert(`The final amount after discount is ${getFinalAmount(fee, discount)}`);

// 5. Patient's name and returns a greeting message.
let patientName = prompt("Enter the patient's name: ");
let getGreeting = (name) => {
  return `Hello, ${name}! Welcome to our clinic.`;
};
alert(getGreeting(patientName));

// 6. A number and returns its factorial.
let number = Number(prompt("Enter a number to calculate its factorial: "));
let getFact = (num) => {
  if (num < 0) {
    return "factorial is not possible for negative numbers";
  }
  if (num === 0) {
    return 1;
  }
  return num * getFact(num - 1);
};
if (typeof getFact(number) === "string") {
  alert(getFact(number));
} else {
  alert(`The factorial of ${number} is ${getFact(number)}`);
}
