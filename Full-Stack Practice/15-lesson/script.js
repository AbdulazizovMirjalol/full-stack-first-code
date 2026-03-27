const display = document.getElementById("display");

function appendChar(char) {
  display.value += char;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.toString().slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Xato";
    setTimeout(clearDisplay, 1500);
  }
}

// svetafor
const redLight = document.getElementById("red");
const yellowLight = document.getElementById("yellow");
const greenLight = document.getElementById("green");

let currentStep = 0;

function changeTrafficLight() {
  redLight.className = "circle";
  yellowLight.className = "circle";
  greenLight.className = "circle";

  if (currentStep === 0) {
    redLight.classList.add("active-red");
  } else if (currentStep === 1) {
    yellowLight.classList.add("active-yellow");
  } else if (currentStep === 2) {
    greenLight.classList.add("active-green");
  }

  currentStep++;
  if (currentStep > 2) {
    currentStep = 0;
  }
}

changeTrafficLight();

setInterval(changeTrafficLight, 2000);

const signupForm = document.getElementById("signup-form");
const loginForm = document.getElementById("login-form");

signupForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("signup-username").value;
  const email = document.getElementById("signup-email").value;

  console.log("Ro'yxatdan o'tilmoqda: ", { username, email });
  alert("Muvaffaqiyatli ro'yxatdan o'tdingiz: " + username);

  signupForm.reset();
});

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("login-email").value;

  console.log("Tizimga kirilmoqda: ", email);
  alert("Xush kelibsiz, " + email);

  loginForm.reset();
});
