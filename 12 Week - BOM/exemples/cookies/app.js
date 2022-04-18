// Cookies / server session
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies
// Cookies se seteaza pe http/https pe domeniu
//  0. Cookies este un string de genul "key1=value1;key2=value2;"
/// 1. Se pun informati de dimensiuni mici ( limita 4kb )
//  2. Fiecare cookie are un expiration date
//  3. Noi putem accesa din javascript acest cookies daca nu sunt cu httpOnly 

// !! Pentru securitate maxima se foloseste cookies cu httpOnly


// Exemplu:
// wizzair.com => avem 3 cookies

// Un caz frecvent folosit este server session
// Cand ne logon pe un site se face sessiunea => servarul seteaza un seesion id pe cookies
// Este un mod prin care servarul stie cine sunteti


// Stateless vs Statefull

// Stateless - nu se pastreaza nicio informatie intre mai mult requesturi de http
// Statefull - opusul lui stateless iar pentru a pastra informatie intre mai multe requesturi folosim cookies

// Cum setam un cookie?

function setCookie() {
  document.cookie = "username=vladg32"
}

console.log(document.cookie); // asa citem

