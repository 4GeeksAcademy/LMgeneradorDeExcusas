/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const excuse = document.getElementById("excuse");

window.onload = function() {
  excuse.innerHTML = generateExcuse();
};

function generateExcuse() {
  let who = [
    "Mi perro",
    "Mi mamá",
    "El vecino",
    "La maestra",
    "Mi tia",
    "La cajera",
    "El verdulero"
  ];
  let action = [
    "comió",
    "pisó",
    "quebró",
    "rompió",
    "perdió",
    "desapareció",
    "se llevó"
  ];
  let what = [
    "mi tarea",
    "mi celular",
    "nuestro auto",
    "mi tarjeta",
    "mis documentos",
    "mi comida"
  ];
  let when = [
    "en la clase",
    "mientras yo dormia",
    "cuando yo estaba en el gimnasio",
    "mientras yo almorzaba",
    "cuando yo estaba estudiando",
    "mientras yo estaba en una reunión"
  ];

  return `${who[randomIndex(who)]} ${action[randomIndex(action)]} ${
    what[randomIndex(what)]
  } ${when[randomIndex(when)]}`;
}

function randomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}
