const form = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const submitBtn = document.getElementById("submit-btn");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateInput(){
  const emailValid = emailRegex.test(emailInput.value.trim());
  const passwordValid = passwordInput.value.trim().length >= 6;

  emailError.classList.toggle("hidden", emailValid);
  passwordError.classList.toggle("hidden", passwordValid);

  submitBtn.disabled = !(emailValid && passwordValid);
}

emailInput.addEventListener("input", validateInput);
passwordInput.addEventListener("input", validateInput);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Form submitted successfully!");
});
