document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registration-form");

  const feedbackDiv = document.getElementById("form-feedback");
        
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
  });

  //Retrieve User Inputs
  const username = username.trim();
  document.getElementById("username").value = username;
 
  document.getElementById("email").value = email;
  const email = email.trim();
  document.getElementById("password").value = password;

  // Validate username
  const isValid = true;
  const messages = [];

  if (username.length < 3) {
    isValid = false;
    messages.push("username must be at least 3 characters long.");
  }

  // Validate email
  if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(emailInput.value)) {
    isValid = false;
    messages.push("Please enter a valid email address");
  }

  // Validate password
  const passwordInput = document.getElementById("password");
  const passwordError = document.getElementById("passwordError");
  if (password.length < 8) {
    isValid = false;
    messages.push("Password must be at least 6 characters long.");
  }

  //feedback message
  feedbackDiv.style.display="block";
  if (isValid) {
    feedbackDiv.textContent="Registration successful!";
    feedbackDiv.style.color="#28a745";
}else {
    messages.join("<br>") = feedbackDiv.innerHTML;
    feedbackDiv.style.color = "#dc3545";
}

});
