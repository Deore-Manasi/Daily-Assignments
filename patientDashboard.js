// API URL
const API_URL = "https://jsonplaceholder.typicode.com/users";

const usersContainer = document.getElementById("usersContainer");
const statusMessage = document.getElementById("statusMessage");
const searchInput = document.getElementById("searchInput");
const reloadBtn = document.getElementById("reloadBtn");

let allUsers = [];

// 1. Fetch users from API
async function fetchUsers() {
  try {
    statusMessage.textContent = "Loading users...";
    usersContainer.innerHTML = "";

    const response = await fetch(API_URL);
    console.log(response);

    if (!response.ok) {
      throw new Error("Failed to fetch user data");
    }

    const users = await response.json();
    console.log(users);

    allUsers = users;

    // Check if data is available
    if (allUsers.length === 0) {
      statusMessage.textContent = "No user data available.";
      return;
    }

    // Display user cards
    displayUsers(allUsers);
  } catch (error) {
    console.error("Error fetching users:", error);

    statusMessage.textContent = "Something went wrong! Please try again.";
  }
}

// 2. Display users as cards
function displayUsers(users) {
  usersContainer.innerHTML = "";

  if (users.length === 0) {
    statusMessage.textContent = "No users found.";
    return;
  }

  statusMessage.textContent = `Total Users: ${users.length}`;

  // Create a card for each user
  users.forEach((user) => {
    const card = document.createElement("div");

    card.classList.add("user-card");

    card.innerHTML = `
            <h3>${user.name}</h3>

            <p>
                <strong>Email:</strong> ${user.email}
            </p>

            <p>
                <strong>Phone:</strong> ${user.phone}
            </p>

            <p>
                <strong>City:</strong> ${user.address.city}
            </p>
        `;

    // Add card to container
    usersContainer.appendChild(card);
  });
}

// 3. Search users by name
searchInput.addEventListener("input", function () {
  const searchValue = searchInput.value.toLowerCase().trim();

  const filteredUsers = allUsers.filter((user) => {
    return user.name.toLowerCase().includes(searchValue);
  });

  displayUsers(filteredUsers);
});

// 4. Reload user data
reloadBtn.addEventListener("click", function () {
  searchInput.value = "";

  fetchUsers();
});

// 5. Load users when page opens
fetchUsers();
