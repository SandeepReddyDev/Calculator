let isDarkMode = true;

function appendValue(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

function toggleTheme() {
    const body = document.body;
    body.classList.toggle("light-mode");
    isDarkMode = !isDarkMode;

    document.querySelector(".theme-toggle").textContent = isDarkMode ? "🌙" : "☀️";
}
function createFallingNumber() {
    const container = document.querySelector(".falling-numbers-container");
    const num = document.createElement("div");
    num.classList.add("falling-number");
    num.textContent = Math.floor(Math.random() * 10); // Random number 0-9
    num.style.left = `${Math.random() * 100}vw`; // Random horizontal position
    num.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random fall speed

    container.appendChild(num);

    setTimeout(() => {
        num.remove();
    }, 5000); // Remove after animation
}

// Generate numbers continuously
setInterval(createFallingNumber, 200);
