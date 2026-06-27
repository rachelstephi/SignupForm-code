const email = document.getElementById("email");
const password = document.getElementById("password");
const emailMessage = document.getElementById("emailMessage");
const passwordMessage = document.getElementById("passwordMessage");
const form = document.getElementById("signupForm");

let emailValid = false;
let passwordValid = false;

email.addEventListener("change", function () {
    const value = email.value.trim();

    if (
        value.length > 3 &&
        value.includes("@") &&
        value.includes(".")
    ) {
        emailValid = true;
        emailMessage.textContent = "All good to go!";
        emailMessage.className = "message success";
    } else {
        emailValid = false;
        emailMessage.textContent = "Make sure email is more than 3 characters and has @ and .";
        emailMessage.className = "message error";
    }
});

password.addEventListener("change", function () {
    const value = password.value;

    if (value.length > 8) {
        passwordValid = true;
        passwordMessage.textContent = "All good to go!";
        passwordMessage.className = "message success";
    } else {
        passwordValid = false;
        passwordMessage.textContent = "Make sure password is more than 8 characters.";
        passwordMessage.className = "message error";
    }
});

form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!emailValid || !passwordValid) {
        alert("Please enter valid email and password.");
        return;
    }

    const result = confirm("Are you sure you want to submit?");

    if (result) {
        alert("Successful signup!");
    } else {
        email.value = "";
        password.value = "";
        emailMessage.textContent = "";
        passwordMessage.textContent = "";
        emailValid = false;
        passwordValid = false;
    }
});
