// INPUT
const emailVerified = [
  "pippo@gmail.com",
  "pluto@gmail.com",
<<<<<<< HEAD
  "paperino@gmail.com"
=======
  "paperino@gmail.com",
>>>>>>> 4cb8ff7d04109f17ff1c67973e92947e08b48671
];

// ESECUZIONE LOGICA

<<<<<<< HEAD
const btnSubmit = document.getElementById("submit");
const messageVerify = document.querySelector(".email-message");
const verifyEmail = document.getElementById("user-email").value;
// const emailResult = document.querySelector('user-email');

btnSubmit.addEventListener("click", function () {
=======
const btnSubmit = document.getElementById('submit');
const messageVerify = document.querySelector('.email-message');
const verifyEmail = document.getElementById('user-email').value;
// const emailResult = document.querySelector('user-email');

btnSubmit.addEventListener('click', function() {
>>>>>>> 4cb8ff7d04109f17ff1c67973e92947e08b48671
  let trovato = false;

  //scorriamo tutto l'array per vedere il contenuto
  for (let i = 0; i < emailVerified.length; i++) {
    if (verifyEmail === emailVerified[i]) {
      trovato = true;
      break;
    }
  }

<<<<<<< HEAD
=======

>>>>>>> 4cb8ff7d04109f17ff1c67973e92947e08b48671
  if (trovato) {
    // emailResult.classList.add = 'outline-green';
    // messageVerify.classList.add = ' green';
    messageVerify.innerHTML = "Perfetto! Stai effettuando l'accesso";
  } else {
    // emailResult.classList.add = 'outline-red';
    // messageVerify.classList.add = ' red';
    messageVerify.innerHTML = "Mi dispiace! La tua email non è verificata";
  }
<<<<<<< HEAD
});
=======
});
>>>>>>> 4cb8ff7d04109f17ff1c67973e92947e08b48671
