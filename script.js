// Donate Form - Full Page Success
document.getElementById("donateForm")?.addEventListener("submit", function(e) {
    e.preventDefault();

    document.body.innerHTML = `
        <div class="success-page">
            <h1>❤️ Thank You for Donating Blood ❤️</h1>
            <p>Your contribution can save lives!</p>
            <button onclick="goHome()">Go Home</button>
        </div>
    `;
});

// Request Blood Form
document.getElementById("requestForm")?.addEventListener("submit", function(e) {
    e.preventDefault();

    document.body.innerHTML = `
        <div class="success-page">
            <h1>🩸 Request Submitted Successfully</h1>
            <p>We will connect you with donors soon.</p>
            <button onclick="goHome()">Go Home</button>
        </div>
    `;
});

// Login Form
document.getElementById("loginForm")?.addEventListener("submit", function(e) {
    e.preventDefault();

    document.body.innerHTML = `
        <div class="success-page">
            <h1>✅ Login Successful</h1>
            <p>Welcome back!</p>
            <button onclick="goHome()">Go Home</button>
        </div>
    `;
});

// Signup Form
document.getElementById("signupForm")?.addEventListener("submit", function(e) {
    e.preventDefault();

    document.body.innerHTML = `
        <div class="success-page">
            <h1>🎉 Signup Successful</h1>
            <p>Your account has been created.</p>
            <button onclick="goHome()">Go Home</button>
        </div>
    `;
});

// Go Home Function
function goHome() {
    window.location.href = "index.html";
}
