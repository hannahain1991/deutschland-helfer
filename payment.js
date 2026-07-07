
const data = {

    kindergeld: {
        icon: "👶",
        title: "Kindergeld",
        description: "Kindergeld — це щомісячна державна допомога на дитину.",
        who: "Батьки або опікуни, які проживають у Німеччині.",
        amount: "250 € на кожну дитину щомісяця.",
        documents: [
            "Паспорт",
            "Свідоцтво про народження дитини",
            "Steuer-ID дитини",
            "IBAN"
        ],
        office: "Familienkasse"
    },

    burgergeld: {
        icon: "💶",
        title: "Bürgergeld",
        description: "Bürgergeld — це соціальна допомога людям без достатнього доходу.",
        who: "Люди, які не можуть самостійно покрити свої базові витрати.",
        amount: "Сума залежить від доходу, оренди та складу сім’ї.",
        documents: [
            "Паспорт",
            "Anmeldung",
            "Договір оренди",
            "Виписки з банку"
        ],
        office: "Jobcenter"
    },

    wohngeld: {
        icon: "🏠",
        title: "Wohngeld",
        description: "Wohngeld — це допомога на оплату житла.",
        who: "Люди з невеликим доходом, які самі оплачують оренду.",
        amount: "Сума залежить від доходу, оренди та кількості людей у сім’ї.",
        documents: [
            "Договір оренди",
            "Довідка про дохід",
            "Anmeldung"
        ],
        office: "Wohngeldstelle"
    },

    kinderzuschlag: {
        icon: "👨‍👩‍👧",
        title: "Kinderzuschlag",
        description: "Kinderzuschlag — це додаткова допомога сім’ям з дітьми.",
        who: "Батьки, які працюють, але доходу недостатньо для сім’ї.",
        amount: "Сума залежить від доходу сім’ї.",
        documents: [
            "Паспорт",
            "Довідка про дохід",
            "Kindergeld-номер",
            "IBAN"
        ],
        office: "Familienkasse"
    },

    elterngeld: {
        icon: "🍼",
        title: "Elterngeld",
        description: "Elterngeld — це допомога після народження дитини.",
        who: "Батьки, які після народження дитини тимчасово не працюють або працюють менше.",
        amount: "Сума залежить від попереднього доходу.",
        documents: [
            "Свідоцтво про народження дитини",
            "Довідка про дохід",
            "Паспорт",
            "IBAN"
        ],
        office: "Elterngeldstelle"
    }

};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const payment = data[id];
const container = document.getElementById("payment");

if (payment) {

    container.innerHTML = `
        <h1>${payment.icon} ${payment.title}</h1>

        <div class="payment-card">
            <div class="payment-info">

                <h2>Що це?</h2>
                <p>${payment.description}</p>

                <h2>Хто може отримати?</h2>
                <p>${payment.who}</p>

                <h2>Розмір виплати</h2>
                <p>${payment.amount}</p>

                <h2>Необхідні документи</h2>
                <ul>
                    ${payment.documents.map(function(doc){
                        return `<li>${doc}</li>`;
                    }).join("")}
                </ul>

                <h2>Куди звертатися?</h2>
                <p>${payment.office}</p>

                <br>

                <a class="payment-btn" href="calculator.html">Перевірити в калькуляторі</a>
                <a class="payment-btn" href="payments.html">Назад</a>

            </div>
        </div>
    `;

} else {

    container.innerHTML = `
        <h1>Виплату не знайдено</h1>
        <a class="payment-btn" href="payments.html">Назад</a>
    `;

}