// create a quiz class
class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;

    }
    getQuestionIndex () {
        return this.questions[this.questionIndex];
    }
    guess(answer) {
        if(this.getQuestionIndex().isCorrectAnswer(answer)) {
            this.score++;
        }
        this.questionIndex++;
    }
    isEnded() {
        return this.questionIndex === this.questions.length;
    }
}

// create question class
class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }
    isCorrectAnswer(choice) {
        return this.answer === choice;
    }
}

// display questions

function displayQuestion () {
    if(quiz.isEnded()) {
        showScores();
    } else {
        // show question
        let questionElement = document.getElementById("question");
        questionElement.innerHTML = quiz.getQuestionIndex().text;

        // show option
        let choices = quiz.getQuestionIndex().choices;
        for (let i = 0; i < choices.length; i++) {
            let choiceElement = document.getElementById("choice" + i);
            choiceElement.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        showProgress();
    }
};
// GUESS FUNCTION
function guess(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        displayQuestion();
    }
}
// show quiz progress
function showProgress() {
    let currentQuestionNumber = quiz.questionIndex + 1;
    let progressElement = document.getElementById("question-progress");
    progressElement.innerHTML = `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
}

// show score
function showScores () {
    let quizEndHTML = 
    `
    <h1>Quiz Completed</h1>
    <h2 id:"score">You scored: ${quiz.score} of ${quiz.questions.length}</h2>
    <div class="quiz-repeat">
    <a href="index.html">Take Quiz again!</a>
    </div>
    `;
    let quizElement = document.getElementById("quiz");
    quizElement.innerHTML = quizEndHTML;
}

// CREATE QUIZ QUESTIONS

let questions = [
    new Question(
        "What HTML stands for",
        ["JQUERY", "CSS", "HyperText Markup", "REACT"],
        "HyperText Markup",
        ),
    new Question(
    "What CSS stands for",
            ["nothing", "Cascade style sheet", "HTML", "OZZY"],
            "Cascade style sheet",
            ),
]

let quiz = new  Quiz(questions);
//display question
displayQuestion();