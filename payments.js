const payments = [
    {
        icon: "👶",
        title: "Kindergeld",
        text: "250 € щомісяця на кожну дитину.",
        link:"payment.html?id=kindergeld"
    },
    {
        icon: "💶",
        title: "Bürgergeld",
        text: "Соціальна допомога людям без достатнього доходу.",
        link:"payment.html?id=burgergeld"
    },
    {
        icon: "🏠",
        title: "Wohngeld",
        text: "Допомога на оплату житла.",
        link:"payment.html?id=wohngeld"
    },
    {
        icon: "👨‍👩‍👧",
        title: "Kinderzuschlag",
        text: "Доплата сім'ям з дітьми.",
        link:"payment.html?id=kinderzuschlag"
    },
    {
        icon: "🍼",
        title: "Elterngeld",
        text: "Допомога після народження дитини.",
        link:"payment.html?id=elterngeld"
    }
];

const container = document.getElementById("payments-container");

payments.forEach(function(payment){

    container.innerHTML += `
        <div class="payment-card">
            <div class="payment-icon">${payment.icon}</div>

            <div class="payment-info">
                <h2>${payment.title}</h2>
                <p>${payment.text}</p>
                <a class="payment-btn" href="${payment.link}">Детальніше</a>
            </div>
        </div>
    `;

});

