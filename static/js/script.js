const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


document.addEventListener("DOMContentLoaded", function () {
  const signInForm = document.querySelector(".sign-in-form");
  const signUpForm = document.querySelector(".sign-up-form");


  signInForm.addEventListener("submit", function (event) {
    event.preventDefault();
    validateSignInForm();
  });

  signUpForm.addEventListener("submit", function (event) {
    event.preventDefault();
    validateSignUpForm();
  });

  function showToast(message, type) {
    const toast = document.createElement("div");
    toast.classList.add("toast", type);
    toast.innerText = message;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 3000); // Adjust the timeout duration as needed
  }

  // function validateSignInForm() {
  //   const username = signInForm.querySelector('input[type="text"]').value;
  //   const password = signInForm.querySelector('input[type="password"]').value;


  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!emailRegex.test(username)) {
  //     showToast("Please enter a valid email address.", "error");
  //     return;
  //   }


  //   if (password === "") {
  //     showToast("Please enter your password.", "error");
  //     return;
  //   }

  //   showToast("Sign-in successful!", "success");


  // }

  function validateSignInForm() {
    const username = signInForm.querySelector('input[type="text"]').value;
    const password = signInForm.querySelector('input[type="password"]').value;

    // Valid credentials for testing purposes
    const validUsername = "test@example.com";
    const validPassword = "Test@123";

    // Check if provided credentials match the valid ones
    if (username === validUsername && password === validPassword) {
      showToast("Sign-in successful!", "success");

      // Redirect to index1.html with some parameters
      redirectToIndex1(username);
    } else {
      showToast("Invalid username or password.", "error");
    }
  }

  // Function to redirect to index1.html with parameters
  function redirectToIndex1(username) {
    // You can add any additional parameters to the URL if needed
    window.location.href = '/index1'
  }


  function validateSignUpForm() {
    const username = signUpForm.querySelector('input[type="text"]').value;
    const email = signUpForm.querySelector('input[type="email"]').value;
    const password = signUpForm.querySelector('input[type="password"]').value;

    if (username === "" || email === "" || password === "") {
      showToast("Please fill in all fields.", "error");
    } else {
      if (isPasswordStrong(password)) {
        showToast("Sign-up successful!", "success");
        // Perform sign-up logic if validation passes
        // You may want to redirect or perform additional actions here
      } else {
        showToast("Weak password. Password should be at least 8 characters long and include a mix of uppercase, lowercase, and numbers.", "error");
      }
    }
  }


  function isPasswordStrong(password) {
    // Password should be at least 8 characters long
    // and include a mix of uppercase, lowercase, and numbers
    const lengthRegex = /.{8,}/;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const numberRegex = /\d/;

    return (
      lengthRegex.test(password) &&
      uppercaseRegex.test(password) &&
      lowercaseRegex.test(password) &&
      numberRegex.test(password)
    );
  }
// indicator

const passwordInput = document.getElementById("password");
  passwordInput.addEventListener("input", strengthChecker);

function toggle() {
  const passwordInput = document.getElementById("password");
  const toggleIcon = document.getElementById("toggle");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleIcon.innerHTML = '<i class="fas fa-eye-slash"></i>';
  } else {
    passwordInput.type = "password";
    toggleIcon.innerHTML = '<i class="fas fa-eye"></i>';
  }
}

// Event listener for the password toggle icon
const toggleIcon = document.getElementById("toggle");
toggleIcon.addEventListener("click", toggle);


let parameters = {
  count : false,
  letters : false,
  numbers : false,
  special : false
}
let strengthBar = document.getElementById("strength-bar");
let msg = document.getElementById("msg");

function strengthChecker(){
  let password = document.getElementById("password").value;

  parameters.letters = (/[A-Za-z]+/.test(password))?true:false;
  parameters.numbers = (/[0-9]+/.test(password))?true:false;
  parameters.special = (/[!\"$%&/()=?@~`\\.\';:+=^*_-]+/.test(password))?true:false;
  parameters.count = (password.length > 7)?true:false;

  let barLength = Object.values(parameters).filter(value=>value);

  console.log(Object.values(parameters), barLength);

  strengthBar.innerHTML = "";
  for( let i in barLength){
      let span = document.createElement("span");
      span.classList.add("strength");
      strengthBar.appendChild(span);
  }

  let spanRef = document.getElementsByClassName("strength");
  for( let i = 0; i < spanRef.length; i++){
      switch(spanRef.length - 1){
          case 0 :
              spanRef[i].style.background = "#ff3e36";
              msg.textContent = "Your password is very weak";
              break;
          case 1:
              spanRef[i].style.background = "#ff691f";
              msg.textContent = "Your password is weak";
              break;
          case 2:
              spanRef[i].style.background = "#ffda36";
              msg.textContent = "Your password is good";
              break;
          case 3:
              spanRef[i].style.background = "#0be881";
              msg.textContent = "Your password is strong";
              break;
      }
  }
}

});
