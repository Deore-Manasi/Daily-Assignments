const form = document.getElementById("appointment-form");
const bookeddates = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const appointmentDate = document.getElementById("appdate").value;

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const selectedDate = new Date(appointmentDate + "T00:00:00");
  console.log(appointmentDate);
  console.log(today);
  console.log(selectedDate);

  if (selectedDate < today) {
    alert("Please select a valid date for the appointment.");
    return;
  }

  if (bookeddates.includes(appointmentDate)) {
    alert("This date is already booked. Please select another date.");
    return;
  }

  bookeddates.push(appointmentDate);
  alert(
    `Appointment booked successfully for ${username} on ${appointmentDate}.`,
  );

  const appointmentData = {
    date: appointmentDate,
    name: username,
  };

  console.log("Appointment Details:", appointmentData);
});
