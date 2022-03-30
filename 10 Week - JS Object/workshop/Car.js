class Car {
  constructor() {
    console.log('se creaza o noua masina')
    const carImg = document.createElement('img');
    carImg.src = "./car.svg";
    carImg.style.width = '100px';
    carImg.style.position = 'relative';
    carImg.style.top = '0';
    carImg.style.left = '0';

    this.carElement = carImg;

    document.body.appendChild(carImg);
  }

  moveRight() {
    const oldLeft = parseInt(this.carElement.style.left);
    this.carElement.style.left = oldLeft + 10 + 'px';
  }

}

export default Car;