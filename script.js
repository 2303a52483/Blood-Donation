document.getElementById("donateForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for donating blood! ❤️");
});

document.getElementById("requestForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Blood request submitted successfully!");
});

document.getElementById("loginForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Login successful (demo only)");
});

document.getElementById("signupForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Signup successful! 🎉");
});
