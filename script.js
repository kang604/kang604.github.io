// Change Background Color
function changeBackgroundColor() {
    const colors = ["#3498db", "#e74c3c", "#2ecc71", "#f1c40f", "#9b59b6"];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

// Show Greeting Message Based on Time
function displayGreeting() {
    const now = new Date();
    const hours = now.getHours();
    let greetingMessage = "";

    if (hours < 12) {
        greetingMessage = "Good morning!";
    } else if (hours < 18) {
        greetingMessage = "Good afternoon!";
    } else {
        greetingMessage = "Good evening!";
    }

    document.getElementById("greeting").innerText = greetingMessage;
}

// Display User Input Dynamically (For Contact Form)
function displayFormInput() {
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;
    const displayArea = document.getElementById("formOutput");

    if (name && message) {
        displayArea.innerHTML = `<p>Thank you, <strong>${name}</strong>! You said: "<em>${message}</em>"</p>`;
    } else {
        displayArea.innerHTML = "<p>Please fill out both fields.</p>";
    }
}

// Run Greeting Function When Page Loads
window.onload = displayGreeting;
