// INPUT
const emailVerified = [
  "pippo@gmail.com",
  "pluto@gmail.com",
  "paperino@gmail.com",
];

// ESECUZIONE LOGICA

const btnSubmit = document.getElementById('submit');
const messageVerify = document.querySelector('.email-message');
const verifyEmail = document.getElementById('user-email').value;
// const emailResult = document.querySelector('user-email');

btnSubmit.addEventListener('click', function() {
  let trovato = false;

  //scorriamo tutto l'array per vedere il contenuto
  for (let i = 0; i < emailVerified.length; i++) {
    if (verifyEmail === emailVerified[i]) {
      trovato = true;
      break;
    }
  }


  if (trovato) {
    // emailResult.classList.add = 'outline-green';
    // messageVerify.classList.add = ' green';
    messageVerify.innerHTML = "Perfetto! Stai effettuando l'accesso";
  } else {
    // emailResult.classList.add = 'outline-red';
    // messageVerify.classList.add = ' red';
    messageVerify.innerHTML = "Mi dispiace! La tua email non è verificata";
  }
});