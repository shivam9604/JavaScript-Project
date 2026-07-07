const display = document.getElementById("display");

let startTime;
let elapsedTime = 0;
let timer = null;
let isRunning = false;

// Start
function startStopwatch() {
    if (isRunning) return;

    elapsedTime = 0;
    startTime = Date.now();

    timer = setInterval(updateDisplay, 10);

    isRunning = true;
}

// Stop
function stopStopwatch() {
    if (!isRunning) return;

    clearInterval(timer);
    isRunning = false;
}

// Resume
function resumeStopwatch() {
    if (isRunning) return;

    startTime = Date.now() - elapsedTime;

    timer = setInterval(updateDisplay, 10);

    isRunning = true;
}

// Reset
function resetStopwatch() {
    clearInterval(timer);

    startTime = 0;
    elapsedTime = 0;
    isRunning = false;

    display.textContent = "00:00:00";
}

// Update Display
function updateDisplay() {
    elapsedTime = Date.now() - startTime;

    let minutes = Math.floor(elapsedTime / 60000);
    let seconds = Math.floor((elapsedTime % 60000) / 1000);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    display.textContent =
        `${String(minutes).padStart(2, "0")}:` +
        `${String(seconds).padStart(2, "0")}:` +
        `${String(milliseconds).padStart(2, "0")}`;
}