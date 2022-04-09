
class Car {
  constructor(color, onCarClick) { // onCarClick este on callback function
    console.log('se creaza o noua masina')
    const carImg = document.createElement('img');
    carImg.src = "./car.svg";
    carImg.style.width = '100px';
    carImg.style.position = 'relative';
    carImg.style.top = '0';
    carImg.style.left = '0';
    carImg.style.backgroundColor = color;

    this.stopCar = true;
    carImg.addEventListener("click", () => {
      console.log("sa dat click", this.stopCar)
      this.stopCar = !this.stopCar;
      onCarClick(this); // restul masinilor le facem stopCar = true
    })


    this.carElement = carImg;

    document.body.appendChild(carImg);
  }

  moveRight() {
    if (this.stopCar == false) {
      const oldLeft = parseInt(this.carElement.style.left);
      this.carElement.style.left = oldLeft + 10 + 'px';
    }
  }

}



export default Car;