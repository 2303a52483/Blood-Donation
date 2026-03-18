
// Wait until page loads
document.addEventListener("DOMContentLoaded", function () {

    // Donate Form
    const donateForm = document.getElementById("donateForm");
    if (donateForm) {
        donateForm.addEventListener("submit", function (e) {
            e.preventDefault();

            document.body.innerHTML = `
                <div class="success-page">
                    <h1>❤️ Thank You for Donating Blood ❤️</h1>
                    <p>Your contribution can save lives!</p>
                    <button onclick="goHome()">Go Home</button>
                </div>
            `;
        });
    }

    // Request Form
    const requestForm = document.getElementById("requestForm");
    if (requestForm) {
        requestForm.addEventListener("submit", function (e) {
            e.preventDefault();

            document.body.innerHTML = `
                <div class="success-page">
                    <h1>🩸 Request Submitted Successfully</h1>
                    <p>We will connect you with donors soon.</p>
                    <button onclick="goHome()">Go Home</button>
                </div>
            `;
        });
    }

    // Login Form
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            document.body.innerHTML = `
                <div class="success-page">
                    <h1>✅ Login Successful</h1>
                    <p>Welcome back!</p>
                    <button onclick="goHome()">Go Home</button>
                </div>
            `;
        });
    }

    // Signup Form
    const signupForm = document.getElementById("signupForm");
    if (signupForm) {
        signupForm.addEventListener("submit", function (e) {
            e.preventDefault();

            document.body.innerHTML = `
                <div class="success-page">
                    <h1>🎉 Signup Successful</h1>
                    <p>Your account has been created.</p>
                    <button onclick="goHome()">Go Home</button>
                </div>
            `;
        });
    }

});

// Go Home button
function goHome() {
    window.location.href = "index.html";
}
