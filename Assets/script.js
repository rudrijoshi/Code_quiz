var highScore = document.querySelector(".highscore");
var Timer = document.querySelector(".timer");
var viewTimer = document.querySelector(".view-time");
var Container = document.querySelector(".container");
var firstConatiner = document.querySelector(".first-container");
var containerQuestion = document.getElementById("#container-question");
var questionContainer = document.querySelector(".question-container");
var endContainer = document.querySelector(".end-container");
var lastContainer = document.querySelector("#last-container");
var question1 = document.querySelector(".question1");
var Initials = document.querySelector("initials");
var inputText = document.querySelector(".input-text");
var initialButton = document.querySelector(".initial-button");
var thirdContainer = document.getElementById("#third-container");
var viewHighscore = document.querySelector(".view-highscore");
var Result = document.querySelector(".result");
var goBack = document.querySelector(".go-back");
var Clear = document.querySelector(".clear");
var Hide = document.querySelector(".hide");
var Correct = document.getElementById("#correct");
var Wrong = document.getElementById("#wrong");
var score = 0;
var secondleft = 0;
var gameover;
function setTime(){
    var timeInterval = setInterval(function() {
        secondleft++;
        viewTimer.textContent = secondleft;
    })
}
var Highscore = [];
var shufflequestionarray;
var questioni = 0;

var questionlist = [
    {ques - 'Commonly used data types do NOT include:',
ans-'option1', choice-"'1-Boolean', '2-Alerts' , '3-Strings', '4-Numbers'"};

{
    ques: 'String values must be enclosed within ______ when being assigned to variables.',
    ans- option3, choice-"'1-Commas', '2-Curly Brackets', '3-Quotes', '4-Parenthesis'"
}; 
]













