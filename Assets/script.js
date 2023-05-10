var vhighScore = document.querySelector("#highscore");
var Timer = document.querySelector(".timer");
var viewTimer = document.querySelector(".view-time");
var Container = document.getElementById("#container");
var firstConatiner = document.querySelector(".first-container");
var containerQuestion = document.querySelector(".container-question");
var questionContainer = document.querySelector("#question-container");
var endContainer = document.querySelector(".end-container");
var lastContainer = document.querySelector("#last-container");
var question1 = document.querySelector(".question1");
var Initials = document.querySelector("initials");
var initialForm = document.querySelector("#initial-form");
var inputText = document.querySelector(".input-text");
var initialButton = document.querySelector(".initial-button");
var thirdContainer = document.getElementById("#third-container");
var Result = document.querySelector("#result");
var goBack = document.querySelector("#go-back");
var Clear = document.querySelector("#clear");
var Hide = document.querySelector(".hide");
var Correct = document.getElementById("#correct");
var Wrong = document.getElementById("#wrong");
var startQuizButton = document.querySelector("#start-game");
var answerBtnEl = document.getElementById("#answer-button");
var Banner = document.getElementById("#banner");
var questionEl = document.getElementById("question");
var hide = document.querySelector(".hide");
var show = document.querySelector(".show");
var score = 0;
var gameover;

var Highscore = [];
var shufflequestionarray;
var questionIndex = 0;

var questionlist = [
    {
        q: 'Commonly used data types do NOT include:',
        a: '2-Alerts', options: [{option: '1-Boolean'}, {option: '2-Alerts'}, {option: '3-Strings'}, {option: '4-Numbers'}]
    },

    {
        q: 'String values must be enclosed within ______ when being assigned to variables.',
        a: '3-Quotes', options: [{option: '1-Commas'}, {option: '2-Curly Brackets'}, {option: '3-Quotes'}, {option: '4-Parenthesis'}]
    },
    {
        q: 'The condition in an if / statement is enclosed within ________.',
        a: '3-Parenthesis', options: [{option: '1-Quotes'}, {option: '2-Curly Brackets'}, {option: '3-Parenthesis'}, {option: '4-square brackets'}]
    },
    {
     q: 'A very useful tool used during development and debugging for printing content to the debugger is________.',
     a: '4-console.log', options: [{option: '1-Javascript'}, {option: '2-Terminal/Bash'}, {option: '3-For loops'}, {option: '4-console.log'}]   
    },
    {
    q: 'Arrays in Javascript can be used to store _________.',
    a: '4-all of the above', options: [{option: '1-Numbers and strings'}, {option: '2-other arrays'}, {option: '3-booleans'}, {option: '4-all of the above'}]
    },
];

    var renderStartPage = function() {
    thirdContainer.classList.add("hide")
    thirdContainer.classList.remove("show")
    Container.classList.remove("hide")
    Container.classList.add("show")
    Banner.removeChild(Banner.lastChild)
    questionIndex = 0
    gameover =""
    viewTimer.textContent = 0
    score = 0

    if (Correct.className = "show"){
        Correct.classList.remove("show");
        Correct.classList.add("hide");
    }
    if (Wrong.className = "show"){
        Wrong.classList.remove("show");
        Wrong.classList.add("hide");
    }
    }


    var setTime= function () {
        var secondleft = 100;
        var timeInterval = setInterval(function () {
            viewTimer.innerText = secondleft;
            secondleft--
        if (gameover){
            clearInterval(timeInterval)
        }
        if (secondleft < 0){
            showScore()
            viewTimer.innerText = 0
            clearInterval(timeInterval)
        }
        },1000)
    }
    


    var startGame = function() {
        Container.classList.add("hide")
        Container.classList.remove("show")
        questionContainer.classList.remove("hide")
        questionContainer.classList.add("show")

        shufflequestionarray = questionlist.sort(() => Math.random() - 0.5)
        setTime()
        setquestion()
    }
    var setquestion = function() {
        resetAnswers()
        displayQue(shufflequestionarray[questionIndex])
    }
    var resetAnswers = function() {
        while (answerBtnEl.firstChild) {
            answerBtnEl.removeChild(answerBtnEl.firstChild)
        };
    };

    var displayQue = function(index) {
        questionEl.innerText = index.q 
        for (var i = 0; i < index.options.length; i++) {
            var ansBtn = document.createElement('button')
            ansBtn.innerText = index.options[i].option
            ansBtn.classList.add('btn')
            ansBtn.classList.add('answerbtn')
            ansBtn.addEventListener("click",ansCheck)//
            answerBtnEl.appendChild(ansBtn)   
        }
    };

    var ansCorrect = function() {
        if (Correct.className = "hide"){
            Correct.classList.remove("hide")
            Correct.classList.add("banner")
            Wrong.classList.remove("banner")
            Wrong.classList.add("hide")
        }
    }
    var ansWrong = function() {
        if (Wrong.className = "hide"){
            Wrong.classList.remove("hide")
            Wrong.classList.add("banner")
            Correct.classList.remove("banner")
            Correct.classList.add("hide")
        }
    }

    var ansCheck = function(event){
        var selectedans = event.target
        if (shufflequestionarray[questionIndex].a === selectedans.innerText){
            ansCorrect()
            score = score + 7;
        }
        else {
            ansWrong()
            score = score - 1;
            secondleft = secondleft -3;
        }

        questionIndex++
        if  (shufflequestionarray[questionIndex].a === selectedans.innerText) {
            setquestion()
        }
        else {
            gameover = "true";
            showScore();
        }
    }

var showScore =  function() {
    questionContainer.classList.add("hide");
    lastContainer.classList.remove("hide");
    lastContainer.classList.add("show");

var scoreDisplay = document.createElement("p");
    scoreDisplay.innerText = ("Your final score is " + score + "!");
    Banner.appendChild(scoreDisplay);
}

var createHighScore = function(event){
    event.preventDefault()
    var initials = document.querySelector("#initial").value;
    if(!initials){
        alert("Enter the initials!");
        return;
    }
    initialForm.reset();

    var highScore = {
        initials: initials,
        score: score
    }
    Highscore.push(highScore);
    Highscore.sort((a, b) => {return b.score-a.score});


    while (Result.firstChild) {
        Result.removeChild(Result.firstChild)
    }

    for (var i = 0; i < Highscore.length; i++) {
        var highscEl = document.createElement("li");
        highscEl.className = "view-highscore";
        highscEl.innerHTML = Highscore[i].initials +" - " + Highscore[i].score;
        Result.appendChild(highscEl);
        }


        saveHighsc();
        DsHighSc();
    }

    var saveHighsc = function() {
        localStorage.setItem("saveHighsc", JSON.stringify(Highscore))
    }
    var loadHighsc = function() {
        var ldHighsc = localStorage.getItem("Highscore")
        if(!ldHighsc) {
            return false;
        }
        ldHighsc = JSON.parse(ldHighsc);
        ldHighsc.sort((a, b) => {return b.score-a.score})


        for (var i = 0; i < ldHighsc.length; i++){
            var highscEl = document.createElement("li");
            highscEl.ClassName = "view-highscore";
            highscEl.innerText = ldHighsc[i].initials + " - " + ldHighsc[i].score;
            Result.appendChild(highscEl);

            Highscore.push(ldHighsc[i]);
    }
}

var DsHighSc = function() {
    thirdContainer.classList.remove("hide");
    thirdContainer.classList.add("show");
    gameover = "true";
    if (lastContainer.className = "show") {
        lastContainer.classList.remove("show");
        lastContainer.classList.add("hide");
    }
    if  (Container.className = "show") {
        Container.classList.remove("show");
        Container.classList.add("hide");
    }
    if (questionContainer.className = "show") {
        questionContainer.classList.remove("show");
        questionContainer.classList.add("hide");
    }
    if (Correct.className = "show") {
        Correct.classList.remove("show");
        Correct.classList.add("hide");
    }
    if (Wrong.className = "show") {
        Wrong.classList.remove("show");
        Wrong.classList.add("hide");
    }
}
    var clrScore = function () {
        Highscore = [];

        while (Result.firstChild) {
            Result.removeChild(Result.firstChild);
        }

        localStorage.clear(Highscore);

    } 

    loadHighsc();

    startQuizButton.addEventListener("click", startGame);
    initialForm.addEventListener("submit", createHighScore);
    vhighScore.addEventListener("click", DsHighSc);
    goBack.addEventListener("click", renderStartPage);
    Clear.addEventListener("click", clrScore);









