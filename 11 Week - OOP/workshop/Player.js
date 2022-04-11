class Player {
  static createElement() {
    // nu avem acces la this
    let player = document.createElement("div");
    player.classList.add("player");
    player.style.top = "0px";
    player.style.left = "0px";

    return player;
  }

  constructor(container) {
    this.playerDiv = Player.createElement();
    container.appendChild(this.playerDiv);
  }

  moveDown() {
    // aici putem logica de move down
    const oldTop = parseInt(this.playerDiv.style.top);
    const newTop = oldTop + 10; // 10px , 20px
    if (newTop <= 370) {
      this.playerDiv.style.top = newTop + "px";
    }
  }

  moveLeft() {
    // aici putem logica de move left
    const oldLeft = parseInt(this.playerDiv.style.left);
    const newLeft = oldLeft - 10;
    if (newLeft >= 0) {
      this.playerDiv.style.left = newLeft + "px";
    }
  }

  moveRight() {
    // aici putem logica de move ri
    const oldLeft = parseInt(this.playerDiv.style.left);
    const newLeft = oldLeft + 10;
    if (newLeft <= 370) {
      this.playerDiv.style.left = newLeft + "px";
    }
  }

  moveUp() {
    // aici putem logica de move ri
    const oldTop = parseInt(this.playerDiv.style.top);
    const newTop = oldTop - 10; // 10px , 20px
    if (newTop >= 0) {
      this.playerDiv.style.top = newTop + "px";
    }
  }
}

export default Player;
