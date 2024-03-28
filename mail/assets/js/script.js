// INPUT
const emailVerified = [
    "pippo@gmail.com",
    "pluto@gmail.com",
    "paperino@gmail.com"
];

const emailUser = prompt("Inserisci la tua email: ");
console.log(emailUser, typeof emailUser);

// ESECUZIONE LOGICA    
let trovato = false;

//scorriamo tutto l'array per vedere il contenuto
let i;
for (i = 0; i < emailVerified.length; i++) {
    if (emailUser === emailVerified[i]) {
        trovato = true;
        break;
    }
}

if (trovato) {
    console.log("Perfetto! Stai effettuando l'accesso");
} else {
    console.log("Mi dispiace! La tua email non è verificata");
}
