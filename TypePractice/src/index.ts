// 1. API URL
const API_URL: string = "https://jsonplaceholder.typicode.com/users";

// 2. Define the structure of API data
interface Address {
  city: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: Address;
}

// 3. Get HTML elements
const usersContainer = document.getElementById("usersContainer");
const statusMessage = document.getElementById("statusMessage");
const searchInput = document.getElementById("searchInput");
const reloadBtn = document.getElementById("reloadBtn");

// 4. Validate and narrow DOM element types
if (
  !(usersContainer instanceof HTMLDivElement) ||
  !(statusMessage instanceof HTMLElement) ||
  !(searchInput instanceof HTMLInputElement) ||
  !(reloadBtn instanceof HTMLButtonElement)
) {
  throw new Error("Required DOM elements are missing or have incorrect types.");
}

// 5. Create stable references after validation
const usersContainerElement = usersContainer;
const statusMessageElement = statusMessage;
const searchInputElement = searchInput;
const reloadBtnElement = reloadBtn;

// 6. Store all users
let allUsers: User[] = [];

// 7. Validate API data at runtime
function isUser(value: unknown): value is User {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const user = value as Record<string, unknown>;

  if (
    typeof user.id !== "number" ||
    typeof user.name !== "string" ||
    typeof user.email !== "string" ||
    typeof user.phone !== "string" ||
    typeof user.address !== "object" ||
    user.address === null
  ) {
    return false;
  }

  const address = user.address as Record<string, unknown>;

  return typeof address.city === "string";
}

// 8. Fetch users from API
async function fetchUsers(): Promise<void> {
  try {
    statusMessageElement.textContent = "Loading users...";
    usersContainerElement.replaceChildren();

    reloadBtnElement.disabled = true;

    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch user data.");
    }

    // API response is treated as unknown until validated
    const data: unknown = await response.json();

    if (!Array.isArray(data) || !data.every(isUser)) {
      throw new Error("Invalid user data received from API.");
    }

    const users: User[] = data;

    allUsers = users;

    if (allUsers.length === 0) {
      statusMessageElement.textContent = "No user data available.";
      return;
    }

    displayUsers(allUsers);
  } catch (error: unknown) {
    console.error("Error fetching users:", error);

    statusMessageElement.textContent =
      "Something went wrong! Please try again.";
  } finally {
    reloadBtnElement.disabled = false;
  }
}

// 9. Display users
function displayUsers(users: User[]): void {
  usersContainerElement.replaceChildren();

  if (users.length === 0) {
    statusMessageElement.textContent = "No users found.";
    return;
  }

  statusMessageElement.textContent = `Total Users: ${users.length}`;

  users.forEach((user: User) => {
    const card = document.createElement("div");
    card.classList.add("user-card");

    const nameHeading = document.createElement("h3");
    nameHeading.textContent = user.name;

    const emailParagraph = document.createElement("p");
    const emailLabel = document.createElement("strong");
    emailLabel.textContent = "Email: ";
    emailParagraph.append(emailLabel, user.email);

    const phoneParagraph = document.createElement("p");
    const phoneLabel = document.createElement("strong");
    phoneLabel.textContent = "Phone: ";
    phoneParagraph.append(phoneLabel, user.phone);

    const cityParagraph = document.createElement("p");
    const cityLabel = document.createElement("strong");
    cityLabel.textContent = "City: ";
    cityParagraph.append(cityLabel, user.address.city);

    card.append(nameHeading, emailParagraph, phoneParagraph, cityParagraph);

    usersContainerElement.appendChild(card);
  });
}

// 10. Search users
searchInputElement.addEventListener("input", () => {
  const searchValue = searchInputElement.value.toLowerCase().trim();

  const filteredUsers: User[] = allUsers.filter((user) =>
    user.name.toLowerCase().includes(searchValue),
  );

  displayUsers(filteredUsers);
});

// 11. Reload users
reloadBtnElement.addEventListener("click", () => {
  searchInputElement.value = "";
  fetchUsers();
});

// 12. Load users when the page opens
fetchUsers();
