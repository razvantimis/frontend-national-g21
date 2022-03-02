// # TODO list

// 1. Sa afisam o lista de TODO items
// 2. Sa permitem adaugarea unui TODO
// 3. Sa stergem un TODO
// 4. Sa bifam un toda - este complet

function createTodo(text) {
    var todoHtml = document.createElement("li")
    todoHtml.innerText = text;
    todoHtml.addEventListener('click', function(event){
        todoHtml.parentElement.removeChild(todoHtml);
    });

    var inputCheckbox = document.createElement('input');
    inputCheckbox.type = 'checkbox'
    todoHtml.appendChild(inputCheckbox)

    return todoHtml;
}

//  1. Sa afisam o lista de TODO items
// <ul> <li>item 1 </li>   </ul>
var todoList = ["cumparaturi", "plata facturi", "scoate cainele afara", "apa"];

var ulHTML = document.createElement("ul");
for (var i = 0; i < todoList.length; i++) {
    var todoValue = todoList[i];
    var itemHTML = createTodo(todoValue) // scope global + hoisting
    // solutia este sa folosim let
   
    ulHTML.appendChild(itemHTML)
    itemHTML.onclick = function () {
        // daca folosim variabile itemHTML atunci
        // valoarea itemHTML va fi tot timpul ultimul element li create
        console.log("S-a dat click pe", itemHTML) // event.target - pe cine sa dat click
        ulHTML.removeChild(itemHTML)
    }

}
// il punem in body
document.body.appendChild(ulHTML)

// 2. Sa permitem adaugarea unui TODO
// avem nevoie de un input si un button
var toDoInput = document.getElementById("to-do-input");
var toDoButton = document.getElementById("to-do-button");

toDoButton.onclick = function () {
    console.log("se da click! valoare din input este", toDoInput.value)
    // var itemNou = document.createElement("li")
    // itemNou.innerHTML = toDoInput.value
    // itemNou.onclick = function (event) {
    //     console.log("S-a dat click pe item", event.target)
    //     ulHTML.removeChild(event.target)
    // }
    var itemNou = createTodo(toDoInput.value)
    ulHTML.appendChild(itemNou)
}


// 3. Sa stergem un TODO
// doar pentru primul li
// var firstLi = document.querySelector("ul > li")
// console.log(firstLi)
// firstLi.onclick = function () {
//     console.log("S-a dat click pe primul item")
//     ulHTML.removeChild(firstLi)
// }









