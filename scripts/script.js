checkPasswords = () => {
  // Get values of two input fields
  let password = document.getElementById('password').value;
  let confirmPassword = document.getElementById('confirm-password').value;

  // Check if passwords match
  if (password !== confirmPassword) {
    alert("The passwords do not match.");
    return false;
  }

  // If passwords match
  return true
}