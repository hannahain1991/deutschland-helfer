const terms = [

 {
        german: "Kindergeld",
        ukrainian: "Допомога на дітей",
        english: "Child benefit"
    },

    {
        german: "Jobcenter",
        ukrainian: "Центр зайнятості",
        english: "Job Center"
    },

    {
        german: "Anmeldung",
        ukrainian: "Реєстрація місця проживання",
        english: "Registration"
    },

    {
        german: "Bürgergeld",
        ukrainian: "Соціальна допомога",
        english: "Citizen's benefit"
    },

    {
        german: "Krankenversicherung",
        ukrainian: "Медичне страхування",
        english: "Health insurance"
    }
    ,
{
    german: "Ausländerbehörde",
    ukrainian: "Міграційна служба",
    english: "Foreigners' Office"
},

{
    german: "Aufenthaltstitel",
    ukrainian: "Посвідка на проживання",
    english: "Residence Permit"
},

{
    german: "Meldebescheinigung",
    ukrainian: "Довідка про реєстрацію",
    english: "Registration Certificate"
},

{
    german: "Steuer-ID",
    ukrainian: "Податковий номер",
    english: "Tax Identification Number"
},

{
    german: "Finanzamt",
    ukrainian: "Податкова служба",
    english: "Tax Office"
},

{
    german: "Elterngeld",
    ukrainian: "Допомога батькам після народження дитини",
    english: "Parental Benefit"
},

{
    german: "Kindergarten",
    ukrainian: "Дитячий садок",
    english: "Kindergarten"
},

{
    german: "Schule",
    ukrainian: "Школа",
    english: "School"
},

{
    german: "Integrationskurs",
    ukrainian: "Інтеграційний курс",
    english: "Integration Course"
},

{
    german: "BAMF",
    ukrainian: "Федеральне відомство з питань міграції",
    english: "Federal Office for Migration"
},

{
    german: "Arbeitsvertrag",
    ukrainian: "Трудовий договір",
    english: "Employment Contract"
},

{
    german: "Kündigung",
    ukrainian: "Звільнення або розірвання договору",
    english: "Termination"
},

{
    german: "Mietvertrag",
    ukrainian: "Договір оренди",
    english: "Rental Agreement"
},

{
    german: "Nebenkosten",
    ukrainian: "Комунальні платежі",
    english: "Utility Costs"
},

{
    german: "Hausarzt",
    ukrainian: "Сімейний лікар",
    english: "Family Doctor"
},

{
    german: "Apotheke",
    ukrainian: "Аптека",
    english: "Pharmacy"
},

{
    german: "Krankschreibung",
    ukrainian: "Лікарняний",
    english: "Sick Note"
},

{
    german: "Termin",
    ukrainian: "Прийом або зустріч",
    english: "Appointment"
},

{
    german: "Sparkasse",
    ukrainian: "Ощадний банк",
    english: "Savings Bank"
},

{
    german: "IBAN",
    ukrainian: "Номер банківського рахунку",
    english: "Bank Account Number"
}

];
const container = document.getElementById("terms-container");

if (container) {

    terms.forEach(function(term){

        container.innerHTML += `

        <div class="result-card">

            <h2>${term.german}</h2>

            <p><strong>UA:</strong> ${term.ukrainian}</p>

            <p><strong>EN:</strong> ${term.english}</p>

        </div>

        `;

    });

}