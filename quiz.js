document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("start-quiz-btn");
  const quizSection = document.getElementById("quiz-section");

  if (startButton && quizSection) {
    startButton.addEventListener("click", function () {
      quizSection.style.display = "block";
      startButton.style.display = "none";
      window.scrollTo({ top: quizSection.offsetTop, behavior: "smooth" });
    });
  }
});

const questions = [
  {
    question: "Who lost her glass slipper?",
    answers: [
      { text: "Aurora", correct: false },
      { text: "Cinderella", correct: true },
      { text: "Snow White", correct: false },
      { text: "Ariel", correct: false },
    ],
  },
  {
    question: "Which princess has a pet tiger named Rajah?",
    answers: [
      { text: "Jasmine", correct: true },
      { text: "Belle", correct: false },
      { text: "Mulan", correct: false },
      { text: "Pocahontas", correct: false },
    ],
  },
  {
    question:
      "Who is the princess that pricked her finger on a spinning wheel?",
    answers: [
      { text: "Rapunzel", correct: false },
      { text: "Elsa", correct: false },
      { text: "Moana", correct: false },
      { text: "Aurora", correct: true },
    ],
  },
  {
    question: "Which princess has a best friend named Flounder?",
    answers: [
      { text: "Ariel", correct: true },
      { text: "Cinderella", correct: false },
      { text: "Mulan", correct: false },
      { text: "Belle", correct: false },
    ],
  },
  {
    question: "Who is the princess that tames a wild beast?",
    answers: [
      { text: "Jasmine", correct: false },
      { text: "Belle", correct: true },
      { text: "Snow White", correct: false },
      { text: "Aurora", correct: false },
    ],
  },
];

const questionText = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const resultText = document.getElementById("result");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.style.display = "none";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  questionText.innerText = currentQuestion.question;
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    button.addEventListener("click", () => selectAnswer(answer.correct));
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = "none";
  answerButtons.innerHTML = "";
}

function selectAnswer(correct) {
  if (correct) {
    score++;
    resultText.innerText = "Correct!";
  } else {
    resultText.innerText = "Wrong answer.";
  }
  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    resultText.innerHTML = `Quiz Finished! Your Score: ${score}/${questions.length}<br>I hope this little entertainment put you to ease, mwa mwa<br><em>xoxo, Paula Raelene<3</em>`;
    nextButton.style.display = "none";
  }
});

startQuiz();
