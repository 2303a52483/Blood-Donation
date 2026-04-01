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
// 🤖 CHATBOT FUNCTION
function chatbot() {
    let input = document.getElementById("userInput").value.toLowerCase();
    let reply = "";

    if (input.includes("donate to me")) {
        reply = "Tell me your blood group (A+, B+, O+, etc)";
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
        reply = "O- is universal donor (can donate to all)";
    }
    else if (input.includes("when donate again")) {
        reply = "You can donate blood every 3 months";
    }
    else if (input.includes("eligible")) {
        reply = "Age 18-65, weight above 50kg, healthy person can donate";
    }
    else {
        reply = "Ask about blood donation, eligibility, or compatibility 😊";
    }

    document.getElementById("response").innerText = reply;
}

/* ============================
   🚨 EMERGENCY CIRCLE FEATURE
   ============================ */

// 🔥 Get members
function getMembers() {
    return JSON.parse(localStorage.getItem("circle")) || [];
}

// 🔥 Save members
function saveMembers(data) {
    localStorage.setItem("circle", JSON.stringify(data));
}

// ✅ Add Member
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

    // Clear inputs
    document.getElementById("name").value = "";
    document.getElementById("blood").value = "";
}

// 🚨 Send Alert
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
