import Player from './Player.js'


const gameContainer = document.getElementById('game-container')

const player = new Player(gameContainer);

document.addEventListener("keydown", function (eventKeydown) {
  if (eventKeydown.code === "ArrowDown") {
    // console.log("keydown", eventKeydown)

    player.moveDown()
  }
  if (eventKeydown.code === "ArrowLeft") {
    player.moveLeft()
  }
  if (eventKeydown.code === "ArrowRight") {
    player.moveRight()
  }
  if (eventKeydown.code === "ArrowUp") {
    player.moveUp()
  }
}) 