// Utility Functions
function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

function redirectTo(url) {
    window.location.href = url;
}

// Authentication
function handleLogin(email, password) {
    // Mock authentication
    // In a real scenario, request to server here
    if (email === "user@example.com" && password === "password123") {
        saveToLocalStorage('user', { email: email });
        redirectTo('dashboard.html');
    } else {
        alert("Invalid login credentials");
    }
}

function handleSignup(email, password) {
    // Add logic for signup
    // Redirect or inform the user upon successful signup
}

function checkUserLoggedIn() {
    const user = getFromLocalStorage('user');
    if (!user) {
        redirectTo('login.html');
    }
}

// Dashboard Functions
function loadDashboardData() {
    // Load user data and mock dashboard data
    // Update the DOM accordingly
}

function updateScheduledPickups() {
    // Mock function to simulate updating scheduled pickups
    // Update the DOM with new data
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Add event listeners for login, signup, etc.
    // Example:
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            handleLogin(email, password);
        });
    }

    // Check if user is logged in on pages that require authentication
    if (document.getElementById('dashboard')) {
        checkUserLoggedIn();
        loadDashboardData();
    }
    

});

// WebSocket Simulation (if needed)
// function simulateWebSocket() {
//     setInterval(() => {
//         // Update the dashboard with new mock data
//     }, 5000); // Every 5 seconds
// }
