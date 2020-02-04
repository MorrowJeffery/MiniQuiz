var start = document.getElementById("startButton").addEventListener("click", function() {
    event.preventDefault();
    startQuiz();
    timerCTR = setInterval(function() {
        timer--;
        timerh1.innerHTML = timer;
        if (timer == '0') {clearInterval(timerCTR);}
        if (quizCompleted == true) {
            timerh1.innerHTML = totalScore;
            clearInterval(timerCTR);}
    }, 1000);
})
//this is the default click listener that listens to any click besides start
    document.addEventListener("click", function(event) 
    {
    
        event.preventDefault();
        var element = event.target;
        if (element.classList.contains("goBack")) {window.location.reload(true);}
        if (element.classList.contains("continueButton"))
        {
            if (quizCompleted == true) {
                window.localStorage.setItem(initialsTB.value, totalScore);
                window.location.reload(true);
            }
        
            if (selectedAnswer == "1" || selectedAnswer == "2" || selectedAnswer == "3" || selectedAnswer == "4") 
            {
                if (selectedAnswer == questionsArray[questionCounter].answer)
                {
                    answerStatus.innerHTML = "Correct!";
                }
                else if (selectedAnswer != questionsArray[questionCounter].answer) 
                {
                    answerStatus.innerHTML = "Incorrect!";
                    timer = timer - 5;
                    return;
                }
                setTimeout(function() {
                    questionCounter++;
                    if (questionCounter > 4) {
                        totalScore = timer;
                        jh1.innerHTML = "Score:"
                        jp1.innerHTML = "";
                        quizCompleted = true;
                        q1.remove();
                        q2.remove();
                        q3.remove();
                        q4.remove();
                        answerStatus.innerHTML = "";
                        initialsTB.setAttribute("type", "text");
                        var bothr = document.querySelector("#bottomHR");
                        jumbo1.insertBefore(initialsTB, bothr);
                        jp1.innerHTML = "Insert Initals Below";
                    }
                    else {
                        changeQuizQuestion();
                        answerStatus.innerHTML = "";
                    }
                }, 1000)
                selectedAnswer = 0;
            }
        else if (selectedAnswer == "0" && quizCompleted == false) {alert("Must Select An Answer");}
        }
        if (element.classList.contains("q1")) {selectedAnswer = 1;}
        if (element.classList.contains("q2")) {selectedAnswer = 2;}
        if (element.classList.contains("q3")) {selectedAnswer = 3;}
        if (element.classList.contains("q4")) {selectedAnswer = 4;}

        if (element.classList.contains("scoreboard")) {
            storage();
        }
    })

//global access elements and  variables
var jumbo1 = document.querySelector("#jumbo1");
var initialsTB = document.createElement("input");
var q1 = document.createElement("button");
var q2 = document.createElement("button");
var q3 = document.createElement("button");
var q4 = document.createElement("button");
q1.classList.add("quizBut", "btn", "q1");
q2.classList.add("quizBut", "btn", "q2");
q3.classList.add("quizBut", "btn", "q3");
q4.classList.add("quizBut", "btn", "q4");
var contButton = document.createElement("Button");
var answerStatus = document.createElement("p");
var questionCounter = 0;
var selectedAnswer = 0;
var totalScore = 0;
var timer = 75;
var timerh1 = document.getElementById("timer");
var quizCompleted = false;

//array of questions/answers/choices to use
var questionsArray = [
    {
    question: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: 3
},

{
    question: "The condition in an if / else statement is enclosed within _______.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: 3
},

{
    question:"CSS stands for _______",
    choices:["Cascading Style Sheets","Can't Stand Stupidity","Cool Styleing Stuff","Cascading Sine Strings"],
    answer: 1
},

{
    question:"Which of the following might help you design your website faster?",
    choices:["HOTS","GitHub","Snapchat","Bootstrap"],
    answer: 4
},

{
    question:"Mobile-First Design is a design strategy that:",
    choices:["Designs for mobile devices only","Designs for mobile devices first, then for others","Designs so that phones can see content correctly too","Designs that include a mobile site and PC site"],
    answer: 2
}
]

//this starts the quiz
function startQuiz() {
    var jh1 = document.querySelector("#jh1");
    var jp1 = document.querySelector("#jp1");
    jumbo1.append(q1, q2, q3, q4);
    document.getElementById("startButton").remove();
    var space = document.createElement("hr");
    space.setAttribute("id","bottomHR");
    contButton.classList.add("btn", "btn-primary");
    contButton.setAttribute("id", "continueButton");
    contButton.classList.add("continueButton")
    contButton.innerHTML = "Continue";
    jumbo1.append(contButton);
    contButton.parentNode.insertBefore(space, contButton);
    contButton.parentNode.insertBefore(answerStatus, contButton);
    jumbo1.classList.add("container");
    contButton.value = 0;
    changeQuizQuestion();
    totalScore = 0;
    timerh1.innerHTML = timer;
    document.querySelector("#scoreboard").remove();
}

//this changes the quiz question
function changeQuizQuestion() {
    jh1.textContent = "Question " + (questionCounter + 1);
    jp1.textContent = questionsArray[questionCounter].question;
    q1.innerHTML = questionsArray[questionCounter].choices[0];
    q2.innerHTML = questionsArray[questionCounter].choices[1];
    q3.innerHTML = questionsArray[questionCounter].choices[2];
    q4.innerHTML = questionsArray[questionCounter].choices[3];
    contButton.value = (contButton.value + 1);
}

function storage() {

    var archive = {},
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        archive[keys[i]] = localStorage.getItem(keys[i]);
    }

    document.querySelector("#startButton").remove();
    var scoreButtonRename = document.querySelector("#scoreboard");
    scoreButtonRename.innerHTML = "Go Back";
    scoreButtonRename.setAttribute("class", "goBack btn btn-primary");
    jh1.innerHTML = "Scores:"
    jp1.innerHTML = "";

    for (i = 0; i < keys.length; i++) {
        var scoreElements = document.createElement("p");
        scoreElements.innerHTML = (keys[i] + ": " + archive[keys[i]]);
        jumbo1.insertBefore(scoreElements, scoreButtonRename);
    }
}