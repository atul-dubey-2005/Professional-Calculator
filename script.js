const display = document.getElementById("display");

// Add value to display
function appendValue(value) {
    display.value += value;
}

// Clear display
function clearDisplay() {
    display.value = "";
}

// Delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate result
function calculate() {
    try {
        let expression = display.value.replace(/÷/g, "/").replace(/×/g, "*");
        let result = eval(expression);

        if (result === Infinity || result === -Infinity) {
            display.value = "Cannot divide by 0";
            return;
        }

        display.value = result;
    } catch {
        display.value = "Invalid Expression";
    }
}

// Keyboard Support
document.addEventListener("keydown", function (event) {

    const key = event.key;

    // Numbers
    if (!isNaN(key)) {
        appendValue(key);
    }

    // Operators
    else if (["+", "-", "*", "/", "%", "."].includes(key)) {
        appendValue(key);
    }

    // Enter = Calculate
    else if (key === "Enter") {
        event.preventDefault();
        calculate();
    }

    // Backspace
    else if (key === "Backspace") {
        deleteLast();
    }

    // Escape = Clear
    else if (key === "Escape") {
        clearDisplay();
    }
});