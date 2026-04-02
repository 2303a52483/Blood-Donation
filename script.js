// ============================
// 🚀 WAIT FOR PAGE LOAD (Forms)
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
// 🚨 EMERGENCY CIRCLE FEATURE
// ============================
function getMembers() {
    return JSON.parse(localStorage.getItem("circle")) || [];
}

function saveMembers(data) {
    localStorage.setItem("circle", JSON.stringify(data));
}

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

// ============================
// 🤖 CHATBOT FUNCTIONS
// ============================

// Reply based on button clicked
function reply(type) {
    const responseBox = document.getElementById("responseBox");
    if (!responseBox) return;

    let response = "";

    if(type === "donate") {
        response = "O- can donate to all blood groups.";
    }
    else if(type === "receive") {
        response = "O+ can receive from O+ and O-.";
    }
    else if(type === "time") {
        response = "You can donate blood every 3 months.";
    }

    responseBox.innerText = response;
}

// Optional free text input for user questions
function chatbot() {
    const userInput = document.getElementById("userInput");
    const responseBox = document.getElementById("responseBox");
    if (!userInput || !responseBox) return;

    const text = userInput.value.toLowerCase();

    if(text.includes("donate")) {
        responseBox.innerText = "Anyone healthy can donate blood every 3 months.";
    } else if(text.includes("o+")) {
        responseBox.innerText = "O+ can donate to A+, B+, AB+, O+.";
    } else if(text.includes("a+")) {
        responseBox.innerText = "A+ can donate to A+ and AB+.";
    } else {
        responseBox.innerText = "Sorry, I can only answer simple blood donation questions.";
    }

    userInput.value = "";
}
