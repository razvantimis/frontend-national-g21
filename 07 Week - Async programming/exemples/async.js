// quiz js
// f va fi function () { return 1; }
(function f(f) {
  return typeof f(); // typeof 1 => number
})(function () { return 1; });


// Ajax - Asynchronous JavaScript And XML
// Modalitate prin care noi putem face un http request
// https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX
// mai demult se folosea XMLHttpRequest
// es6 - 2015 sa introdus o noua functie - fetch
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

console.log('1. Executam codul nostru');
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(function (response) {
    // se executa asyncron
    console.log('2. Vin datele de la server');
    console.log(response);
  })
console.log('3. Dupa ce au venit datele');
// orice cod avem aici
// while(true){
//   console.log('------------') // va bloca pagina 
// }

// Care va fi ordinea de executie?
// 2 1 3
// 1 3 2 - oridinea corecta este 1 3 2
// 1 2 3

// Care ar fi dezavantajul daca JS au astepta pana se executa requestul?
// Atunci ar bloca pagina - user nu mai poate interactiona cu pagina pana nu se gata requestul

// Programarea asyncrona
// Javascript foloseste un singur thread pentru a executa codul
// Putem executa cu adevarat doua instructiuni in paralel? Nu
// Dar avem Non-blocking operation prin event loop

// Non-blocking operation - el anuma executia pana cand se eliberaza thread-ul
// Foloseste event loop si callback queue
// Instructiunile de cod se executa pe un thread
// Ordinea executie nu este garantata

// syncron
// fiecare instructiune se executa in ordinea in care le-am scris

// asyncron - codul ruleaza in paralel

