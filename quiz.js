
const questions = [

{
    question:"Що означає Kindergeld?",

    answers:[
        "Допомога на дітей",
        "Паспорт",
        "Пенсія",
        "Медичне страхування"
    ],

    correct:0
},

{
    question:"Що означає Anmeldung?",

    answers:[
        "Реєстрація місця проживання",
        "Податок",
        "Банк",
        "Паспорт"
    ],

    correct:0
},

{
    question:"Що означає Bürgergeld?",

    answers:[
        "Соціальна допомога",
        "Страхування",
        "Школа",
        "Лікарня"
    ],

    correct:0
},

{
    question:"Що означає Krankenversicherung?",

    answers:[
        "Медичне страхування",
        "Допомога дітям",
        "Пенсія",
        "Податок"
    ],

    correct:0
}

];

let currentQuestion=0;

let score=0;

showQuestion();

function showQuestion(){

document.getElementById("result").textContent="";

document.getElementById("progress").textContent=
"Питання "+(currentQuestion+1)+" / "+questions.length;

const q=questions[currentQuestion];

document.getElementById("question").textContent=q.question;

const answers=document.getElementById("answers");

answers.innerHTML="";

q.answers.forEach(function(answer,index){

const button=document.createElement("button");

button.className="answer";

button.textContent=answer;

button.onclick=function(){

checkAnswer(index);

};

answers.appendChild(button);

});

}

function checkAnswer(index){

const q=questions[currentQuestion];

const buttons=document.querySelectorAll(".answer");

buttons.forEach(function(button){

button.disabled=true;

});

if(index===q.correct){

buttons[index].classList.add("correct");

score++;

document.getElementById("score").textContent=score;

document.getElementById("result").textContent="✅ Правильно!";

}else{

buttons[index].classList.add("wrong");

buttons[q.correct].classList.add("correct");

document.getElementById("result").textContent="❌ Неправильно";

}

}

document.getElementById("nextBtn").onclick=function(){

currentQuestion++;

if(currentQuestion<questions.length){

showQuestion();

}else{

document.querySelector(".quiz-box").innerHTML=`

<h1>🎉 Вітаємо!</h1>

<h2 style="color:white;text-align:center">

Твій результат

</h2>

<h1 style="color:#FFD400">

${score} із ${questions.length}

</h1>

`;

}

};