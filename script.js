// ============================
// 🚀 WAIT FOR PAGE LOAD
// ============================
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


// ============================
// 🤖 CHATBOT FUNCTION (FIXED)
// ============================
function chatbot() {

    let input = document.getElementById("userInput").value.toLowerCase();
    let output = document.getElementById("response");

    if (input === "") {
        output.innerText = "⚠ Please type something";
        return;
    }

    let reply = "";

    if (input.includes("o+")) {
        reply = "O+ can receive from O+ and O-";
    } 
    else if (input.includes("a+")) {
        reply = "A+ can receive from A+, A-, O+, O-";
    } 
    else if (input.includes("b+")) {
        reply = "B+ can receive from B+, B-, O+, O-";
    } 
    else if (input.includes("ab+")) {
        reply = "AB+ can receive from all blood groups";
    } 
    else if (input.includes("eligible")) {
        reply = "Age 18-65, weight above 50kg";
    } 
    else if (input.includes("hello") || input.includes("hi")) {
        reply = "Hello broh 😊 Ask me about blood donation!";
    } 
    else {
        reply = "❓ Try: O+, A+, eligible";
    }

    output.innerText = reply;
}


// ============================
// 🚨 EMERGENCY CIRCLE FEATURE
// ============================

// Get members
function getMembers() {
    return JSON.parse(localStorage.getItem("circle")) || [];
}

// Save members
function saveMembers(data) {
    localStorage.setItem("circle", JSON.stringify(data));
}

// Add Member
function addMember() {
    let name = document.getElementById("name").value;
    let blood = document.getElementById("blood").value;

    if (name === "" || blood === "") {
        alert("⚠ Please fill all fields");
        return;
    }

    let members = getMembers();
    members.push({ name, blood });

    saveMembers(members);

    alert("✅ Member added to circle");

    document.getElementById("name").value = "";
    document.getElementById("blood").value = "";
}

// Send Alert
function sendAlert() {
    let needBlood = document.getElementById("needBlood").value;

    if (needBlood === "") {
        alert("⚠ Enter required blood group");
        return;
    }

    let members = getMembers();

    let matched = members.filter(m =>
        m.blood === needBlood || m.blood === "O-"
    );

    let list = document.getElementById("result");

    if (!list) return;

    list.innerHTML = "";

    if (matched.length === 0) {
        list.innerHTML = "<li>❌ No members found</li>";
    } else {
        matched.forEach(m => {
            let li = document.createElement("li");
            li.textContent = "🚨 " + m.name + " (" + m.blood + ")";
            list.appendChild(li);
        });
    }
}
