document.addEventListener('DOMContentLoaded', function () {
    const togglePassword = document.querySelector("#togglePassword");
    const password = document.querySelector("#password");
    const form = document.getElementById('loginForm');
    const userInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const usernameMsg = document.querySelector('.invalidUsernameMsg');
    const passwordMsg = document.querySelector('.invalidPasswordMsg');

    // Password toggle functionality
    if (togglePassword && password) {
        togglePassword.addEventListener("click", function () {
            const type = password.getAttribute("type") === "password" ? "text" : "password";
            password.setAttribute("type", type);

            const normalIcon = this.querySelector('.normal-icon');
            const activeIcon = this.querySelector('.active-icon');

            if (normalIcon && activeIcon) {
                if (normalIcon.style.display !== 'none') {
                    normalIcon.style.display = 'none';
                    activeIcon.style.display = 'inline-block';
                } else {
                    normalIcon.style.display = 'inline-block';
                    activeIcon.style.display = 'none';
                }
            }
        });
    }

    // Form validation
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const username = userInput?.value || '';
            const password = passwordInput?.value || '';
            const usernameRegex = /^[a-zA-Z0-9-_]{4,24}$/;
            const passwordRegex = /^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/;

            usernameMsg.textContent = '';
            passwordMsg.textContent = '';

            let isValid = true;

            if (!usernameRegex.test(username)) {
                usernameMsg.textContent = 'Username must be 4-24 characters (letters, numbers, - or _)';
                isValid = false;
            }

            if (!passwordRegex.test(password)) {
                passwordMsg.textContent = 'Password must be 8-12 characters with letters, numbers, and special characters';
                isValid = false;
            }

            if (isValid) {
                form.submit();
            }
        });
    }
});