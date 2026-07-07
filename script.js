const ifUserLoggedIn = false;

// ======================
// TRANSLATIONS
// ======================

const translations = {

UA:{

title:"Твій надійний помічник",
small:"у",
country:"НІМЕЧЧИНІ",

menuHome:"Головна",
menuPayments:"Виплати",
menuDocuments:"Документи",
menuTerms:"Терміни",
menuCalculator:"Калькулятор",
menuUseful:"Корисне",

text1:"Актуальна інформація про життя в Німеччині,",
text2:"державні виплати, документи, корисні терміни та сервіси.",
text3:"Все що потрібно знати — в одному місці.",

search:"Пошук",
video:"Дивитись відео",

registerTitle:"Реєстрація",
register1:"Створи свій аккаунт",
register2:"для персоналізованого досвіду",

name:"Ім'я",
email:"Email",
password:"Пароль",

namePlaceholder:"Ім'я",
emailPlaceholder:"Email",
passwordPlaceholder:"Пароль",

age1:"до 18",
age2:"18-60",
age3:"60 і більше",

submit:"Зареєструватися",

fillAllFields:"Заповніть усі поля",
registerSuccess:"✅ Реєстрація успішна!",
welcome:"👋 Вітаємо",

card1Title:"Державні виплати",
card1Text1:"Інформація про допомогу,",
card1Text2:"доплати та пільги",

card2Title:"Документи",
card2Text1:"Списки необхідних",
card2Text2:"документів та інструкції",

card3Title:"Корисні терміни",
card3Text1:"Списки важливих",
card3Text2:"німецьких термінів",

card4Title:"Корисні посилання",
card4Text1:"Важливі сайти",
card4Text2:"та контакти для тебе",

card5Title:"Мої справи",
card5Text1:"Організуй важливі",
card5Text2:"завдання в Німеччині",

card6Title:"Калькулятор виплат",
card6Text1:"Розрахуй, на які виплати",
card6Text2:"ти можеш розраховувати",

card7Title:"Вікторина",
card7Text1:"Відгадай пояснення німецьких",
card7Text2:"термінів просто і швидко",

open:"Відкрити",
quizButton:"Почати"

},

DE:{

title:"Dein zuverlässiger Helfer",
small:"in",
country:" DEUTSCHLAND",

menuHome:"Startseite",
menuPayments:"Leistungen",
menuDocuments:"Dokumente",
menuTerms:"Begriffe",
menuCalculator:"Rechner",
menuUseful:"Nützliches",

text1:"Aktuelle Informationen über das Leben in Deutschland,",
text2:"staatliche Leistungen, Dokumente und wichtige Begriffe.",
text3:"Alles an einem Ort.",

search:"Suche",
video:"Video ansehen",

registerTitle:"Registrierung",
register1:"Erstelle dein Konto",
register2:"für eine personalisierte Nutzung",

name:"Name",
email:"E-Mail",
password:"Passwort",

namePlaceholder:"Name",
emailPlaceholder:"E-Mail",
passwordPlaceholder:"Passwort",

age1:"unter 18",
age2:"18-60",
age3:"60 und älter",

submit:"Registrieren",

fillAllFields:"Bitte alle Felder ausfüllen",
registerSuccess:"✅ Registrierung erfolgreich!",
welcome:"👋 Willkommen",

card1Title:"Staatliche Leistungen",
card1Text1:"Informationen über",
card1Text2:"Hilfen und Zuschüsse",

card2Title:"Dokumente",
card2Text1:"Listen notwendiger",
card2Text2:"Dokumente und Anleitungen",

card3Title:"Nützliche Begriffe",
card3Text1:"Sammlung wichtiger",
card3Text2:"deutscher Begriffe",

card4Title:"Nützliche Links",
card4Text1:"Wichtige Webseiten",
card4Text2:"und Kontakte für dich",

card5Title:"Meine Aufgaben",
card5Text1:"Organisiere wichtige",
card5Text2:"Aufgaben in Deutschland",

card6Title:"Leistungsrechner",
card6Text1:"Berechne, welche Leistungen",
card6Text2:"dir zustehen",

card7Title:"Quiz",
card7Text1:"Errate Erklärungen",
card7Text2:"deutscher Begriffe",

open:"Öffnen",
quizButton:"Starten"

},

EN:{

title:"Your reliable assistant",
small:"in",
country:" GERMANY",

menuHome:"Home",
menuPayments:"Benefits",
menuDocuments:"Documents",
menuTerms:"Terms",
menuCalculator:"Calculator",
menuUseful:"Useful",

text1:"Up-to-date information about life in Germany,",
text2:"benefits, documents and useful services.",
text3:"Everything you need in one place.",

search:"Search",
video:"Watch video",

registerTitle:"Registration",
register1:"Create your account",
register2:"for a personalized experience",

name:"Name",
email:"Email",
password:"Password",

namePlaceholder:"Name",
emailPlaceholder:"Email",
passwordPlaceholder:"Password",

age1:"under 18",
age2:"18-60",
age3:"60 and older",

submit:"Register",

fillAllFields:"Please fill in all fields",
registerSuccess:"✅ Registration successful!",
welcome:"👋 Welcome",

card1Title:"Government Benefits",
card1Text1:"Information about",
card1Text2:"benefits and support",

card2Title:"Documents",
card2Text1:"Lists of required",
card2Text2:"documents and guides",

card3Title:"Useful Terms",
card3Text1:"Collection of important",
card3Text2:"German terms",

card4Title:"Useful Links",
card4Text1:"Important websites",
card4Text2:"and contacts for you",

card5Title:"My Tasks",
card5Text1:"Organize your important",
card5Text2:"tasks in Germany",

card6Title:"Benefits Calculator",
card6Text1:"Calculate which benefits",
card6Text2:"you can receive",

card7Title:"Quiz",
card7Text1:"Guess explanations",
card7Text2:"of German terms",

open:"Open",
quizButton:"Start"

}

};

const languageSelect = document.getElementById("мова");








function changeLanguage(language){

    const t = translations[language];

    if(!t) return;

    localStorage.setItem("language", language);

    document.getElementById("hero-title").textContent = t.title;
    document.getElementById("hero-small").textContent = t.small;
    document.getElementById("hero-country").textContent = t.country;

    document.getElementById("menu-home").textContent = t.menuHome;
    document.getElementById("menu-payments").textContent = t.menuPayments;
    document.getElementById("menu-documents").textContent = t.menuDocuments;
    document.getElementById("menu-terms").textContent = t.menuTerms;
    document.getElementById("menu-calculator").textContent = t.menuCalculator;
    document.getElementById("menu-useful").textContent = t.menuUseful;

    document.getElementById("hero-text1").textContent = t.text1;
    document.getElementById("hero-text2").textContent = t.text2;
    document.getElementById("hero-text3").textContent = t.text3;

    document.getElementById("Пошук").placeholder = t.search;
    document.getElementById("videoBtn").textContent = t.video;

    document.getElementById("register-title").textContent = t.registerTitle;
    document.getElementById("register-text1").textContent = t.register1;
    document.getElementById("register-text2").textContent = t.register2;

    document.getElementById("label-name").textContent = t.name;
    document.getElementById("label-email").textContent = t.email;
    document.getElementById("label-password").textContent = t.password;

    document.getElementById("Ім’я").placeholder = t.namePlaceholder;
    document.getElementById("Email").placeholder = t.emailPlaceholder;
    document.getElementById("password").placeholder = t.passwordPlaceholder;

    document.getElementById("age1").textContent = t.age1;
    document.getElementById("age2").textContent = t.age2;
    document.getElementById("age3").textContent = t.age3;

    document.getElementById("submit-btn").textContent = t.submit;

    document.getElementById("card1-title").textContent = t.card1Title;
    document.getElementById("card1-text1").textContent = t.card1Text1;
    document.getElementById("card1-text2").textContent = t.card1Text2;

    document.getElementById("card2-title").textContent = t.card2Title;
    document.getElementById("card2-text1").textContent = t.card2Text1;
    document.getElementById("card2-text2").textContent = t.card2Text2;

    document.getElementById("card3-title").textContent = t.card3Title;
    document.getElementById("card3-text1").textContent = t.card3Text1;
    document.getElementById("card3-text2").textContent = t.card3Text2;

    document.getElementById("card4-title").textContent = t.card4Title;
    document.getElementById("card4-text1").textContent = t.card4Text1;
    document.getElementById("card4-text2").textContent = t.card4Text2;

    document.getElementById("card5-title").textContent = t.card5Title;
    document.getElementById("card5-text1").textContent = t.card5Text1;
    document.getElementById("card5-text2").textContent = t.card5Text2;

    document.getElementById("card6-title").textContent = t.card6Title;
    document.getElementById("card6-text1").textContent = t.card6Text1;
    document.getElementById("card6-text2").textContent = t.card6Text2;

    document.getElementById("card7-title").textContent = t.card7Title;
    document.getElementById("card7-text1").textContent = t.card7Text1;
    document.getElementById("card7-text2").textContent = t.card7Text2;

    const card5Button = document.getElementById("card5-button");
if (card5Button) {
    card5Button.textContent = t.open;
}

const card6Button = document.getElementById("card6-button");
if (card6Button) {
    card6Button.textContent = t.open;
}
    const quizBtn = document.getElementById("quiz-btn");
if (quizBtn) {
    quizBtn.textContent = t.quizButton;
}

}

languageSelect.addEventListener("change", function(){

    changeLanguage(this.value);

});

const savedLanguage = localStorage.getItem("language") || "UA";

languageSelect.value = savedLanguage;

changeLanguage(savedLanguage);











// ======================
// SEARCH
// ======================

const searchInput = document.getElementById("Пошук");
const searchResults = document.getElementById("search-results");

if (searchInput && searchResults) {

    searchInput.addEventListener("input", function () {

        const value = this.value.toLowerCase().trim();

        searchResults.innerHTML = "";

        if (value === "") return;

        const filtered = terms.filter(function(term){

            return (

                term.german.toLowerCase().includes(value) ||

                term.ukrainian.toLowerCase().includes(value) ||

                term.english.toLowerCase().includes(value)

            );

        });

        filtered.forEach(function(term){

            const card = document.createElement("div");

            card.className = "result-card";

            card.innerHTML = `
                <h3>${term.german}</h3>
                <p>🇺🇦 ${term.ukrainian}</p>
                <p>🇬🇧 ${term.english}</p>
            `;

            searchResults.appendChild(card);

        });

    });

}












// ======================
// REGISTRATION
// ======================

const registerButton = document.getElementById("submit-btn");

registerButton.addEventListener("click", registerUser);

function registerUser(){

    const language = localStorage.getItem("language") || "UA";
    const t = translations[language];

    const name = document.getElementById("Ім’я").value.trim();
    const email = document.getElementById("Email").value.trim();
    const password = document.getElementById("password").value.trim();

    const message = document.getElementById("register-message");

    if(name === "" || email === "" || password === ""){

        message.style.color = "red";
        message.textContent = t.fillAllFields;
        return;

    }

    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("isRegistered", "true");

    message.style.color = "lime";
    message.textContent = t.registerSuccess;

    document.getElementById("register-form").style.display = "none";

    document.getElementById("welcome-box").style.display = "block";

    document.getElementById("welcome-name").textContent =
        t.welcome + " " + name;

    document.getElementById("welcome-email").textContent = email;

}
// ======================
// CHECK USER
// ======================

const isRegistered = localStorage.getItem("isRegistered");

if(isRegistered === "true"){

    const language = localStorage.getItem("language") || "UA";
    const t = translations[language];

    document.getElementById("register-form").style.display = "none";

    document.getElementById("welcome-box").style.display = "block";

    document.getElementById("welcome-name").textContent =
        t.welcome + " " + localStorage.getItem("userName");

    document.getElementById("welcome-email").textContent =
        localStorage.getItem("userEmail");

}
// ======================
// LOGOUT
// ======================

document.getElementById("logout-btn").addEventListener("click", function(){

    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("isRegistered");

    location.reload();

});
//switch (age) {
 //   case = 10:
   //     alert("Option 1");
     //   break;
       // case = 20:
        //alert("Option 2");
        //break;
        //case = 30:
        //alert("Option 3");
        //break;
        //case = 50:
        //alert("Option 4");
        //break;
        //default:
          //  alert("Option 5")
//}





//const num1 = 10;
//const num2 = 5;

//console.log(num1 + num2);
//console.log(num1 - num2);
//console.log(num1 * num2);
//console.log(num1 / num2);

//Functions
//function say hello(name){
    //alert("Hallo end welcome" + name)
//}
//Hallo end welcome(userName);




//const terms = ["Anmeldung", "Jobcenter","Kindergeld"];
//console.log(terms);

//const haveYouGotNewTerms = true;

//if (haveYouGotNewTerms) {
    //terms.push("Kalkulator"); // тут додаємо знизу нову функцію
//}
//console.log (terms);


// const terms = ["Anmeldung", "Jobcenter","Kindergeld"];
// console.log(terms);

// const haveYouGotNewTerms = true;

// if (haveYouGotNewTerms) {
//     terms.unshift("Kalkulator"); // тут додаємо зверху нову функцію
// }
// console.log (terms);

// const terms = ["Kalkulator", "Anmeldung", "Jobcenter","Kindergeld"];
// console.log(terms);

// const haveYouGotNewTerms = true;

// if (haveYouGotNewTerms) {
//     terms.splice(0, 1, 'Kostenrechner'); //тут ми вказуємо що і де хочемо видалити
// }
// console.log (terms);






// const cards = [
//   {
//     title: "Державні виплати",
//     icon: "💶"
//   },

//   {
//     title: "Документи",
//     icon: "📄"
//   },

//   {
//     title: "Терміни",
//     icon: "📚"
//   }
// ];

// for ( let i=0; i<cards.length; i++){   // для автоматичного створення карток на сайті
//     console.log (cards[i])
// }




// const term = {
//     title: "Kindergeld",
//     description: "Допомога на дітей",
//     amount: "259€"
// }
// for (const key in term) {                     //використов для перебирання властивостей обьекта
//     console.log(key + ":" + term[key]);
// }


// let amount = 0;
// while (amount < 1000){   //коли не знаєш наперед скільки разів потрібно виконувати дію
// amount +=100;
// console.log (amount);
// }





// let language = "ua";
// function changeLanguage(){
//     language = "de";
//     console.log(message);
// }
// changeLanguage();