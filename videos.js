
const videos = [

{
category:"🇩🇪 Початок життя в Німеччині",
title:"Як зробити Anmeldung",
url:"https://www.youtube.com/results?search_query=Anmeldung+Deutschland"
},

{
category:"💶 Державні виплати",
title:"Kindergeld",
url:"https://www.youtube.com/results?search_query=Kindergeld"
},

{
category:"💶 Державні виплати",
title:"Bürgergeld",
url:"https://www.youtube.com/results?search_query=Bürgergeld"
},

{
category:"🏠 Житло",
title:"Як знайти квартиру",
url:"https://www.youtube.com/results?search_query=Wohnung+Deutschland"
},

{
category:"💼 Робота",
title:"Як написати Bewerbung",
url:"https://www.youtube.com/results?search_query=Bewerbung"
},

{
category:"🗣 Німецька",
title:"Вивчення німецької",
url:"https://www.youtube.com/results?search_query=Deutsch+lernen"
}

];

const container = document.getElementById("videos-container");

let currentCategory = "";

videos.forEach(video=>{

if(video.category!==currentCategory){

currentCategory=video.category;

container.innerHTML+=`<h2 style="margin-top:40px;color:#FFD400;">${currentCategory}</h2>`;

}

container.innerHTML+=`

<div class="payment-card">

<div class="payment-icon">

▶️

</div>

<div class="payment-info">

<h2>${video.title}</h2>

<a class="payment-btn"

href="${video.url}"

target="_blank">

Дивитися

</a>

</div>

</div>

`;

});