//select elements
const cookieContainer = document.querySelector(".cookie-container");
const fortuneText = document.getElementById("fortune");

// List of fortune messages
const fortunes = [
  "You will have a wonderful surprise today! 🎉",
  "A new friend is coming into your life 🐾",
  "Good luck is heading your way 🍀",
  "Happiness is in your future 😊",
  "You will discover something amazing today ✨",
  "Adventure awaits! 🌟",
  "Your creativity will shine today 🎨",
  "A dream you have will come true 💫"
];

//click event to open cookie
cookieContainer.addEventListener("click", showFortune);

//show random fortune
function showFortune() {
  if (cookieContainer.classList.contains("cookie-broken")) return;

  // Add class to animate the halves apart
  cookieContainer.classList.add("cookie-broken");

  // Pick a random fortune
  const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  fortuneText.textContent = randomFortune;
}

//reset the cookie to normal
function resetCookie() {
  cookieContainer.classList.remove("cookie-broken");
  fortuneText.textContent = "";
}
