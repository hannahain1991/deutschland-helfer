
const data = {

anmeldung:{

icon:"🏠",

title:"Anmeldung",

description:"Реєстрація місця проживання в Німеччині.",

documents:[
"Паспорт",
"Договір оренди",
"Wohnungsgeberbestätigung"
],

office:"Bürgerbüro",

time:"Протягом 14 днів після переїзду."

},

aufenthaltstitel:{

icon:"🪪",

title:"Aufenthaltstitel",

description:"Посвідка на проживання.",

documents:[
"Паспорт",
"Біометричне фото",
"Anmeldung"
],

office:"Ausländerbehörde",

time:"Після подання заяви."

},

steuerid:{

icon:"🆔",

title:"Steuer-ID",

description:"Особистий податковий номер.",

documents:[
"Паспорт",
"Anmeldung"
],

office:"Finanzamt",

time:"Надходить поштою."

},

krankenversicherung:{

icon:"🏥",

title:"Krankenversicherung",

description:"Медичне страхування в Німеччині.",

documents:[
"Паспорт",
"Anmeldung",
"Трудовий договір (за наявності)"
],

office:"Страхова компанія",

time:"Одразу після оформлення."

}

};

const params = new URLSearchParams(window.location.search);

const id = params.get("id");

const documentInfo = data[id];

const container = document.getElementById("document");

if(documentInfo){

container.innerHTML=`

<h1>${documentInfo.icon} ${documentInfo.title}</h1>

<div class="payment-card">

<div class="payment-info">

<h2>Опис</h2>

<p>${documentInfo.description}</p>

<h2>Необхідні документи</h2>

<ul>

${documentInfo.documents.map(doc=>`<li>${doc}</li>`).join("")}

</ul>

<h2>Куди звертатися</h2>

<p>${documentInfo.office}</p>

<h2>Термін оформлення</h2>

<p>${documentInfo.time}</p>

<br>

<a class="payment-btn" href="documents.html">

Назад

</a>

</div>

</div>

`;

}else{

container.innerHTML="<h1>Документ не знайдено</h1>";

}