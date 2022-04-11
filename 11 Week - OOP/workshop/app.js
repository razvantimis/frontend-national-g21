import Player from './Player.js'
import Monster from './Monster.js'

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

const monsterList = []
for(let i = 0; i < 10; i++){
    const monster = new Monster(gameContainer);
    monsterList.push(monster);
}

monsterList[3].moveRight();
monsterList[3].moveRight();
monsterList[3].moveRight();