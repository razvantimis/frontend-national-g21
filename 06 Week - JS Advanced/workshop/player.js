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
    player.style.top = `${oldTop + 10}px`
  }
  if (event.code === "ArrowRight") {
    let oldLeft = parseInt(player.style.left) // daca style.ight nu exista avem NaN
    player.style.left = `${oldLeft + 10}px` // NaN + 12 => NaN
  }
});


// 3.  Un player nu poate iesi inafara gameContainer ( de la punctul 1)