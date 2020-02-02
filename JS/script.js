var start = document.getElementById("startButton").addEventListener("click", function() {
    event.preventDefault;
    startQuiz();
})

var continueQuiz = document.addEventListener("click", function() {
    changeQuizQuestion();
    questionCounter++;
})

//global access elements and  variables
var q1 = document.createElement("button");
var q2 = document.createElement("button");
var q3 = document.createElement("button");
var q4 = document.createElement("button");
q1.classList.add("quizBut", "btn");
q2.classList.add("quizBut", "btn");
q3.classList.add("quizBut", "btn");
q4.classList.add("quizBut", "btn");
var contButton = document.createElement("Button");
var questionCounter = 0;

//array of questions/answers/choices to use
var questionsArray = [
    {
    question: "insert q1 here",
    choices: ["choice1", "choice2", "choice3", "choice4"],
    answer: 2
},

{
    question: "insert q2 here",
    choices: ["c1","c2","c3","c4"],
    answer: 2
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