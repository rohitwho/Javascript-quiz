
const questionText = document.getElementById('question-text')
const answerEls = document.querySelectorAll('.answerr')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const startButton = document.getElementById('start')
const submit = document.getElementById('submit')
const restartBut = document.getElementById('restart')
const timeEl = document.querySelector(".time")
const li = document.getElementsByTagName("li")
const scoret = document.querySelector('.scoret')
const userName = document.querySelector('.userInput')
const userValue = document.getElementById('userValue')

///////////////////QUIZ QUESTIONS/////////////////////////////

const quizQuestions = [
    {
        question: "Which language runs in a web browser?",

        a: 'HTML                 ',
        b: 'JAVASCRIPT',
        c: 'CSS',
        d: 'PYTHON',
        correct: "b",

    },
    {
        question: "What is the output of the following code: console.log(typeof(null));",

        a: "null",
        b: "undefined",
        c: "object",
        d: "number",
        correct: "c",

    },
    {
        question: "Which of the following is a higher-order function in JavaScript?",

        a: 'map()',
        b: "filter()",
        c: ' reduce()',
        d: "All of the above",
        correct: "d",

    },
    {
        question: "Which of the following is a falsy value in JavaScript?",

        a: "0",
        b: '0',
        c: ' ""',
        d: ' All of the above',
        correct: "d",

    },
    {
        question: "What is the output of the following code: console.log(0.1 + 0.2 === 0.3);",

        a: "true",
        b: " false",
        c: "array-like",
        d: "undefined",
        correct: "b",

    },
    {
        question: "What is the output of the following code: console.log([1, 2, 3] + [4, 5, 6]);",

        a: "[1, 2, 3, 4, 5, 6]",
        b: '1,2,34,5,6',
        c: '123456',
        d: 'NaN',
        correct: "b",

    }

]


///////////////////BEGIN QUIZ/////////////////////////////

let currentQuiz = 0
let score = 0

startButton.addEventListener("click", () => {
    beginQuiz();
    setTime();
});

function beginQuiz() {

    dBlock()
    deSelectedAns()

    const currentQuizIndex = quizQuestions[currentQuiz]

    questionText.innerHTML = currentQuizIndex.question;

    const answers = currentQuizIndex.answers;

    a_text.innerHTML = currentQuizIndex.a;
    b_text.innerHTML = currentQuizIndex.b;
    c_text.innerHTML = currentQuizIndex.c;
    d_text.innerHTML = currentQuizIndex.d;

    hideAfter();


}


function hideAfter() {
    userName.style.display = "none";
    startButton.style.display = "none";
    restartBut.style.display = "none";
    submit.style.display = "none"
    next.style.display = "inline"

};

////////////////////////////////////////////////////////////////////

restartBut.addEventListener("click", function () {
    timeEl.style.display = "flex"
    currentQuiz = 0;
    score = 0;
    clearInterval(timerInterval);
    scoret.innerHTML = "";
    beginQuiz(currentQuiz, score);

    //THIS WILL SET THE TIMER TO 60 SEC WHEN USER HIT RESTART// 
    secondsLeft = 60;
    setTime(secondsLeft);
});





////////////////////////////////////////////////////////////////////
function deSelectedAns() {
    answerEls.forEach(answerEls => answerEls.checked = false)
}

////////////////////////////////////////////////////////////////////

function selectedAns() {
    var answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer

}



////////////////////////////////////////////////////////////////////

next.addEventListener("click", () => {

    const answer = selectedAns()

    if (answer === quizQuestions[currentQuiz].correct) {
        score++
    }
    currentQuiz++
    if (currentQuiz < quizQuestions.length) {
        beginQuiz()



    }




    else {
        scoret.innerHTML = `<h1>Congratulation ${userValue.value} You Answered ${score}/${quizQuestions.length} questions correctly<h1>`
        timeEl.style.display = "none"
        restartBut.style.display = "inline";
        questionText.innerHTML = "Do you wanna give it another try?"
        dNone()

    }

})



////////////////////////////////////////////////////////////////////

function dBlock() {
    li[0].style.display = "block";
    li[1].style.display = "block";
    li[2].style.display = "block";
    li[3].style.display = "block";

};


////////////////////////////////////////////////////////////////////

function dNone() {
    li[0].style.display = "none";
    li[1].style.display = "none";
    li[2].style.display = "none";
    li[3].style.display = "none";
    next.style.display = "none";
    startButton.style.display = "none";
    userName.style.display = "none";
};
/////////////////////////SET TIME///////////////////////////////////////////
let secondsLeft = 60;
let timerInterval

function setTime() {


    timerInterval = setInterval(function () {

        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left";

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            timeEl.textContent = `Looks like you ran out of time ${userValue.value} `
            scoret.innerHTML = `<h1> You Answered ${score}/${quizQuestions.length} questions correctly<h1>`
            restartBut.style.display = "inline";

            dNone();
            questionText.innerHTML = "Do you wanna give it another try?";

        }

    }, 1000);

    setTimeout(function () {
        clearInterval(timerInterval);
    }, 62000);
}


////////////////////////////////////////////////////////////////////








