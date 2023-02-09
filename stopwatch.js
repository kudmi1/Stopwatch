const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const resetBtn = document.querySelector("#resetBtn");
const pauseBtn = document.querySelector("#pauseBtn");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalID;
let hours = 0;
let minutes = 0;
let seconds = 0;

startBtn.addEventListener("click", () => {
    if (paused) {
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalID = setInterval(updateTime, 1000);
    }
});
pauseBtn.addEventListener("click", () => {
    if (!paused) {
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalID);
    }
});
resetBtn.addEventListener("click", () => {
    paused = true;
    clearInterval(intervalID);
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    hours = 0;
    minutes = 0;
    seconds = 0;
    timeDisplay.textContent = `00:00:00`;

});


function updateTime() {
    elapsedTime = Date.now() - startTime;

    seconds = Math.floor((elapsedTime / 1000) % 60);
    minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

    seconds = zeros(seconds);
    minutes = zeros(minutes);
    hours = zeros(hours);

    timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;

    function zeros(unit) {
        return (("0") + unit).length > 2 ? unit : "0" + unit;

    }
}



