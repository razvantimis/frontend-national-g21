
// CRUD - create, read, update, delete

// R - Read html elements
// Cum putem aducem in javascript un element din html?
// Cautam dupa un element html
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement
function readHtmlElements() {
  var sectionHTMLById = document.getElementById("firstSectionId");
  console.log(sectionHTMLById)

  var sectionHTMLByClass = document.getElementsByClassName('firstClass') // un array de elemente
  console.log(sectionHTMLByClass[0])

  // primul element gasit dupa regula de css selector
  var sectionHTMLByQuery = document.querySelector('#firstSectionId.firstClass');
  console.log(sectionHTMLByQuery)

  // cautam dupa toate elementele
  const sections = document.querySelectorAll('section'); // un array de elemente
  console.log(sections);
}
// C - create html elements
function createHtmlElments() {
  // il creaza doar in memoria js
  var myElement = document.createElement('h3');

  // putem pune continut
  // myElement.textContent = "Hello world"
  myElement.innerHTML = "<b>Hello</b> world"

  // inline style
  myElement.style.backgroundColor = "red";
  myElement.style.padding = "10px";

  // adaugam myElement in header ca si children
  // cautam element unde dorim sa adaugam
  var headerHtml = document.querySelector('header');
  headerHtml.appendChild(myElement)
  // in body
  document.body.appendChild(myElement)
}

// Update
function updateHtmlElements() {
  var headerHtml = document.querySelector('header');

  // inline style
  headerHtml.style.color = 'red'

  // add class
  headerHtml.classList.add('curs');
  headerHtml.classList.remove("curs");

  // replace de content
  // headerHtml.textContent = "" // stergem tot din interior la header
  headerHtml.innerHTML = "<nav> <ul> <li> item 1</li> </ul> </nav>"
}

// updateHtmlElements();

// Delete
// Se sterge doar elementul selectat
// De unde stergm si ce stergem
function deleteHtmlElements() {
  var headerHtml = document.querySelector('header'); // vom sterge headr-ul
  // de unde stergem? din <body>

  // ca sa stergem avem nevoie de parintele elementului + elementul care va fi sters
  // document.body.removeChild(headerHtml);

  // cum aflam parintele? headerHtml.parentElement
  headerHtml.parentElement.removeChild(headerHtml)

}

// deleteHtmlElements()

// Events

function eventsHtml() {

  var firstImg = document.querySelector('img');

  // folosind prop onclick
  firstImg.onclick = function () {
    console.log('onclick: Sa dat click pe imagine')
  }

  firstImg.addEventListener('click', function (event) {
    // primi un parametru event - care va descrie evenimentul care sa intampla
    console.log(event);
    // event.target - este elementul pe care sa facut click
    console.log('addEventListener: Sa dat click pe imagine')
  })
}





// Safe DOM Manipulation
// Se poate intampla ca elementul din pagina html sa nu fie parsate de browser , deci nu exista
// Daca putem script de js in header atunci el se va executa inaite sa se incarce elementele din pagina html

document.addEventListener("DOMContentLoaded", function (event) {
  eventsHtml();
});