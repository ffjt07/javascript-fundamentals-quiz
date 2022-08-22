// Query Selectors of the sections in HTML
var showQuiz = document.querySelector("#quiz")
var timeLeft = document.querySelector("#time-left")
var questionDisp = document.querySelector("#question")
var answerList = document.querySelector("#answer-list")
var hideBegin = document.querySelector(".begin")
var highScoreButton = document.querySelector(".score")
var hideHs = document.querySelector("#high-score-display")
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

function highScoreDisp() {
    hideBegin.setAttribute("style", "display: none")
    showQuiz.setAttribute("style", "display: none")
    hideHs.setAttribute("style", "display: contents")
}

startButton.addEventListener("click", startQuiz)
highScoreButton.addEventListener("click", highScoreDisp)
