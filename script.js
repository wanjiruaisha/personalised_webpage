const userForm = document.getElementById("userForm");
const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const greeting = document.getElementById("greeting");
const ageMonths = document.getElementById("ageMonths");
const adultMessage = document.getElementById("adultMessage");
const quoteContainer = document.getElementById("quoteContainer");

// Converts the user's age from years to months
function calculateAgeInMonths(age) {
  return age * 12;
}

// Updates the page using saved user data
function displayUserData() {
  const storedName = localStorage.getItem("userName");
  const storedAge = localStorage.getItem("userAge");

  if (!storedName || !storedAge) {
    return;
  }

  greeting.textContent = `Hello, ${storedName}! Welcome back.`;

  const ageInMonths = calculateAgeInMonths(Number(storedAge));
  ageMonths.textContent = `You are approximately ${ageInMonths} months old.`;

  if (Number(storedAge) >= 18) {
    adultMessage.textContent = "You can access adult content.";
  } else {
    adultMessage.textContent = "You are too young for adult content.";
  }
}

// Saves form data in localStorage
userForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const age = Number(ageInput.value);

  if (name === "" || age < 1) {
    greeting.textContent = "Please enter a valid name and age.";
    ageMonths.textContent = "";
    adultMessage.textContent = "";
    return;
  }

  localStorage.setItem("userName", name);
  localStorage.setItem("userAge", age);

  displayUserData();

  userForm.reset();
});

// Displays the motivational quote five times
function displayQuotes() {
  const quote = "Believe in yourself and keep going!";

  quoteContainer.innerHTML = "";

  for (let i = 1; i <= 5; i++) {
    const paragraph = document.createElement("p");
    paragraph.textContent = `${i}. ${quote}`;
    quoteContainer.appendChild(paragraph);
  }
}

displayUserData();
displayQuotes();