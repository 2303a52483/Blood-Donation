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
// ============================
// 🤖 CHATBOT FUNCTIONS (Dynamic Blood Groups)
// ============================

// ============================
// 🤖 CHATBOT FUNCTIONS (Typed Blood Group)
// ============================

// ============================
// 🤖 CHATBOT FUNCTIONS
// ============================
function reply(type) {
    const inputField = document.getElementById("bloodInput");
    const bloodGroup = inputField.value.trim().toUpperCase(); // convert input to uppercase
    const responseBox = document.getElementById("responseBox");

    // 1️⃣ Validate input
    const validGroups = ["O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+"];
    if (!bloodGroup) {
        responseBox.innerText = "⚠ Please enter your blood group!";
        return;
    }
    if (!validGroups.includes(bloodGroup)) {
        responseBox.innerText = "⚠ Invalid blood group! Use O-, O+, A-, A+, B-, B+, AB-, AB+.";
        return;
    }

    // 2️⃣ Blood group compatibility
    const canDonate = {
        "O-": ["O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+"],
        "O+": ["O+", "A+", "B+", "AB+"],
        "A-": ["A-", "A+", "AB-", "AB+"],
        "A+": ["A+", "AB+"],
        "B-": ["B-", "B+", "AB-", "AB+"],
        "B+": ["B+", "AB+"],
        "AB-": ["AB-", "AB+"],
        "AB+": ["AB+"]
    };

    const canReceive = {
        "O-": ["O-"],
        "O+": ["O+", "O-"],
        "A-": ["A-", "O-"],
        "A+": ["A+", "A-", "O+", "O-"],
        "B-": ["B-", "O-"],
        "B+": ["B+", "B-", "O+", "O-"],
        "AB-": ["AB-", "A-", "B-", "O-"],
        "AB+": ["AB+", "AB-", "A+", "A-", "B+", "B-", "O+", "O-"]
    };

    // 3️⃣ Generate response
    let response = "";
    if (type === "donate") {
        response = `✅ You can donate to: ${canDonate[bloodGroup].join(", ")}`;
    } else if (type === "receive") {
        response = `✅ You can receive from: ${canReceive[bloodGroup].join(", ")}`;
    } else if (type === "time") {
        response = "⏰ You can donate blood every 3 months.";
    }

    // 4️⃣ Display response
    responseBox.innerText = response;
}
