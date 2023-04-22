let numUser;
numPC;

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
    document.querySelector("h1").innerHTML = "Usuario Gana";
  } else {
    document.querySelector("h1").innerHTML = "PC Gana";
  }

  if (numUser === 2 && numPC === 1) {
    document.querySelector("h1").innerHTML = "Usuario Gana";
  } else {
    document.querySelector("h1").innerHTML = "PC Gana";
  }
  if (numUser === 3 && numPC === 2) {
    document.querySelector("h1").innerHTML = "Usuario Gana";
  } else {
    document.querySelector("h1").innerHTML = "PC Gana";
  }
}

1 > 3;
Piedra > tijera;
3 > 2;
Tijera > papel;
2 > 1;
Papel > Piedra;
