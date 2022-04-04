import Car from './Car.js'


const handleCarClick = (activCarLocal) => {
  console.log('sa dat click pe un car')
  for (const car of listCar) {
    console.log(car)
    if (car !== activCarLocal) {
       car.stopCar = true; // oprim toate masinile pe care nu am dat click
    }
  }

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
    listCar.forEach(car => {
      car.moveRight();
    })

  }
})