
const form = document.querySelector('form');
const submitButton = document.querySelector('button[type="submit"]');
const resetButton = document.querySelector('button[type="reset"]');


form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const firstName = document.querySelector('input[name="firstName"]').value.trim();
    const lastName = document.querySelector('input[name="lastName"]').value.trim();
    const dob = document.querySelector('input[name="dob"]').value;
    const contactNumber = document.querySelector('input[name="contactNumber"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const password = document.querySelector('input[name="password"]').value.trim();
    const confirmPassword = document.querySelector('input[name="confirmPassword"]').value.trim();
    const termsAccepted = document.querySelector('input[name="terms"]').checked;

    if (!firstName || !lastName || !dob || !contactNumber || !email || !password || !confirmPassword) {
        alert("Please fill in all fields.");
        return;
    }


    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    if (!termsAccepted) {
        alert("You must accept the terms and conditions.");
        return;
    }

    alert("Form submitted successfully!");
});

resetButton.addEventListener('click', function() {
    console.log("Form reset triggered.");
});
