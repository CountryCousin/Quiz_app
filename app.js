const quizData = [
    {
        question: " What are all the types of Pop up boxes available in JavaScript ?",
        a: "Alert",
        b: "Confirm",
        c: "Prompt",
        d: "all of the above",
        correct: "d",

    },
    {
        question: "What is an undefined value in JavaScript ?",
        a: "Variable used in the code doesn’t exist",
        b: "Variable is not assigned to any value",
        c: "Property does not exist.",
        d: "all of the above",
        correct: "d",

    },
    {
        question: "Following are looping structures in Javascript except ?",
        a: "For",
        b: "Do-while loops",
        c: "Boolean",
        d: "While",
        correct: "c",

    },
    {
        question: "Following are the JavaScript Data types except ?",
        a: "Number",
        b: "String",
        c: "Boolean",
        d: "Interger",
        correct: "d",

    },
    {
        question: "Does async function always return a promise ?",
        a: "yes",
        b: "maybe",
        c: "what is async",
        d: "I don't know",
        correct: "a",

    },
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: " What are the different types of errors in JavaScript ? ",
        a: "Load time errors",
        b: "Runtime errors",
        c: "Logical Errors",
        d: "all of the above",
        correct: "d",
    },
];


const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0;
let score = 0;

loadQuiz(); //calling a function before its declared is called hoisting in Js

function loadQuiz(){
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

}

function deselectAnswers(){
    answerEls.forEach(answerEl=> answerEl.checked = false)
};

function getselected(){
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getselected()
    // console.log(answer);

    if (answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++ 
        }

        currentQuiz++
    
        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2> you answerd ${score}/${quizData.length} question(s), correctly</h2>
                <button onclick ="location.reload()">Reload</button>   
            `
        }

       
    
    }
});

