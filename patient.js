const form = document.getElementById("patient-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const requiredFields = document.querySelectorAll("#patient-form [required]");

  const emptyFields = [...requiredFields].find((field) => {
    if (field.type === "radio" || field.type === "checkbox") {
      return false;
    }
    return field.value.trim() === "";
  });

  if (emptyFields || !form.checkValidity()) {
    alert(`Please fill all required fields correctly.${emptyFields}`);

    //Browser's validation message
    form.reportValidity();

    return;
  }

  const fullname = document.getElementById("fullname").value.trim();

  const dob = document.getElementById("dob").value;

  const gender = document.querySelector('input[name="gender"]:checked').value;

  const email = document.getElementById("email").value;

  const phone = document.getElementById("phone").value;

  const address = document.getElementById("address").value.trim();

  const emergencyName = document.getElementById("emergencyname").value.trim();

  const emergencyPhone = document.getElementById("emgphone").value;

  const relationship = document.getElementById("relationship").value;

  const reason = document.getElementById("reason").value;

  const description = document.getElementById("description").value.trim();

  const termsAccepted = document.getElementById("terms").checked;

  //Calculate patient's age
  const birthDate = new Date(dob + "T00:00:00");
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  if (age < 18) {
    alert("Registration failed! Patient must be at least 18 years old.");

    return;
  }

  console.log("Patient Registration Details:");

  console.log({
    fullname,
    dob,
    age,
    gender,
    email,
    phone,
    address,
    emergencyName,
    emergencyPhone,
    relationship,
    reason,
    description,
    termsAccepted,
  });

  alert("Registration successful! Welcome, " + fullname + ".");
});
