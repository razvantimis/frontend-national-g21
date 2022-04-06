
export let activeCar = null;
class Car {
  #carElement;

  constructor(color) {
    console.log('se creaza o noua masina')
    const carImg = document.createElement('img');
    carImg.src = "./car.svg";
    carImg.style.width = '100px';
    carImg.style.position = 'relative';
    carImg.style.top = '0';
    carImg.style.left = '0';
    carImg.style.backgroundColor = color;

    // this.stopCar = true;
    // let thisCar = this; // this este car object - mai multe in this-problem.js
    carImg.addEventListener("click", () => {
      // console.log("sa dat click", this.stopCar)
      // this.stopCar = false;
      // this.stopCar = !this.stopCar;
      activeCar = this; // this este carul pe care sa dat click
    })


    this.#carElement = carImg;

    document.body.appendChild(carImg);                                         
  }

  moveRight() {
    // if (this.stopCar == false) {
    const oldLeft = parseInt(this.#carElement.style.left);
    this.#carElement.style.left = oldLeft + 10 + 'px';
    // }
  }

  moveLeft() {
    // if (this.stopCar == false) {
    const oldLeft = parseInt(this.#carElement.style.left);
    this.#carElement.style.left = oldLeft - 10 + 'px';
    // }
  }

}



export default Car;