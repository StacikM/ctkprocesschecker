const correctPassword = "beta_test_check_214"; // Replace with your actual password

function checkPassword() {
    const enteredPassword = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (enteredPassword === correctPassword) {
        window.location.href = "main.html"; // Redirect to your main page
    } else {
        errorMessage.textContent = "Invalid password. Please try again.";
    }
}

function logout() {
    // You can add logic for logging out here
    window.location.href = "index.html"; // Redirect to the login page
}

function downloadFile() {
    // For demonstration purposes, create a simple text file and initiate download
    const content = "This is the content of the file.";

    const blob = new Blob([content], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = window.URL.createObjectURL(blob);
    a.download = 'example.txt'; // Change the filename if needed
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
