const claimBtn = document.getElementById("sumbitTrial");
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("pwd");

// error messages
const firstError = document.querySelector("#fnameError");
const lastError = document.querySelector("#lnameError");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#pwdError");
const errorSvg1 = document.querySelector("#errorImg1");
const errorSvg2 = document.querySelector("#errorImg2");
const errorSvg3 = document.querySelector("#errorImg3");
const errorSvg4 = document.querySelector("#errorImg4");
const error = document.createElement("div");

// // delete error messages and
function deleteError(error) {
  if (firstName.value !== "") {
    errorSvg1.style.display = "none";
    error.style.display = "none";
  }
  if (lastName.value !== "") {
    errorSvg2.style.display = "none";
    error.style.display = "none";
  }
  if (email.value !== "") {
    errorSvg3.style.display = "none";
    error.style.display = "none";
  }
  if (password.value !== "") {
    errorSvg4.style.display = "none";
    error.style.display = "none";
  }
}

// change back the display
function antiRed(element) {
  element.style.border = "0.3px solid grey";
}

// change back to normal from error state(element,error)
function revertNormal(element, error) {
  deleteError(error);
  antiRed(element);
}

// lets add event listeners
claimBtn.addEventListener("click", () => {
  // form validations

  //first name
  if (firstName.value === "") {
    firstName.classList.add("invalid");
    firstName.style.border = "1px solid red";
    firstError.style.display = "block";
    errorSvg1.style.display = "block";
  }
  //last name
  if (lastName.value === "") {
    lastName.classList.add("invalid");
    lastName.style.border = "1px solid red";
    lastError.style.display = "block";
    errorSvg2.style.display = "block";
  }
  //email
  if (email.value === "") {
    email.classList.add("invalid");
    email.placeholder = "email@example/com";
    email.style.border = "1px solid red";
    emailError.style.display = "block";
    errorSvg3.style.display = "block";
  }
  //password
  if (password.value === "") {
    password.classList.add("invalid");
    password.style.border = "1px solid red";
    passwordError.style.display = "block";
    errorSvg4.style.display = "block";
  }
});

// keydown events when reentering the inputs
firstName.addEventListener("input", () => revertNormal(firstName, firstError));
lastName.addEventListener("input", () => revertNormal(lastName, lastError));
email.addEventListener("input", () => revertNormal(email, emailError));
password.addEventListener("input", () => revertNormal(password, passwordError));



//add red color to other elements
