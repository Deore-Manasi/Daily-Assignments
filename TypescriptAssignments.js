/*  1.. Patient Information Management
Store patient information using appropriate data types.
Create an array of patients.
Write functions to add and display patients.
Create a function to calculate a patient's age.
Use appropriate return types for all functions.
Avoid using any wherever possible.*/
const Allpatients = [
    {
        _id: 1,
        name: "Aarav Sharma",
        phone: 9876543210,
        dob: "1989-05-15",
        bg: "O+",
        gender: "Male",
        email: "aarav.sharma@example.com",
        address: { city: "Pune", pincode: 411001 },
    },
    {
        _id: 2,
        name: "Priya Patil",
        phone: 9823456781,
        dob: "1996-08-20",
        bg: "A+",
        email: "priya.patil@example.com",
        gender: "Female",
        address: { city: "Nashik", pincode: 422001 },
    },
    {
        _id: 3,
        name: "Rohan Deshmukh",
        phone: 9765432109,
        dob: "1978-12-10",
        bg: "B-",
        email: "rohan.deshmukh@example.com",
        gender: "Male",
        address: { city: "Mumbai", pincode: 400001 },
    },
    {
        _id: 4,
        name: "Sneha Kulkarni",
        phone: 9890123456,
        dob: "2004-03-25",
        bg: "AB+",
        email: "sneha.kulkarni@example.com",
        gender: "Female",
        address: { city: "Nagpur", pincode: 440001 },
    },
    {
        _id: 5,
        name: "Vikram Joshi",
        phone: 9922334455,
        dob: "1961-07-15",
        bg: "O-",
        email: "vikram.joshi@example.com",
        gender: "Male",
        address: { city: "Aurangabad", pincode: 431001 },
    },
];
let user = Allpatients;
(function display(user) {
    user.forEach((val) => {
        console.log(`Name : ${val.name} || City : ${val.address?.city ? val.address.city : "Not Available"} `);
    });
})(user);
function dispAge(user) {
    console.log("Age of Patients : ");
    user.forEach((val) => {
        let currDate = new Date();
        let userBirth = new Date(val.dob);
        let age = currDate.getFullYear() - userBirth.getFullYear();
        console.log(age);
    });
}
dispAge(user);
const appointments = [
    {
        _id: 1,
        _patientid: 1,
        appDate: new Date("2024-07-15"),
        time: "10:00 AM",
        docName: "Dr. Mehta",
        status: "scheduled",
    },
    {
        _id: 2,
        _patientid: 2,
        appDate: new Date("2024-07-16"),
        time: "02:30 PM",
        docName: "Dr. Sharma",
        status: "completed",
    },
    {
        _id: 3,
        _patientid: 3,
        appDate: new Date("2024-07-17"),
        time: "11:15 AM",
        docName: "Dr. Kulkarni",
        status: "cancelled",
    },
    {
        _id: 4,
        _patientid: 4,
        appDate: new Date("2024-07-18"),
        time: "09:45 AM",
        docName: "Dr. Joshi",
        status: "scheduled",
    },
    {
        _id: 5,
        _patientid: 5,
        appDate: new Date("2024-07-19"),
        time: "03:00 PM",
        docName: "Dr. Patel",
        status: "scheduled",
    },
];
function addPatient(user) {
    if (Allpatients.find((p) => p._id === user._id)) {
        console.log(`Patient with ID ${user._id} already exists.`);
        return;
    }
    Allpatients.push(user);
    console.log(`Patient with ID ${user._id} added successfully.`);
}
function updatePatient(id, updatedInfo) {
    const patientIndex = Allpatients.findIndex((p) => p._id === id);
    if (patientIndex === -1) {
        console.log(`Patient with ID ${id} not found.`);
        return;
    }
    Allpatients[patientIndex] = { ...Allpatients[patientIndex], ...updatedInfo };
    console.log(`Patient with ID ${id} updated successfully.`);
}
function findPatient(id) {
    return Allpatients.find((p) => p._id === id);
}
addPatient({
    _id: 6,
    name: "Ananya Reddy",
    phone: 9876543210,
    dob: "1992-11-05",
    bg: "A-",
    gender: "Female",
    address: { city: "Hyderabad", pincode: 500001 },
    email: "ananya.reddy@example.com",
});
updatePatient(2, {
    phone: 9876543210,
    address: { city: "Pune", pincode: 411001 },
});
findPatient(3)
    ? console.log("Paitent Found :", findPatient(3))
    : console.log("Patient not found");
/*3..Appointment Status Management
Define appointment statuses: scheduled, completed, and cancelled.
Create an appointment array.
Filter appointments based on status.
Write a function that accepts either a patient ID (number) or email (string).
Handle missing patient details using optional chaining and nullish coalescing.
Use type narrowing to handle different input types.*/
var AppointmentStatus;
(function (AppointmentStatus) {
    AppointmentStatus["Scheduled"] = "scheduled";
    AppointmentStatus["Completed"] = "completed";
    AppointmentStatus["Cancelled"] = "cancelled";
})(AppointmentStatus || (AppointmentStatus = {}));
function filterbyStatus(status) {
    return appointments.filter((appointment) => appointment.status === status);
}
function getAppointment(input) {
    if (typeof input === "number") {
        return appointments.filter((appointment) => appointment._patientid === input);
    }
    else {
        return appointments.filter((appointment) => {
            const patient = Allpatients.find((p) => p.email === input);
            return patient ? appointment._patientid === patient._id : false;
        });
    }
}
/*4..Task: Reusable Utility Functions
Create reusable generic functions:
getById() – find a patient or appointment by ID.
filterData() – filter any array based on a condition.
getFirstItem() – return the first item from an array.
createResponse() – return API response data with a generic type.
Create a reusable generic interface for API responses.*/
function getById(array, id) {
    return array.find((item) => item._id === id);
}
console.log("getByID output : ", getById(Allpatients, 1));
function filterData(arr, id) {
    return arr.filter((item) => item._id === id);
}
console.log("filterData output : ", filterData(appointments, 3));
function getFirstItem(arr) {
    return arr[0];
}
console.log("getFirstItem output : ", getFirstItem(Allpatients));
function createResponse(success, message, data) {
    return {
        success,
        message,
        data,
    };
}
console.log("createResponse output : ", createResponse(true, "Data fetched successfully", Allpatients));
/* 5..Task: Patient Update Management
Using the existing Patient interface:
Create an update function using Partial<Patient>.
Create a patient summary using Pick<Patient, ...>.
Create a patient object without sensitive or unnecessary fields using Omit.
Create a readonly patient record.
Use Record to maintain appointment counts by status.
*/
function patientSummary(patient) {
    return `Patient Summary: Name - ${patient.name}, DOB - ${patient.dob}, Blood Group - ${patient.bg}`;
}
console.log("patientSummary output : ", patientSummary({
    name: "Aarav Sharma",
    dob: "1989-05-15",
    bg: "O+",
}));
function toPublicPatient(p) {
    const { phone, email, emgContact, ...rest } = p;
    return rest;
}
console.log("toPublicPatient output : ", Allpatients.map(toPublicPatient));
const frozenPatient = Allpatients[0];
console.log("frozenPatient output : ", frozenPatient);
function countByStatus(appointment) {
    const counts = {
        scheduled: 0,
        completed: 0,
        cancelled: 0,
    };
    appointment.forEach((a) => {
        counts[a.status]++;
    });
    return counts;
}
console.log("Appointment counts :", countByStatus(appointments));
export {};
