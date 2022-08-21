// Query Selectors of the sections in HTML
var showQuiz = document.querySelector("#quiz")
var timeLeft = document.querySelector("#time-left")
var questionDisp = document.querySelector("#question")
var answerList = document.querySelector("#answer-list")
var hideBegin = document.querySelector(".begin")
var startButton = document.querySelector("#start")

// Global Variables
var question = ""
var timer;
var timerCount;

// Functions
function startQuiz () {
    timerCount = 75;
    timeLeft.textContent = timerCount
    hideBegin.setAttribute("style", "display: none");
    startTimer();
}

function startTimer () {
    timer = setInterval(function () {
        timerCount--;
        timeLeft.textContent = timerCount;
        if (timerCount === 0) {
            clearInterval(timer);
        }
    }, 1000)
}

startButton.addEventListener("click", startQuiz)