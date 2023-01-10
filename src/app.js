/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

//esta funcion genera UNA random card
function randomCard() {
  let palos = ["♦", "♥", "♠", "♣"];
  let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  let indexPalo = Math.floor(Math.random() * palos.length);
  let indexNumero = Math.floor(Math.random() * numeros.length);

  console.log(palos[indexPalo], numeros[indexNumero]);

  if (palos[indexPalo] === "♥" || palos[indexPalo] === "♦") {
    document.body.innerHTML += `<div class="card container my-5" style="width: 18rem;">
    <ul class="list-group list-group-flush">
      <li class="list-group-item text-danger" id="top">${palos[indexPalo]}</li>
      <li class="list-group-item text-danger" id="number">${numeros[indexNumero]}</li>
      <li class="list-group-item text-danger" id="bottom">${palos[indexPalo]}</li>
    </ul>
  </div>`;
  } else {
    document.body.innerHTML += `<div class="card container my-5" style="width: 18rem;">
    <ul class="list-group list-group-flush">
      <li class="list-group-item" id="top">${palos[indexPalo]}</li>
      <li class="list-group-item" id="number">${numeros[indexNumero]}</li>
      <li class="list-group-item" id="bottom">${palos[indexPalo]}</li>
    </ul>
  </div>`;
  }
}

randomCard();
