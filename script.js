/* ================================
   Authentication Logic 
   ================================ */
const authBox = document.getElementById("auth-box");
const calcBox = document.getElementById("calc-box");
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");

// Check if user is already logged in (Session persistence)
if (sessionStorage.getItem("loggedInUser")) {
    authBox.style.display = "none";
    calcBox.style.display = "flex";
}

function toggleAuth() {
    loginForm.style.display = loginForm.style.display === "none" ? "block" : "none";
    signupForm.style.display = signupForm.style.display === "none" ? "block" : "none";
}

function signup() {
    const user = document.getElementById("signup-username").value.trim();
    const pass = document.getElementById("signup-password").value.trim();
    const errorMsg = document.getElementById("signup-error");

    if (user === "" || pass === "") {
        errorMsg.innerText = "Fields cannot be empty!";
        return;
    }

    if (localStorage.getItem(user)) {
        errorMsg.innerText = "Username already exists!";
    } else {
        localStorage.setItem(user, pass);
        errorMsg.style.color = "#4CAF50";
        errorMsg.innerText = "Signup successful! Please login.";
        setTimeout(toggleAuth, 1500);
    }
}

function login() {
    const user = document.getElementById("login-username").value.trim();
    const pass = document.getElementById("login-password").value.trim();
    const errorMsg = document.getElementById("login-error");

    if (localStorage.getItem(user) === pass && user !== "") {
        sessionStorage.setItem("loggedInUser", user);
        authBox.style.display = "none";
        calcBox.style.display = "flex";
    } else {
        errorMsg.innerText = "Invalid username or password!";
    }
}

function logout() {
    sessionStorage.removeItem("loggedInUser");
    calcBox.style.display = "none";
    authBox.style.display = "block";
    
    // Clear inputs
    document.getElementById("login-username").value = "";
    document.getElementById("login-password").value = "";
    document.getElementById("login-error").innerText = "";
    clearDisplay();
}


/* ================================
   Scientific Calculator Logic 
   ================================ */
const display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Math Factorial Function
function factorial(n) {
    if (n < 0) return "Error";
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) result *= i;
    return result;
}

function calculate() {
    try {
        let expression = display.value;

        // Replace UI symbols with JavaScript Math syntax
        expression = expression.replace(/÷/g, "/")
                               .replace(/×/g, "*")
                               .replace(/π/g, "Math.PI")
                               .replace(/e/g, "Math.E")
                               .replace(/\^/g, "**")
                               .replace(/sin\(/g, "Math.sin(")
                               .replace(/cos\(/g, "Math.cos(")
                               .replace(/tan\(/g, "Math.tan(")
                               .replace(/log\(/g, "Math.log10(")
                               .replace(/ln\(/g, "Math.log(")
                               .replace(/√\(/g, "Math.sqrt(");
        
        // Handle factorial logic via Regex (finds numbers followed by !)
        expression = expression.replace(/(\d+)!/g, (match, num) => factorial(parseInt(num)));

        // Evaluate the sanitized expression safely
        let result = eval(expression);

        // Handle infinite / undefined edge cases safely
        if (result === Infinity || result === -Infinity) {
            display.value = "Limit Exceeded / Div by 0";
            return;
        }

        // Format long decimals to fit the screen gracefully
        if (result % 1 !== 0) {
            result = parseFloat(result.toFixed(8));
        }

        display.value = result;
    } catch {
        display.value = "Syntax Error";
        setTimeout(clearDisplay, 1500); // Auto-clear error after 1.5s
    }
}

/* ================================
   Keyboard Support 
   ================================ */
document.addEventListener("keydown", function (event) {
    // Only accept keyboard inputs if the calculator is currently visible
    if (calcBox.style.display === "none") return;

    const key = event.key;

    if (!isNaN(key)) {
        appendValue(key);
    } else if (["+", "-", "*", "/", ".", "(", ")", "^", "!"].includes(key)) {
        appendValue(key);
    } else if (key === "Enter") {
        event.preventDefault();
        calculate();
    } else if (key === "Backspace") {
        deleteLast();
    } else if (key === "Escape") {
        clearDisplay();
    }
});
