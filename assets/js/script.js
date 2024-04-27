// set the questions for the quiz
const questions = [
    {
        question: "What colors does the swedish flag have?",
        answers: [
            { text: "blue & white", correct: false},
            { text: "blue & yellow", correct: true},
            { text: "red & white", correct: false},
            { text: "red & blue", correct: false},
        ]
    }, 
    {
        question: "What country invented Spotify?",
        answers: [
            { text: "Germany", correct: false},
            { text: "Denmark", correct: false},
            { text: "Sweden", correct: true},
            { text: "Norway", correct: false},
        ]
    },
    {
        question: "Which of these answers is not Swedish?",
        answers: [
            { text: "...", correct: true},
            { text: "IKEA", correct: false},
            { text: "Volvo", correct: false},
            { text: "Abba", correct: false},
        ]
    },
    {
        question: "Which artist is not from sweden?",
        answers: [
            { text: "Zara Larsson", correct: false},
            { text: "David Guetta", correct: true},
            { text: "Avicii", correct: false},
            { text: "Swedish House Mafia", correct: false},
        ]
    },
];
// Add variables from HTML by targeting the ID
const question = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const secondButton = document.getElementById("second-btn");

//setting the question index and score to 0 from the start
let currentQuestionIndex = 0;
let score = 0;

// function for when the quiz starts
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    secondButton.innerHTML = "Next Question";
    showQuestion();
}
 // function to display the questions
function showQuestion(){
    // resets the question before and make it hidden
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    question.innerHTML = questionNo + ". " + currentQuestion.question;
// code for displaying answers
    currentQuestion.answers.forEach(answers => {
        const button = document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        // correct answer
        if (answers.correct){
            button.dataset.correct = answers.correct;
        }
        // adding eventlistner for click on answers
        button.addEventListener("click", selectAnswer);
    })
}

// define the reset function to make the previous question hidden
function resetState(){
    secondButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
// checks if true or false and if the answer is correct
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
    }else{
        selectedBtn.classList.add("incorrect");
    }
    /* Disable clicks after an answer is chosen. 
    if answer is false the correct answer will show.*/ 
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        } 
        button.disabled = true;
    });
    // code for the next question button. 
    secondButton.style.display = "block";
}


startQuiz();