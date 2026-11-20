// Requirements:
// Display patient information.
// Add a new patient through a form.
// Edit and delete patient details.
// Search patients by name.
// Validate form fields.
// Store data in localStorage.
// Use interfaces, types, generics, and utility types wherever appropriate.
// Keep the code separated into modules.

let editingId: number | null = null;

interface Patient {
  readonly _id: number;
  name: string;
  age: number;
  gender: string;
  phone: string;
  email: string;
  condition: string;
}
const Allpatients: Patient[] = [
  {
    _id: 1,
    name: "Aarav Sharma",
    age: 35,
    gender: "Male",
    phone: "9876543210",
    email: "aarav.sharma@example.com",
    condition: "Fever",
  },

  {
    _id: 2,
    name: "Priya Patil",
    age: 28,
    gender: "Female",
    phone: "9823456781",
    email: "priya.patil@example.com",
    condition: "Diabetes",
  },

  {
    _id: 3,
    name: "Rohan Deshmukh",
    age: 45,
    gender: "Male",
    phone: "9765432109",
    email: "rohan.deshmukh@example.com",
    condition: "Blood Pressure",
  },

  {
    _id: 4,
    name: "Sneha Kulkarni",
    age: 22,
    gender: "Female",
    phone: "9890123456",
    email: "sneha.kulkarni@example.com",
    condition: "Migraine",
  },
];

function displayPatients(user: Patient[]): void {
  const patientList: HTMLElement | null =
    document.getElementById("patientTableBody");
  patientList!.innerHTML = "";
  user.forEach((patient) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${patient.name}</td>
      <td>${patient.age}</td>
      <td>${patient.gender}</td>
      <td>${patient.phone}</td>
      <td>${patient.email}</td>
      <td>${patient.condition}</td>
      <td><button type="button" class="edit-btn" data-id="${patient._id}">✏️</button></td>
      <td><button type="button" class="delete-btn" data-id="${patient._id}">🗑️</button></td>
      
    `;

    if (patientList !== null) {
      patientList!.appendChild(row);
      const emptyMessage = document.getElementById("emptyMessage");
      //make the empty message disappear when there are patients
      if (emptyMessage !== null) {
        emptyMessage.innerHTML = "";
      }
    } else {
      console.error("Patient list element not found.");
    }
  });
}

function getPatientForm() {
  const form = document.getElementById("patientForm") as HTMLFormElement | null;
  const nameInput: HTMLInputElement | null = document.getElementById(
    "patientName",
  ) as HTMLInputElement;
  const ageInput: HTMLInputElement | null = document.getElementById(
    "age",
  ) as HTMLInputElement;
  const genderInput: HTMLSelectElement | null = document.getElementById(
    "gender",
  ) as HTMLSelectElement;
  const phoneInput: HTMLInputElement | null = document.getElementById(
    "phone",
  ) as HTMLInputElement;
  const emailInput: HTMLInputElement | null = document.getElementById(
    "email",
  ) as HTMLInputElement;
  const conditionInput: HTMLInputElement | null = document.getElementById(
    "condition",
  ) as HTMLInputElement;

  const newPatient: Patient = {
    _id: editingId ?? Math.max(0, ...Allpatients.map((p) => p._id)) + 1,
    name: nameInput!.value,
    age: parseInt(ageInput!.value),
    gender: genderInput!.value,
    phone: phoneInput!.value,
    email: emailInput!.value,
    condition: conditionInput!.value,
  };
  form?.reset();
  addPatient(newPatient);
  editingId = null;
  const btn = document.getElementById("submitBtn");
  if (btn) btn.textContent = "Add Patient";

  console.log("Patient added");
}

function addPatient(patient: Patient): void {
  const index = Allpatients.findIndex((p) => p._id === patient._id);

  if (index !== -1) {
    Allpatients[index] = patient;
    console.log("Patient Updated Successfully !!");
  } else {
    Allpatients.push(patient);
    console.log("Paitent Added Sunccessfully !!");
  }
  displayPatients(Allpatients);

  // Allpatients.push(patient);
  // displayPatients(Allpatients);
  // console.log("Patient displayed");

  localStorage.setItem("patients", JSON.stringify(Allpatients));
}

const submitButton: HTMLElement | null = document.getElementById("submitBtn");
if (submitButton !== null) {
  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    getPatientForm();
    console.log("form fecthed");
  });
}

const tableBody: HTMLElement | null =
  document.getElementById("patientTableBody");

tableBody?.addEventListener("click", (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  const button = target.closest<HTMLButtonElement>("button[data-id]");
  if (!button) return;

  const id = Number(button.dataset.id);

  if (button.classList.contains("delete-btn")) {
    deletePatient(id);
  } else if (button.classList.contains("edit-btn")) {
    startEdit(id);
  }
});

function deletePatient(id: number): void {
  const index = Allpatients.findIndex((p) => p._id === id);
  if (index === -1) return;

  Allpatients.splice(index, 1);
  console.log("Patient Delete Successfully !!");
  displayPatients(Allpatients);
  localStorage.setItem("patients", JSON.stringify(Allpatients));
}

function setValue(id: string, value: string): void {
  const el = document.getElementById(id) as
    | HTMLInputElement
    | HTMLSelectElement
    | null;
  if (el) el.value = value;
}

function startEdit(id: number): void {
  const index = Allpatients.findIndex((p) => p._id === id);
  const patient = Allpatients[index];
  if (!patient) return;

  setValue("patientName", patient.name);
  setValue("age", String(patient.age));
  setValue("gender", patient.gender);
  setValue("phone", String(patient.phone));
  setValue("email", patient.email);
  setValue("condition", patient.condition);
  editingId = id;
  const btn = document.getElementById("submitBtn");
  if (btn) btn.textContent = "Update Patient";
}

// const saved = localStorage.getItem("patients");
// if (saved) {
//   Allpatients.splice(0, Allpatients.length, ...JSON.parse(saved));
// }

displayPatients(Allpatients);
