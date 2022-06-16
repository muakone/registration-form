const sumbitTrial = document.getElementById("sumbitTrial");
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("pwd");
const firstError = document.querySelector("#fnameError");
const lastError = document.querySelector("#lnameError");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#pwdError");
const errorSvg1 = document.querySelector("#errorImg1");
const errorSvg2 = document.querySelector("#errorImg2");
const errorSvg3 = document.querySelector("#errorImg3");
const errorSvg4 = document.querySelector("#errorImg4");
const error = document.createElement("div");

// delete error messages and
// change back the display
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

function removeRed(element) {
  element.style.border = "0.3px solid grey";
}

// remove error
function backToNormal(element, error) {
  deleteError(error);
  removeRed(element);
}

sumbitTrial.addEventListener("click", () => {
 // // validations

  //first name input
  if (firstName.value === "") {
    firstName.style.border = "1px solid red";
    firstError.style.display = "block";
    errorSvg1.style.display = "block";
  }
  //last name input
  if (lastName.value === "") {
    lastName.style.border = "1px solid red";
    lastError.style.display = "block";
    errorSvg2.style.display = "block";
  }
  //email input
  if (email.value === "") {
    email.placeholder = "email@example/com";
    email.style.border = "1px solid red";
    emailError.style.display = "block";
    errorSvg3.style.display = "block";
  }
  //password input
  if (password.value === "") {
    password.style.border = "1px solid red";
    passwordError.style.display = "block";
    errorSvg4.style.display = "block";
  }
});

firstName.addEventListener("input", () => backToNormal(firstName, firstError));
lastName.addEventListener("input", () => backToNormal(lastName, lastError));
email.addEventListener("input", () => backToNormal(email, emailError));
password.addEventListener("input", () => backToNormal(password, passwordError));

