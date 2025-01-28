const form = document.getElementById('emailForm');
const emailInput = document.getElementById('email');
const inValidMsg= document.getElementById('emailNotValidMessage')

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = emailInput.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
        inValidMsg.innerHTML = "Invalid Email";
        return;
    }

    // If validation passes, you can submit the form
    form.submit();
});