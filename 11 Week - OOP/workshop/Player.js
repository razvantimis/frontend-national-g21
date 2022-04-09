class Player {
  constructor(container) {
    let player = document.createElement("div")
    player.classList.add("player")

    container.appendChild(player)

  }
}

export default Player;