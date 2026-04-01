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

    let inputBox = document.getElementById("userInput");
    let outputBox = document.getElementById("response");

    // 🔥 Safety check
    if (!inputBox || !outputBox) {
        alert("❌ Chatbot not connected properly");
        return;
    }

    let input = inputBox.value.toLowerCase().trim();
    let reply = "";

    if (input === "") {
        reply = "⚠ Please type something";
    }
    else if (input.includes("donate")) {
        reply = "You can donate blood every 3 months";
    }
    else if (input.includes("o+")) {
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
    else if (input.includes("o-")) {
        reply = "O- is universal donor";
    }
    else if (input.includes("eligible")) {
        reply = "Age 18-65, weight above 50kg, healthy person can donate";
    }
    else {
        reply = "Try typing blood group (O+, A+, etc) or 'eligible'";
    }

    outputBox.innerText = reply;

    // 🔥 clear input after send
    inputBox.value = "";
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
