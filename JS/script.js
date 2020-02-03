var start = document.getElementById("startButton").addEventListener("click", function() {
    event.preventDefault();
    startQuiz();
})
//this is the default click listener that listens to any click besides start
    document.addEventListener("click", function(event) {
    event.preventDefault();
    var element = event.target;
    if (element.classList.contains("continueButton"))
    {
        questionCounter++;
        changeQuizQuestion();
        alert(selectedAnswer);
}
    if (element.classList.contains("q1")) {selectedAnswer = 1;}
    if (element.classList.contains("q2")) {selectedAnswer = 2;}
    if (element.classList.contains("q3")) {selectedAnswer = 3;}
    if (element.classList.contains("q4")) {selectedAnswer = 4;}
})

//global access elements and  variables
var q1 = document.createElement("button");
var q2 = document.createElement("button");
var q3 = document.createElement("button");
var q4 = document.createElement("button");
q1.classList.add("quizBut", "btn", "q1");
q2.classList.add("quizBut", "btn", "q2");
q3.classList.add("quizBut", "btn", "q3");
q4.classList.add("quizBut", "btn", "q4");
var contButton = document.createElement("Button");
var questionCounter = 0;
var selectedAnswer = null;
var totalScore = 0;

//array of questions/answers/choices to use
var questionsArray = [
    {
    question: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: 3
},

{
    question: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: 3
},

{
    question:"q3",
    choices:["","","",""],
    answer: 2
}
]

//this starts the quiz
function startQuiz() {
    var jumbo1 = document.querySelector("#jumbo1");
    var jh1 = document.querySelector("#jh1");
    var jp1 = document.querySelector("#jp1");
    jumbo1.append(q1, q2, q3, q4);
    document.getElementById("startButton").remove();
    var space = document.createElement("hr");
    contButton.classList.add("btn", "btn-primary");
    contButton.setAttribute("id", "continueButton");
    contButton.classList.add("continueButton")
    contButton.innerHTML = "Continue";
    jumbo1.append(contButton);
    contButton.parentNode.insertBefore(space, contButton);
    jumbo1.classList.add("container");
    contButton.value = 0;
    changeQuizQuestion();
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