const togglePassword = document.querySelector("#togglePassword");
const toggleConfirmPassword = document.querySelector("#toggleConfirmPassword");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm_password");

togglePassword.addEventListener("click", function () {
    // toggle the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    // toggle the eye icons
    const normalIcon = this.querySelector('.normal-icon');
    const activeIcon = this.querySelector('.active-icon');

    if (normalIcon && activeIcon) {
        // If normal icon is currently displayed, switch to active
        if (normalIcon.style.display !== 'none') {
            normalIcon.style.display = 'none';
            activeIcon.style.display = 'inline-block';
        } else {
            // Switch back to normal icon
            normalIcon.style.display = 'inline-block';
            activeIcon.style.display = 'none';
        }
    }
});

toggleConfirmPassword.addEventListener("click", function () {
    // toggle the type attribute
    const type = confirmPassword.getAttribute("type") === "password" ? "text" : "password";
    confirmPassword.setAttribute("type", type);

    // toggle the eye icons
    const normalIcon = this.querySelector('.normal-icon');
    const activeIcon = this.querySelector('.active-icon');

    if (normalIcon && activeIcon) {
        // If normal icon is currently displayed, switch to active
        if (normalIcon.style.display !== 'none') {
            normalIcon.style.display = 'none';
            activeIcon.style.display = 'inline-block';
        } else {
            // Switch back to normal icon
            normalIcon.style.display = 'inline-block';
            activeIcon.style.display = 'none';
        }
    }
});

const form = document.querySelector('form'); // replace with your form ID/class if needed
const submitButton = document.querySelector('button[type="submit"]'); // or use your submit button's ID
const passwordMsg = document.querySelector('.invalidResetPasswordMsg');
const passwordInput = document.getElementById('password');

// Initially disable submit button
submitButton.disabled = true;

// Function to check if passwords match
function checkPasswordMatch() {
    const passwordValue = password.value;
    const confirmValue = confirmPassword.value;

    if (passwordValue === confirmValue && passwordValue !== '') {
        submitButton.disabled = false;
        // Optional: add success styling
        confirmPassword.classList.remove('is-invalid');
        confirmPassword.classList.add('is-valid');
    } else {
        submitButton.disabled = true;
        // Optional: add error styling
        confirmPassword.classList.remove('is-valid');
        confirmPassword.classList.add('is-invalid');
    }

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const password = passwordInput?.value || '';
            const passwordRegex = /^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/;

            passwordMsg.textContent = '';

            let isValid = true;

            if (!passwordRegex.test(password)) {
                passwordMsg.textContent = 'Password must be 8-12 characters with letters, numbers, and special characters';
                isValid = false;
            }

            if (isValid) {
                form.submit();
            }
        });
    }
}

// Add event listeners to both password fields
password.addEventListener('input', checkPasswordMatch);
confirmPassword.addEventListener('input', checkPasswordMatch);

// Optional: Add form submit handler for additional validation
form.addEventListener('submit', function (e) {
    if (password.value !== confirmPassword.value) {
        e.preventDefault();
        alert('Passwords do not match!');
    }
});
