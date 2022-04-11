class Player {

  static createElement(){
    let player = document.createElement("div")
    player.classList.add("player")

    return player;
  }

  constructor(container) {
    const playerDiv = Player.createElement();
    container.appendChild(playerDiv)

  }
}

export default Player;