// Funcion que al hacer hover sobre cada chart se muestra el tooltip
// const data = [
//     {
//         day: "mon",
//         amount: 17.45
//     },
//     {
//         day: "tue",
//         amount: 34.91
//     },
//     {
//         day: "wed",
//         amount: 52.36
//     },
//     {
//         day: "thu",
//         amount: 31.07
//     },
//     {
//         day: "fri",
//         amount: 23.39
//     },
//     {
//         day: "sat",
//         amount: 43.28
//     },
//     {
//         day: "sun",
//         amount: 25.48
//     }
// ];

// console.log(data);

// importar el json con import
import Data from "../../data.json";
const CHART = document.querySelector(".card__chart--bar");

const week = [];

Data.forEach(item => {
    week.push(item.day);
    createElement(item.day, item.amount);
});

function createElement(day, amount) {
    const d = new Date();
    const Today = d.getDay();
    console.log(Today);
    const column = document.createElement("div");
    column.classList.add("bar__column");
    column.innerHTML = `
    <p class="bar--expense">$${amount}</p>
    <div class='bar'>
    </div>
    <p class="bar--day">${day}</p>
   `;
    CHART.appendChild(column);
}
// Como experimento intenté que el alto del chart sea el mismo valor que el amount del json y si funcionó :)
// for (let i = 0; i < data.length; i++) {
//     const bar = document.createElement("div");
//     bar.classList.add("card__chart--bar__item");
//     bar.style.height = `${data[i].amount}%`;
//     chart.appendChild(bar);
//
