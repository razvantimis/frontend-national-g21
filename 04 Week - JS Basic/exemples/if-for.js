// if
// if ( expresie logica ) { code care va fi executa daca este expresia true}
var number1 = 10
if (number1 === 10) {
  console.log('number1 este 10')
}

// daca par este par sa afisam un msg
// number1 % 2 => rezultatul este 1 sau 0
var number1 = 10
if (number1 % 2 == 0) {
  console.log('number1 este par')
}
// daca avem o singura instructie
if (number1 % 2 == 0) console.log('number1 este par')


// for - ne ajuta sa repetam cod
// for(initializare; conditie logica de oprire; incrementare)
for (var index = 0; index < 10; index = index + 1) {
  console.log(index);
  // se repeta de 10 ori
}


var array3 = [10, 12, 33, 456, 25, 6, 7, 8]
// index++ este acelasi lucru cu index = index + 1
for (var index = 0; index < array3.length; index++) {
  console.log(array3[index])
}



var array3 = [10, 12, 33, 456, 25, 6, 7, 8]
// index++ este acelasi lucru cu index = index + 1
for (var index = 0; index < array3.length; index++) {
  if (array3[index] > 10) {
    console.log(array3[index])
  }
}


// afisam matrice
// 1 1 1 1
// 1 1 1 1
// 1 1 1 1
// 1 1 1 1

var result = "";
for (var index = 0; index < 4; index++) {
  for (var index2 = 0; index2 < 4; index2++) {
    console.log(index, index2)
    result = result + "1 "
  }
  // rand nou
  // \n este newline - ca si <br>
  result = result + "\n";
}
console.log(result);
