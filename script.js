const form = document.getElementById('registration-form');

// Validate username
const usernameInput = document.getElementById('username');
const usernameError = document.getElementById('usernameError');
if (usernameInput.Value.length < 3) {
    usernameError.textContent = 'username must be at least 3 characters long.';
    return;
} else {
    usernameError.textContent ='';
}

// Validate email
const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');
if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(emailInput.value)) {
    emailError.textContent = 'Please enter a valid email address.';
    return;
} else {
    emailError.textContent = '';
}

// Validate password
const passwordInput = document.getElementById('password');
const passwordError = document.getElementById('passwordError');
if ( passwordInput.value.length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters long.';
    return;
} else {
    passwordError.textContent = '';
}