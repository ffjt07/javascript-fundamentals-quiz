// Query Selectors of the sections in HTML
var startButton = document.querySelector("#start")
var backButton = document.querySelector("#back")
var showQuiz = document.querySelector("#quiz")
var questionDisp = document.querySelector("#question")
var answerList = document.querySelector("#answer-list")
var choice1 = document.querySelector("#1")
var choice2 = document.querySelector("#2")
var choice3 = document.querySelector("#3")
var choice4 = document.querySelector("#4")
var timeLeft = document.querySelector("#time-left")
var hideBegin = document.querySelector(".begin")
var highScoreButton = document.querySelector(".score")
var hideHs = document.querySelector("#high-score-display")

// Global Variables
var timer;
var timerCount;
var quizAnswer;

// Arrays
var questionAnswer = [{
    question: "What symbols are used to create an array?",
    choice1: "Parentheses",
    choice2: "Quotes",
    choice3: "Square Brackets",
    choice4: "Curly Braces",
    rightAnswer: "3"
    },
    {
    question: "What symbols are used to create a string?",
    choice1: "Parentheses",
    choice2: "Square Brackets",
    choice3: "Curly Braces",
    choice4: "Quotes",
    rightAnswer: "4"
    },
    {
    question: "The condition in an if/else statement is enclosed by __",
    choice1: "Parentheses",
    choice2: "Quotes",
    choice3: "Curly Braces",
    choice4: "Square Brackets",
    rightAnswer: "1"
    },
    {
    question: "The symbols used that surround the function criteria are __",
    choice1: "Square Brackets",
    choice2: "Curly Braces",
    choice3: "Quotes",
    choice4: "Parentheses",
    rightAnswer: "2"    
    }
]
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

function backStart () {
    hideHs.setAttribute("style", "display: none")
    showQuiz.setAttribute("style", "display: none")
    hideBegin.setAttribute("style", "display: content")
}

// Event Listeners
startButton.addEventListener("click", startQuiz)
highScoreButton.addEventListener("click", highScoreDisp)
backButton.addEventListener("click", backStart)
