
const language = localStorage.getItem("language") || "UA";
const input = document.getElementById("todo-input");
const addButton = document.getElementById("add-task-btn");
const list = document.getElementById("todo-list");

const defaultTasks = [

"Зробити Anmeldung",

"Отримати Steuer-ID",

"Відкрити банківський рахунок",

"Зареєструватися в Jobcenter",

"Оформити Krankenversicherung",

"Подати заявку на Kindergeld",

"Записатися на мовний курс",

"Підготувати Bewerbungsunterlagen"

];

defaultTasks.forEach(function(task){

createTask(task);

});

addButton.addEventListener("click", function () {
    addTask();
});

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function addTask(){

const text=input.value.trim();

if(text==="") return;

createTask(text);

input.value="";

}

function createTask(text){

const li=document.createElement("li");

li.innerHTML=`
<span>${text}</span>
<button class="delete-btn">🗑</button>
`;

li.addEventListener("click",function(){

li.classList.toggle("done");

});

li.querySelector(".delete-btn").addEventListener("click",function(event){

event.stopPropagation();

li.remove();

});

list.appendChild(li);

}




const translations = {

UA:{

title:"Мої справи",

button:"Додати",

placeholder:"Введіть нову справу"

},

DE:{

title:"Meine Aufgaben",

button:"Hinzufügen",

placeholder:"Neue Aufgabe"

},

EN:{

title:"My Tasks",

button:"Add",

placeholder:"Enter new task"

}

}

const t = translations[language];

document.getElementById("todo-title").textContent = t.title;

document.getElementById("add-task-btn").textContent = t.button;

document.getElementById("todo-input").placeholder = t.placeholder;


