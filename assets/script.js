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
var timer;
var timerCount;
var quizAnswer;

// Arrays
var questionAnswer = [{
    question: "What sybols are used to create an array?",
    choice1: "Parentheses",
    choice2: "Quotes",
    choice3: "Square Brackets",
    choice4: "Curly Braces",
    rightAnswer: "Square Brackets"
    },
    {
    question: "What sybols are used to create an array?",
    choice1: "Parentheses",
    choice2: "Quotes",
    choice3: "Square Brackets",
    choice4: "Curly Braces",
    rightAnswer: "Square Brackets"
    },
    {
    question: "What sybols are used to create an array?",
    choice1: "Parentheses",
    choice2: "Quotes",
    choice3: "Square Brackets",
    choice4: "Curly Braces",
    rightAnswer: "Square Brackets"
    },
    {
    question: "What sybols are used to create an array?",
    choice1: "Parentheses",
    choice2: "Quotes",
    choice3: "Square Brackets",
    choice4: "Curly Braces",
    rightAnswer: "Square Brackets"    
    }]
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
    // hideHs.setAttribute("style", "display: contents")
}


// Event Listeners
startButton.addEventListener("click", startQuiz)
highScoreButton.addEventListener("click", highScoreDisp)
