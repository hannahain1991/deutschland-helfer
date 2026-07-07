
const links = [

{
    icon:"💶",
    title:"Jobcenter",
    text:"Bürgergeld, консультації, пошук роботи",
    url:"https://www.jobcenter-ge.de"
},

{
    icon:"👶",
    title:"Familienkasse",
    text:"Kindergeld, Kinderzuschlag",
    url:"https://www.arbeitsagentur.de/familie-und-kinder"
},

{
    icon:"🏛",
    title:"BAMF",
    text:"Інтеграційні курси та міграція",
    url:"https://www.bamf.de"
},

{
    icon:"💼",
    title:"Bundesagentur für Arbeit",
    text:"Пошук роботи",
    url:"https://www.arbeitsagentur.de"
},

{
    icon:"🏠",
    title:"Wohngeld",
    text:"Житлова допомога",
    url:"https://www.wohngeld.org"
},

{
    icon:"📚",
    title:"Anerkennung in Deutschland",
    text:"Визнання дипломів",
    url:"https://www.anerkennung-in-deutschland.de"
},

{
    icon:"🏥",
    title:"Doctolib",
    text:"Запис до лікаря",
    url:"https://www.doctolib.de"
},

{
    icon:"💳",
    title:"ELSTER",
    text:"Податкова декларація",
    url:"https://www.elster.de"

}

];

const container=document.getElementById("links-container");

links.forEach(function(link){

container.innerHTML+=`

<div class="payment-card">

<div class="payment-icon">

${link.icon}

</div>

<div class="payment-info">

<h2>${link.title}</h2>

<p>${link.text}</p>

<a class="payment-btn"

href="${link.url}"

target="_blank">

Відкрити сайт

</a>

</div>

</div>

`;

});