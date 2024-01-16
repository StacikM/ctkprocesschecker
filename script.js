const correctPassword = "beta_test_checker_624"; // Replace with your actual password

function checkPassword() {
    const enteredPassword = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (enteredPassword === correctPassword) {
        window.location.href = "main.html"; // Redirect to your main page
    } else {
        errorMessage.textContent = "Invalid password. Please try again.";
    }
}
