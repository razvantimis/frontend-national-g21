

// Facem o functie asyncrona care "returneaza" un rezultat

// function getResultA() {
//   // cum putem executa asyncron acest cod
//   let result;
//   setTimeout(function () {
//     // cod de aici se executa async
//     result = 10 + 232;
//     console.log('sa executat functie async din getResultA')
//   }, 0)
//   return result;
// }
// console.log("getResult() = ", getResultA());


function getResultA(callbackResult) {
  // cum putem executa asyncron acest cod
  setTimeout(function () {
    // cod de aici se executa async
    const result = 10 + 232;
    console.log('sa executat functie async din getResultA')
    // aici deja result este calculat
    callbackResult(result) // apelam functia callback cu valoare calculata
  }, 0)
  // return result; nu ne ajuta sa returnam in cazul codului async
  // pentru ca return se executa inaite de codul async
}
// console.log("getResult() = ", getResultA());
getResultA(function (resultA) {
  console.log("result de la getResultA = ", resultA);
})

// cand avem cod asyncron, avem nevoie de un callback ca scoate rezultatul din functie