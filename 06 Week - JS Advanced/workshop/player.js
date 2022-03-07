// 1.  Definiti un container de dimensiuni fixe ( de exemplu height: 400, width: 400) 
// unde puteti playerul - il numim gameContainer

// Avem in html un div pentru mapa jocurilui
// Un div pentru player 


// 2.  Player sa poate misca in toate directile ( incepeti doar cu o directie )
// Vom folosi tastatura - Arrow up, down,right,left
let player = document.querySelector(".player")
document.addEventListener("keydown", function (event) {
  console.log("event= ", event)
  if (event.code === "ArrowDown") {
    let oldTop = parseInt(player.style.top)
    if (oldTop < 370) {
      player.style.top = `${oldTop + 10}px`
    }
  }
  if (event.code === "ArrowRight") {
    let oldLeft = parseInt(player.style.left) // daca style.left nu exista avem NaN
    if (oldLeft < 370) {
      player.style.left = `${oldLeft + 10}px` // NaN + 12 => NaN
    }
  }
  // la tema faceti pentru restul directilor
});


// 3.  Un player nu poate iesi inafara gameContainer ( de la punctul 1)

// 4.  Adaugati abstacole, puneti cateva div-uri ( dimensiuni fixe cu anumita culoare) in gameContainer, pot fi random puse in mapa jocuri. 
// tips 
const obstaco = {
  left: Math.random() * 400, // asa generam nr random
  top: 10
}
const obstacolList = [obstaco]