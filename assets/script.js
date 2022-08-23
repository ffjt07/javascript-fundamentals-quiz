//; Query Selectors of the sections in HTML
var startButton = document.querySelector("#start");
var backButton = document.querySelector(".back");
var saveButton = document.querySelector("#save");
var resetButton = document.querySelector(".reset")
var showQuiz = document.querySelector("#quiz");
var questionH = document.querySelector("#question");
var answerList = document.querySelector("#answer-list");
var choice1 = document.querySelector("#one");
var choice2 = document.querySelector("#two");
var choice3 = document.querySelector("#three");
var choice4 = document.querySelector("#four");
var timeLeft = document.querySelector("#time-left");
var initialsInput = document.querySelector("#initials");
var hideBegin = document.querySelector(".begin");
var highScoreButton = document.querySelector(".score");
var hideHs = document.querySelector("#high-score-display");
var hsList = document.querySelector("#hs-list");
var addHs = document.querySelector("#high-score-input");
var header = document.querySelector("header")
var rightWrong = document.querySelector("#right");

// Global Variables
var timer;
var timerCount;
var quizAnswer;

// Arrays
var questionList = [{
    question: "What symbols are used to create an array?",
    choice1: "Parentheses",
    choice2: "Quotes",
    choice3: "Square Brackets",
    choice4: "Curly Braces",
    rightAnswer: "Square Brackets"
    },
    {
    question: "What symbols are used to create a string?",
    choice1: "Parentheses",
    choice2: "Square Brackets",
    choice3: "Curly Braces",
    choice4: "Quotes",
    rightAnswer: "Quotes"
    },
    {
    question: "The condition in an if/else statement is enclosed by __",
    choice1: "Parentheses",
    choice2: "Quotes",
    choice3: "Curly Braces",
    choice4: "Square Brackets",
    rightAnswer: "Parentheses"
    },
    {
    question: "The symbols used that surround the function criteria are __",
    choice1: "Square Brackets",
    choice2: "Curly Braces",
    choice3: "Quotes",
    choice4: "Parentheses",
    rightAnswer: "Curly Braces"    
    }
]

var lastQuestion = questionList.length - 1;
var currentQuestion = 0;
// Functions
function startQuiz () {
    lastQuestion = questionList.length - 1;
    currentQuestion = 0;
    timerCount = 75;
    timeLeft.textContent = timerCount
    hideBegin.setAttribute("style", "display: none");
    startTimer();
    questionDisplay();
}

function questionDisplay () {
    showQuiz.setAttribute("style", "display: block")
    var questions = questionList[currentQuestion];
    questionH.textContent = questions.question;
    choice1.textContent = questions.choice1;
    choice2.textContent = questions.choice2;
    choice3.textContent = questions.choice3;
    choice4.textContent = questions.choice4;
}

function checkAnswer (event) {
    if (event.target.matches("button"))

        if (event.target.textContent == questionList[currentQuestion].rightAnswer) {
            rightWrong.setAttribute("style", "color: green")
            rightWrong.textContent = "Right!"
            nextQuestion ();
        }
        else {
            timerCount = timerCount - 15;
            rightWrong.setAttribute("style", "color: red")
            rightWrong.textContent = "Wrong!"
            nextQuestion ();
        }
}

function nextQuestion () {
    if (currentQuestion < lastQuestion && timerCount > 0) {
        currentQuestion++;
        questionDisplay();
    }else{
        endGame();
    }
}

function startTimer () {
    timer = setInterval(function () {
        timerCount--;
        timeLeft.textContent = timerCount;
        if (timerCount <= 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000)
}

function endGame () {
    clearInterval(timer);
    timeLeft.textContent = timerCount
    rightWrong.textContent = ""
    hideBegin.setAttribute("style", "display: none");
    showQuiz.setAttribute("style", "display: none");
    hideHs.setAttribute("style", "display: none");
    addHs.setAttribute("style", "display: contents");
}

function highScoreDisp() {
    clearInterval(timer);
    timeLeft.textContent = 0;
    hideBegin.setAttribute("style", "display: none");
    showQuiz.setAttribute("style", "display: none");
    hideHs.setAttribute("style", "display: contents");
    addHs.setAttribute("style", "display: none");
}

function scoreList() {
    var initials = JSON.parse(localStorage.getItem("initials"));
    var score = JSON.parse(localStorage.getItem("timeScore"));
    var ul = hsList
    var li = document.createElement("li")
    li.setAttribute("class", "highscore")
    if (initials !== null && score !== null) {
        li.textContent = initials + " " + score;
        ul.appendChild(li);
    } else {
        return;
    }
}

function backStart () {
    hideHs.setAttribute("style", "display: none");
    showQuiz.setAttribute("style", "display: none");
    hideBegin.setAttribute("style", "display: flex");
}

function resetHs () {
    hsList.innerHTML = ""
    localStorage.clear();
}

// Event Listeners
startButton.addEventListener("click", startQuiz);
highScoreButton.addEventListener("click", highScoreDisp);
backButton.addEventListener("click", backStart);
answerList.addEventListener("click", checkAnswer);
resetButton.addEventListener("click", resetHs);
saveButton.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation()

    var initials = initialsInput.value;
    if (initials === "") {
        alert("Please add initials.")
    } else {
        
        localStorage.setItem("initials", JSON.stringify(initials));
        localStorage.setItem("timeScore", JSON.stringify(timerCount));
        highScoreDisp();
        scoreList();
    }
});
