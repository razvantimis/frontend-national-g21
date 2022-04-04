// This se pierde in cazul unui addEventListener, in callback this va fi html element

class Car {
  constructor() {
    const carImg = document.createElement('img');

    this.stopCar = true;
    let thisCar = this; // this este car object
    // Avem nevoie de this de mai sus, adica de this din functia constructor
    // Facem o variabila in care putem this de mai sus
    carImg.addEventListener("click", function () { // se pierde this-ul
      console.log('this in callback', this); // this este element <img />
      console.log('thisCar =', thisCar)
      console.log("sa dat click", thisCar.stopCar)
      thisCar.stopCar = false;
    })

  }
}
// cu bind putem schimba this unei functii
class CarBind {
  constructor() {
    const carImg = document.createElement('img');
    carImg.src = "./car.svg";
    carImg.style.width = '100px';
    this.stopCar = true;

    const handleClick = function () { // va fi tot timpul this primit la prin parametru la bind
      console.log('this in callback', this); 
      console.log('thisCar =', this)
      console.log("sa dat click", this.stopCar)
      this.stopCar = false;
    }
    const handleClickBind = handleClick.bind(this);

    // Avem nevoie de this de mai sus, adica de this din functia constructor
    // Facem o variabila in care putem this de mai sus
    carImg.addEventListener("click", handleClickBind)
    document.body.appendChild(carImg);
  }
}


const car1 = new CarBind();


// arrow function
// Mostenesc this de mai sus
class CarArrowFn {
  constructor() {
    const carImg = document.createElement('img');
    carImg.src = "./car.svg";
    carImg.style.width = '100px';
    this.stopCar = true;


    // Avem nevoie de this de mai sus, adica de this din functia constructor
    carImg.addEventListener("click",  () => { // va fi tot timpul this de mai sus
      console.log('this car =', this)
      console.log("sa dat click", this.stopCar)
      this.stopCar = false;
    })
    document.body.appendChild(carImg);
  }
}


const car3 = new CarArrowFn();