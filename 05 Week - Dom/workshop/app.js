// # TODO list

// 1. Sa afisam o lista de TODO items
// 2. Sa permitem adaugarea unui TODO
// 3. Sa stergem un TODO
// 4. Sa bifam un toda - este complet


//  1. Sa afisam o lista de TODO items
// <ul> <li>item 1 </li>   </ul>
var todoList = ["cumparaturi", "plata facturi", "scoate cainele afara"];

var ulHTML = document.createElement("ul");
for (var i = 0; i < todoList.length; i++) {
    var item = todoList[i];
    var itemHTML = document.createElement("li");
    itemHTML.innerHTML = item;
    ulHTML.appendChild(itemHTML)
}
// il punem in body
document.body.appendChild(ulHTML)

// 2. Sa permitem adaugarea unui TODO
// avem nevoie de un input si un button
var toDoInput = document.getElementById("to-do-input");
var toDoButton = document.getElementById("to-do-button");

toDoButton.onclick = function () {
    console.log("se da click!")
    console.log (toDoInput.value)
}













