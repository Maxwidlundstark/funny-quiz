// questions for the quiz
const questions = [
    {
        question: "question 1 goes here",
        answers: [
            {text: "asnwer1", correct: false},
            {text: "asnwer2", correct: true},
            {text: "asnwer3", correct: false},
            {text: "asnwer4", correct: false},
        ]
    }, 
    {
        question: "question 2 goes here",
        answers: [
            {text: "asnwer1", correct: false},
            {text: "asnwer2", correct: false},
            {text: "asnwer3", correct: true},
            {text: "asnwer4", correct: false},
        ]
    },
    {
        question: "question 3 goes here",
        answers: [
            {text: "asnwer1", correct: true},
            {text: "asnwer2", correct: false},
            {text: "asnwer3", correct: false},
            {text: "asnwer4", correct: false},
        ]
    },
    {
        question: "question 4 goes here",
        answers: [
            {text: "asnwer1", correct: false},
            {text: "asnwer2", correct: true},
            {text: "asnwer3", correct: false},
            {text: "asnwer4", correct: false},
        ]
    },
    {
        question: "question 5 goes here",
        answers: [
            {text: "asnwer1", correct: false},
            {text: "asnwer2", correct: false},
            {text: "asnwer3", correct: false},
            {text: "asnwer4", correct: true},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const secondButton = document.getElementById("second-btn");
// setting the question and score to 0
let currentQuestioneIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    secondButton.innerHTML = "Next Question";
    showQuestion();
}

function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNr = currentQuestioneIndex + 1;
    questionElement.innerHTML = questionNr + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}
startQuiz();
