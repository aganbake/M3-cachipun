let numUser = 0,
  numPC = 0,
  puntosUser = 0,
  puntosPC = 0,
  initial = 0;
let partidas = prompt("Ingrese el número de partidas");

function game() {
  let randomN = Math.floor(Math.random() * 3) + 1;
  document
    .querySelector("#imgPC")
    .setAttribute("src", "assets/images/" + randomN + ".png");
  numPC = randomN;
}
function piedra() {
  document.querySelector("#imgUser").setAttribute("src", "assets/images/1.png");
  numUser = 1;
  ganador();
}
function papel() {
  document.querySelector("#imgUser").setAttribute("src", "assets/images/2.png");
  numUser = 2;
  ganador();
}
function tijera() {
  document.querySelector("#imgUser").setAttribute("src", "assets/images/3.png");
  numUser = 3;
  ganador();
}

function ganador() {
  if (numUser === 1 && numPC === 3) {
    puntosUser++;
  } else if (numUser === 2 && numPC === 1) {
    puntosUser++;
  } else if (numUser === 3 && numPC === 2) {
    puntosUser++;
  } else if (numUser === numPC) {
  } else {
    puntosPC++;
  }
  initial++;
  if (initial == partidas) {
    check();
  }
}

function check() {
  for (let i = 0; i < partidas; i++) {
    if (puntosUser > puntosPC) {
      document.querySelector(
        "h2"
      ).innerHTML = `Usuario gana con ${puntosUser} puntos`;
    } else if (puntosUser === puntosPC) {
      document.querySelector("h2").innerHTML = "Empate";
    } else {
      document.querySelector("h2").innerHTML = `PC gana con ${puntosPC} puntos`;
    }
  }
  document.querySelector("#piedra").disabled = true;
  document.querySelector("#tijera").disabled = true;
  document.querySelector("#papel").disabled = true;
  document.querySelector("#reiniciar").removeAttribute("hidden");
}

function reinicia() {
  window.location.href = "index.html";
}
