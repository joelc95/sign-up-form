checkPasswords = () => {
  // Get values of two input fields
  let password = document.getElementById('password').value;
  let confirmPassword = document.getElementById('confirm-password').value;

  // Check if passwords match
  if (password !== confirmPassword) {
    // alert("The passwords do not match.");
    document.querySelectorAll(".password-input").forEach(element => {
      element.classList.add("no-match")
    })
    return false;
  }

  // If passwords match
  document.querySelectorAll(".password-input").forEach(element => {
    element.classList.remove("no-match")
  })
  return true
}

// Password check on unfocus
document.querySelectorAll(".password-input").forEach(element => {
  console.log(element)
  element.addEventListener("focusout", (event) => {
    checkPasswords()
  })
});

// Toggle show/unshow password and icon
const togglePassword = document.getElementById("toggle-password");

let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirm-password');

// On click
togglePassword.addEventListener('click', e => {
  if (password.getAttribute('type') === 'password') {
    password.setAttribute("type", 'text');
    confirmPassword.setAttribute("type", 'text');
    togglePassword.classList.remove('fa-eye')
    togglePassword.classList.add('fa-eye-slash')
  } else {
    password.setAttribute("type", 'password');
    confirmPassword.setAttribute("type", 'password');
    togglePassword.classList.remove('fa-eye-slash')
    togglePassword.classList.add('fa-eye')
  }
})