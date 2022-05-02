

const app = document.getElementById("app")


// versiune cu DOM

function getPostCmpDOM() {
 
  const div = document.createElement('div');

  const title = document.createElement('h1');
  title.innerHTML = "Title 1"

  const content = document.createElement('p');
  title.innerHTML = "Continut 1"
  
  div.appendChild(title);
  div.appendChild(content);

  return div;
}
// versiune cu react

//Componenta Post

function getPostCmp() {
 
  return React.createElement("div", null,
    React.createElement('h1', null, "Title 1"),
    React.createElement('p', null, 'Continut post')
  )
}

const post = getPostCmp()
ReactDOM.createRoot(app).render(post)

