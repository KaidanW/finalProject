//final project who else feeling devious???

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const scoreElement = document.getElementById("score");


const questions = [
    {
        question: "What is Level 0 Called?",
        options: ["Yellow Madness", "Beginnings", "The Lobby", "Liminal"],
        answer: "The Lobby"
    },
    {
        question: "What entity is known to inhabit level 0?",
        options: ["The Bacteria", "Smilers", "Hounds", "Wretches"],
        answer: "The Bacteria"
    },
    {
        question: "What company discovered the Backrooms",
        options: ["Backrooms.CO", "M.E.G", "A-Sync", "A.E.A"],
        answer: "A-Sync"
    },
    {
        question: "How would you enter the Backrooms",
        options: ["A hole", "A Portal", "A Door", "Noclip"],
        answer: "Noclip"
    },
    {
        question: "What kind of water is found in the Backrooms",
        options: ["Sparkling Water", "Almond Water", "Coconut Water", "Spring Water"],
        answer: "Almond Water"
    } 
];

let currentQuestion = 0;
let score = 0;


function questiondisplay() {
    questionElement.textContent = questions[currentQuestion].question;
    optionsElement.innerHTML = "";
    questions[currentQuestion].options.forEach((option, index) => {
        const optionButton = document.createElement("button");
        optionButton.classList.add("option");
        optionButton.textContent = option;
        optionButton.addEventListener("click", () => checkAnswer(option));
        optionsElement.appendChild(optionButton);
    });
    scoreElement.textContent = `Score: ${score}`;
}

function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestion].answer;
    if (selectedOption === correctAnswer) {
        score += 1;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        questiondisplay();
    } else {
        alert(`Trivia Complete. Your score is ${score}.`);
    }
}

questiondisplay();


