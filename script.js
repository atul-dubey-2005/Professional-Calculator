/* ================================
   User Authentication & LocalStorage 
   ================================ */
const authBox = document.getElementById("auth-box");
const calcBox = document.getElementById("calc-box");
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");
const userDisplay = document.getElementById("user-display");

// Fetch database of users from LocalStorage
function getUsersDB() {
    return JSON.parse(localStorage.getItem("calc_users_db")) || {};
}

function saveUsersDB(db) {
    localStorage.setItem("calc_users_db", JSON.stringify(db));
}

// Check logged in state on load
let currentUser = sessionStorage.getItem("calc_active_user");
if (currentUser) {
    initApp();
}

function toggleAuth() {
    loginForm.style.display = loginForm.style.display === "none" ? "block" : "none";
    signupForm.style.display = signupForm.style.display === "none" ? "block" : "none";
}

function signup() {
    const user = document.getElementById("signup-username").value.trim();
    const email = document.getElementById("signup-email").value.trim().toLowerCase();
    const pass = document.getElementById("signup-password").value.trim();
    const errorMsg = document.getElementById("signup-error");

    if (!user || !email || !pass) {
        errorMsg.innerText = "All fields are required!";
        return;
    }

    const db = getUsersDB();

    // Check existing username or email
    if (db[user]) {
        errorMsg.innerText = "Username already taken!";
        return;
    }
    const emailExists = Object.values(db).some(account => account.email === email);
    if (emailExists) {
        errorMsg.innerText = "Email already registered!";
        return;
    }

    // Save User
    db[user] = { email: email, password: pass, history: [], memory: 0 };
    saveUsersDB(db);

    errorMsg.style.color = "#4CAF50";
    errorMsg.innerText = "Success! Switching to login...";
    setTimeout(() => {
        errorMsg.style.color = "#ff5252";
        errorMsg.innerText = "";
        toggleAuth();
    }, 1200);
}

function login() {
    const identifier = document.getElementById("login-identifier").value.trim().toLowerCase();
    const pass = document.getElementById("login-password").value.trim();
    const errorMsg = document.getElementById("login-error");

    const db = getUsersDB();
    let foundUser = null;

    // Match Username or Email
    for (const [username, acc] of Object.entries(db)) {
        if ((username.toLowerCase() === identifier || acc.email === identifier) && acc.password === pass) {
            foundUser = username;
            break;
        }
    }

    if (foundUser) {
        sessionStorage.setItem("calc_active_user", foundUser);
        currentUser = foundUser;
        initApp();
    } else {
        errorMsg.innerText = "Invalid credentials!";
    }
}

function logout() {
    sessionStorage.removeItem("calc_active_user");
    currentUser = null;
    calcBox.style.display = "none";
    document.getElementById("history-panel").style.display = "none";
    authBox.style.display = "block";
    clearDisplay();
}

function initApp() {
    authBox.style.display = "none";
    calcBox.style.display = "flex";
    userDisplay.innerText = currentUser;
    loadHistoryUI();
    checkMemoryBadge();
}


/* ================================
   Scientific Engine & Math Logic 
   ================================ */
const display = document.getElementById("display");
const subDisplay = document.getElementById("sub-display");

let isRad = false;
let isShift = false;

// Angle Mode Toggle (DEG / RAD)
function toggleAngleMode() {
    isRad = !isRad;
    document.getElementById("angle-mode-btn").innerText = isRad ? "RAD" : "DEG";
}

// 2nd Shift Function Toggle
function toggleShift() {
    isShift = !isShift;
    const shiftBtn = document.getElementById("shift-btn");
    const normalBtns = document.querySelectorAll(".func-normal");
    const shiftBtns = document.querySelectorAll(".func-shift");

    if (isShift) {
        shiftBtn.classList.add("active-shift");
        normalBtns.forEach(b => b.style.display = "none");
        shiftBtns.forEach(b => b.style.display = "inline-block");
    } else {
        shiftBtn.classList.remove("active-shift");
        normalBtns.forEach(b => b.style.display = "inline-block");
        shiftBtns.forEach(b => b.style.display = "none");
    }
}

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
    subDisplay.innerText = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function toggleNegate() {
    if (display.value.startsWith("-")) {
        display.value = display.value.slice(1);
    } else {
        display.value = "-" + display.value;
    }
}

// Custom Trigonometric Evaluators (Respecting DEG / RAD)
function dSin(x) { return isRad ? Math.sin(x) : Math.sin(x * Math.PI / 180); }
function dCos(x) { return isRad ? Math.cos(x) : Math.cos(x * Math.PI / 180); }
function dTan(x) { return isRad ? Math.tan(x) : Math.tan(x * Math.PI / 180); }
function dAsin(x) { return isRad ? Math.asin(x) : Math.asin(x) * 180 / Math.PI; }
function dAcos(x) { return isRad ? Math.acos(x) : Math.acos(x) * 180 / Math.PI; }
function dAtan(x) { return isRad ? Math.atan(x) : Math.atan(x) * 180 / Math.PI; }

function fact(n) {
    if (n < 0) return NaN;
    if (n === 0 || n === 1) return 1;
    let res = 1;
    for (let i = 2; i <= n; i++) res *= i;
    return res;
}

function calculate() {
    if (!display.value) return;

    let rawExpression = display.value;
    subDisplay.innerText = rawExpression + " =";

    try {
        let parsed = rawExpression
            .replace(/÷/g, "/")
            .replace(/×/g, "*")
            .replace(/π/g, "Math.PI")
            .replace(/e/g, "Math.E")
            .replace(/mod/g, "%")
            .replace(/\^/g, "**")
            .replace(/sin\(/g, "dSin(")
            .replace(/cos\(/g, "dCos(")
            .replace(/tan\(/g, "dTan(")
            .replace(/asin\(/g, "dAsin(")
            .replace(/acos\(/g, "dAcos(")
            .replace(/atan\(/g, "dAtan(")
            .replace(/sinh\(/g, "Math.sinh(")
            .replace(/cosh\(/g, "Math.cosh(")
            .replace(/tanh\(/g, "Math.tanh(")
            .replace(/asinh\(/g, "Math.asinh(")
            .replace(/acosh\(/g, "Math.acosh(")
            .replace(/atanh\(/g, "Math.atanh(")
            .replace(/log\(/g, "Math.log10(")
            .replace(/ln\(/g, "Math.log(")
            .replace(/√\(/g, "Math.sqrt(")
            .replace(/∛\(/g, "Math.cbrt(")
            .replace(/abs\(/g, "Math.abs(");

        // Factorials (e.g. 5!)
        parsed = parsed.replace(/(\d+)!/g, (match, num) => fact(parseInt(num)));

        // Percentages (e.g. 50%)
        parsed = parsed.replace(/(\d+(\.\d+)?)%/g, "( $1 / 100 )");

        let result = eval(parsed);

        if (!isFinite(result) || isNaN(result)) {
            display.value = "Math Error";
            return;
        }

        if (result % 1 !== 0) {
            result = parseFloat(result.toFixed(10)); // Precision clean-up
        }

        display.value = result;

        // Save entry to History
        saveHistoryEntry(rawExpression, result);

    } catch (e) {
        display.value = "Syntax Error";
    }
}


/* ================================
   Memory Functions (MC, MR, M+, M-, MS)
   ================================ */
function handleMemory(action) {
    const db = getUsersDB();
    let currentMem = db[currentUser].memory || 0;
    let val = parseFloat(display.value) || 0;

    switch (action) {
        case 'MC':
            db[currentUser].memory = 0;
            break;
        case 'MR':
            display.value = currentMem;
            break;
        case 'M+':
            db[currentUser].memory = currentMem + val;
            break;
        case 'M-':
            db[currentUser].memory = currentMem - val;
            break;
        case 'MS':
            db[currentUser].memory = val;
            break;
    }

    saveUsersDB(db);
    checkMemoryBadge();
}

function checkMemoryBadge() {
    const db = getUsersDB();
    const mem = db[currentUser]?.memory || 0;
    document.getElementById("memory-badge").style.display = mem !== 0 ? "inline-block" : "none";
}


/* ================================
   History Drawer System
   ================================ */
function toggleHistory() {
    const panel = document.getElementById("history-panel");
    panel.style.display = panel.style.display === "flex" ? "none" : "flex";
}

function saveHistoryEntry(expr, res) {
    const db = getUsersDB();
    if (!db[currentUser].history) db[currentUser].history = [];

    db[currentUser].history.unshift({ expr: expr, res: res });
    saveUsersDB(db);
    loadHistoryUI();
}

function loadHistoryUI() {
    const db = getUsersDB();
    const historyList = document.getElementById("history-list");
    const userHistory = db[currentUser]?.history || [];

    if (userHistory.length === 0) {
        historyList.innerHTML = `<p class="empty-msg">No history yet.</p>`;
        return;
    }

    historyList.innerHTML = "";
    userHistory.forEach((item) => {
        const div = document.createElement("div");
        div.className = "history-item";
        div.innerHTML = `
            <div class="history-expr">${item.expr} =</div>
            <div class="history-res">${item.res}</div>
        `;
        div.onclick = () => {
            display.value = item.res;
            subDisplay.innerText = item.expr + " =";
        };
        historyList.appendChild(div);
    });
}

function clearHistory() {
    const db = getUsersDB();
    db[currentUser].history = [];
    saveUsersDB(db);
    loadHistoryUI();
}


/* ================================
   Keyboard Listener 
   ================================ */
document.addEventListener("keydown", function (e) {
    if (calcBox.style.display === "none") return;

    if (!isNaN(e.key)) appendValue(e.key);
    else if (["+", "-", "*", "/", ".", "(", ")", "^", "!"].includes(e.key)) appendValue(e.key);
    else if (e.key === "Enter") { e.preventDefault(); calculate(); }
    else if (e.key === "Backspace") deleteLast();
    else if (e.key === "Escape") clearDisplay();
});
