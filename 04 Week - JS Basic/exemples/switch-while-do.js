// switch

var age = 14;

var myStatus = (age >= 18) ? 'adult' : 'minor';

if (myStatus === 'adult') {
  console.log('cod de adult')
} else if (myStatus === 'minor') {
  console.log('cod de minor')
} else {
  // caz default daca myStatus are alte valori
}

var age = 14;

var myStatus = (age >= 18) ? 'adult' : 'minor';

switch (myStatus) {
  case 'adult':
    console.log('cod de adult');
    break; // oprim switch-ul aici
  case 'minor':
    console.log('cod de minor');
    break;
  default:
  // este ca un else dupa un sir de if else
}

// while

// ne ajuta sa repetam o bucata de cod de un numar ne stiut de ori
// while( conditie ) { cod executat }
// Sa afisam cifrele unui numar
var number1 = 12345678;
while (number1 > 0) {
  console.log(number1 % 10); // afisam ultima cifra
  number1 = Math.floor(number1 / 10); // scoate ultima cifra din numar
  // Math.floor luam partea intreaga
}
// trebuie sa avem conditie de oprire, conditia din while sa devina falsa


// do while
// face verificare la final
var number1 = 0;
do {
  console.log(number1 % 10); // afisam ultima cifra
  number1 = Math.floor(number1 / 10); // scoate ultima cifra din numar
} while (number1 > 0)

// Afisam cifrele din numar cat timp sunt pare
// Ne optim la prima cifra impara
var number1 = 23313332468;
var cifra;
do {
  cifra = number1 % 10;
  console.log('cifra', cifra);
  number1 = Math.floor(number1 / 10); // scoate ultima cifra din numar
} while (cifra % 2 == 0)
// se va afisa 8 6 4 2 3 