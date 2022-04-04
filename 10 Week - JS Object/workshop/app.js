import Car from './Car.js'

const car1 = new Car(); // se apeleaza functia constructor din clasa Car
const car2 = new Car();
const listCar = [car1, car2];

const addCarHtml = document.getElementById("addCarHtml");
addCarHtml.addEventListener("click", () => {
    const car = new Car();
    listCar.push(car);
})

// Sa ascultam la event de arrow right de la tastatura
document.addEventListener('keydown', function (event) {
  if (event.code === 'ArrowRight') {
    console.log('s-a apasat key right')
    listCar.forEach(car => {
        car.moveRight();
    })
  }
})