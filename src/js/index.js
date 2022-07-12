// importar el json
import Data from "../../data.json";
const chart = document.querySelector(".card__chart--bar");

const week = [];

// Recorrer el json y pushear los elementos en el array "week"
Data.forEach(item => {
    week.push(item.day);
    createElement(item.day, item.amount);
});

function createElement(day, amount) {
    const column = document.createElement("div");
    column.classList.add("bar__column");
    column.innerHTML = `
    <p class="bar--expense slide-top">$${amount}</p>
    <div class='bar'></div>
    <p class="bar--day">${day}</p>`;
    chart.appendChild(column);
}
// Como experimento intenté que el alto del chart sea el mismo valor que el amount del json y si funcionó :)
// for (let i = 0; i < data.length; i++) {
//     const bar = document.createElement("div");
//     bar.classList.add("card__chart--bar__item");
//     bar.style.height = `${data[i].amount}%`;
//     chart.appendChild(bar);
//
