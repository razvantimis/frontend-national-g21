//  Digital Timer
// 1. Vream sa afisam un timer in browser, va incepe cu 00:00:00
// 2. Sa se faca update in real time ( la fiecare secunda )

// Task1: Sa definim in html ca va arata acest timer + acces in js 


const hourHtml = document.getElementById('hour');
const minuteHtml = document.getElementById('minute');
const secundeHtml = document.getElementById('secunde');


console.log(hourHtml)
console.log(minuteHtml)
console.log(secundeHtml)

function addZero(value) {
  if (value < 10) {
    return "0" + value
  } // daca folosim return in if, nu mai trebuie else
  return value;
  // sau asa
  // return value < 10 ? "0" + value : value
}

// minuteHtml.innerHTML = '10'

// Task2: Sa incrementam secundele, incepem de la zero, 
// iar dupa ce trece o secunda sa cresca cu 1
// Task3: Sa crestem minutele iar secundele vor incepe de la zero
// Task3: Sa crestem orele iar minutele vor incepe de la zero
let secunde = 55;
let minute = 59;
let hour = 0;
setInterval(
  function () {
    console.log("se executa in fiecare secunda")
    secunde = secunde + 1;

    if (secunde == 60) {
      minute = minute + 1;
      secunde = 0;
    }

    if (minute == 60) {
      hour = hour + 1;
      minute = 0;
    }

    secundeHtml.innerHTML = addZero(secunde);
    minuteHtml.innerHTML = addZero(minute);
    hourHtml.innerHTML = addZero(hour);
  },
  1000 // avem in milisec
)