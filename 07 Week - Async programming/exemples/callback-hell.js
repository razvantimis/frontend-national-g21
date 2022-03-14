

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


function getResultA(fnReturnezResult) {
  // cum putem executa asyncron acest cod
  let result;
  setTimeout(function () {
    // cod de aici se executa async
    result = 10 + 232; // un calcul care dureaza mult
    console.log('sa executat functie async din getResultA')
    // aici deja result este calculat
    fnReturnezResult(result) // apelam functia callback cu valoare calculata
  }, 0)
  return result; // valoare ca va fi returna este undefined
  // return result; nu ne ajuta sa returnam in cazul codului async
  // pentru ca return se executa inaite de codul async
}
// console.log("getResult() = ", getResultA());
getResultA(function (resultA) {
  console.log("result de la getResultA = ", resultA);
  // pe linia 25 se apeleaza acesta functie
})

// cand avem cod asyncron, avem nevoie de un callback ca scoate rezultatul din functie

function getResultB(resultA, callBackResult) {
  setTimeout(function () { // cod async 
    const result = resultA + 1000;

    // sa il scoate inafara
    callBackResult(result);
  }, 0);
}

getResultB(2, function (resultB) {
  console.log(resultB)
})


// console.log(getResultB()); // functia ar trebui sa returneze o valoare
// daca avem setTimeout nu se poate pentru ca este cod async


getResultA(function (resultA) {
  getResultB(resultA, function (resultB) {
    console.log(resultB)
  })
})

// Promise
// Este promisiunea ca ne va da resultul
function getResultA() {
  // am vazut ca nu putem folosi direct return 
  return new Promise(function (peSucces, peErroare) {
    setTimeout(function () {
      const result = 10 + 232; // un calcul care dureaza mult
      peSucces(result);
    }, 0)
  })
}

getResultA()
  .then(function (resultA) {
    console.log(resultA)
  })


function getResultB(resultA) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () { // cod async 
      const result = resultA + 1000;
      // sa il scoate inafara
      resolve(result);
    }, 0);
  })
}

getResultA()
  .then(function (resultA) {
    return getResultB(resultA);
  })
  .then(function (resultB) {
    console.log(resultB)
  })

// es6
// async/await folosite defapt Promise doar este mai elegant la scriere
async function main() {
  const resultA = await getResultA();
  const resultB = await getResultB(resultA);

  console.log(resultB);
}