import { useEffect, useState } from 'react';
import './App.css'

// Orice functie componenta se executa de fiecara data cand se schimba statul
function Clock() {
  let [secunde, setSecunde] = useState(55);
  let [minute, setMinute] = useState(59);
  let [hour, setHour] = useState(0);


  // De cate ori se executa setInterval? O singura data
  console.log('sa executa functia Clock')
  useEffect(() => {
    console.log('se apeleaza doar odata ------------')
    setInterval(
      () => {
        console.log("se executa in fiecare secunda")
        setSecunde(secunde + 1);

        if (secunde == 60) {
          setMinute(minute + 1);
          setSecunde(0);
        }

        if (minute == 60) {
          setHour(hour + 1);
          setMinute(0);
        }
      },
      1000 // avem in milisec
    )
  }, [])
  // useEffect(() => {
  //   console.log('se apeleaza doar daca se schimba secunde ------------')
  // }, [secunde])


  return (
    <div className="clock"
    // onClick={function () {
    //   console.log('click on clock')
    //   setHour(hour + 1)
    //   setMinute(50)
    //   setSecunde(secunde + 1)
    // }}
    >
      <span>{hour}</span> :
      <span>{minute}</span> :
      <span>{secunde}</span>
    </div>
  )
}

function App() {

  return (
    <div className="App">
      <Clock />
    </div>
  )
}

export default App


/* 
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

// Task2: Sa incrementam secundele, incepem de la zero, 
// iar dupa ce trece o secunda sa cresca cu 1
// Task3: Sa crestem minutele iar secundele vor incepe de la zero
// Task3: Sa crestem orele iar minutele vor incepe de la zero

setInterval(
  () => {
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
*/