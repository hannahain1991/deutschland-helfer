
const button = document.getElementById("calculate-btn");

button.addEventListener("click", calculate);

function calculate() {

    const age = Number(document.getElementById("age").value);
    const children = Number(document.getElementById("children").value);
    const job = document.getElementById("job").value;
    const income = Number(document.getElementById("income").value);

    let result = `
<h2>🎉 Вам можуть підходити:</h2>
`;

    if (children > 0) {
        result += `
<div class="benefit">

<h3>👶 Kindergeld</h3>

<p>250 € щомісяця на дитину.</p>

</div>
`;
    }

    if (job === "no") {
        result += `
<div class="benefit">

<h3>💶 Bürgergeld</h3>

<p>Можливо маєте право на основну соціальну допомогу.</p>

</div>
`;
    }

    if (income < 1800) {
       result += `
<div class="benefit">

<h3>🏠 Wohngeld</h3>

<p>Можлива компенсація витрат на житло.</p>

</div>
`;
    }

    if (children > 0 && income < 2500) {
        result += `
<div class="benefit">

<h3>👨‍👩‍👧 Kinderzuschlag</h3>

<p>Додаткова допомога для сімей з дітьми.</p>

</div>
`;
    }

    if (result === "<h2>Можливі виплати:</h2>") {
        result += "На жаль, відповідних виплат не знайдено.";
    }

    document.getElementById("result").innerHTML = result;

}