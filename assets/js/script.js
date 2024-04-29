// set the questions for the quiz
const questions = [
    {
        question: "What colors does the swedish flag have?",
        answers: [
            { text: "Blue & White", correct: false},
            { text: "Blue & Yellow", correct: true},
            { text: "Red & White", correct: false},
            { text: "Red & Blue", correct: false},
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
        question: "One of these is not from Sweden",
        answers: [
            { text: "Audi", correct: true},
            { text: "IKEA", correct: false},
            { text: "Volvo", correct: false},
            { text: "Abba", correct: false},
        ]
    },
    {
        question: "Which artist/group is not from sweden?",
        answers: [
            { text: "Zara Larsson", correct: false},
            { text: "David Guetta", correct: true},
            { text: "Avicii", correct: false},
            { text: "Swedish House Mafia", correct: false},
        ]
    },
];
// Select the HTML elements
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
    // resets the previous question and make it hidden
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
        // increase the score by 1
        score++
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
// Code for showing score at the end
function showScore(){
    resetState();
    question.innerHTML = `Good Job! You got ${score} out of ${questions.length}!`;
    secondButton.innerHTML = "Play Again";
    secondButton.style.display = "block";
}
// code for next question
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
// Eventlisterner for the next question button.
secondButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        // restart the quiz if there is no more question.
        startQuiz();
    }
}); 

startQuiz();