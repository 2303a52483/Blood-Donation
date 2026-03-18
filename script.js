
// Wait for page to load
document.addEventListener("DOMContentLoaded", function () {

    // Donate Form
    const donateForm = document.getElementById("donateForm");
    if (donateForm) {
        donateForm.addEventListener("submit", function (e) {
            e.preventDefault();
            window.location.href = "success.html?type=donate";
        });
    }

    // Request Blood Form
    const requestForm = document.getElementById("requestForm");
    if (requestForm) {
        requestForm.addEventListener("submit", function (e) {
            e.preventDefault();
            window.location.href = "success.html?type=request";
        });
    }

    // Login Form
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            window.location.href = "success.html?type=login";
        });
    }

    // Signup Form
    const signupForm = document.getElementById("signupForm");
    if (signupForm) {
        signupForm.addEventListener("submit", function (e) {
            e.preventDefault();
            window.location.href = "success.html?type=signup";
        });
    }

});
