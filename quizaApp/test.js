const questions = [
    {
        question: "In web design, what does CSS stand for?",
        answers: [
            { text: "Counter Strike: Source", correct: false },
            { text: "Corrective Style Sheet", correct: false },
            { text: "Computer Style Sheet", correct: false },
            { text: "Cascading Style Sheet", correct: true }
        ]
    },
    
];

const questionElement = document.getElementById('question');
const answerButtonsElement = document.querySelector('.answer-buttons');

let currentQuestionIndex = 0;

startQuiz();

function startQuiz() {
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    resetState();
    questionElement.textContent = question.question;
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.innerHTML = `<span class="option-label">${String.fromCharCode(65 + index)}.</span> ${answer.text}`;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target.closest('button');
    const correct = selectedButton.dataset.correct;
    setStatusClass(selectedButton, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
    if (element.textContent.startsWith('D.')) {
        if (correct) {
            element.classList.add('correct');
        } else {
            element.classList.add('wrong');
        }
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}
10