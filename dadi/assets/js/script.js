//INPUT (non necessari in quanto i numeri sono random)

//ESECUZIONE LOGICA
let numUser = Math.floor(Math.random() * 6) + 1;
let numPc = Math.floor(Math.random() * 6) + 1;

const userCardElem = document.querySelector(".card-user");
const pcCardElem = document.querySelector(".card-pc");

const userResultElem = document.getElementById("user-result");
const pcResultElem = document.getElementById("pc-result");
const winnerElem = document.getElementById("winner");

userResultElem.innerHTML = numUser;
pcResultElem.innerHTML = numPc;
winnerElem.innerHTML = console.log(numUser, "utente");
console.log(numPc, "pc");

if (numUser > numPc) {
  winnerElem.innerHTML = "Il vincitore sei TU!";
} else if (numUser < numPc) {
  winnerElem.innerHTML = "Il vincitore è il Computer";
} else {
  winnerElem.innerHTML = "La partita è in pareggio";
}
