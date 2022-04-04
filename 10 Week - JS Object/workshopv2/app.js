import Car from './Car.js'
let activeCar = null;


const handleCarClick = (activCarLocal) => {
  console.log('sa dat click pe car1')
  activeCar = activCarLocal
}

const car1 = new Car('red', handleCarClick); // se apeleaza functia constructor din clasa Car
const car2 = new Car('blue', handleCarClick);
const listCar = [car1, car2];

const addCarHtml = document.getElementById("addCarHtml");
addCarHtml.addEventListener("click", () => {
  const car = new Car('green', handleCarClick);
  listCar.push(car);
})

// Sa ascultam la event de arrow right de la tastatura
document.addEventListener('keydown', function (event) {
  // sa cautam masina pe care sa dat click ultima data si stopCar este true
  // ori cand se da click pe o masina sa setam activCar
  if (event.code === 'ArrowRight') {
    console.log('s-a apasat key right')
    // listCar.forEach(car => {
    //     car.moveRight();
    // })
    if (activeCar) {
      activeCar.moveRight();
    }
  }
})