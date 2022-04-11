class ElementMove {

  moveRight() {
    // aici putem logica de move right
    const oldLeft = parseInt(this.element.style.left);
    const newLeft = oldLeft + 10;
    if (newLeft <= 370) {
      this.element.style.left = newLeft + "px";
    }
  }

  moveDown() {
    // aici putem logica de move down
    const oldTop = parseInt(this.element.style.top);
    const newTop = oldTop + 10; // 10px , 20px
    if (newTop <= 370) {
      this.element.style.top = newTop + "px";
    }
  }

  moveLeft() {
    // aici putem logica de move left
    const oldLeft = parseInt(this.element.style.left);
    const newLeft = oldLeft - 10;
    if (newLeft >= 0) {
      this.element.style.left = newLeft + "px";
    }
  }

  moveUp() {
    // aici putem logica de move ri
    const oldTop = parseInt(this.element.style.top);
    const newTop = oldTop - 10; // 10px , 20px
    if (newTop >= 0) {
      this.element.style.top = newTop + "px";
    }
  }
}

export default ElementMove;