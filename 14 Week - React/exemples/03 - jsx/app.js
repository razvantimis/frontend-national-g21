
const app = document.getElementById("app")

// versiune cu react

//Componenta Post

// fara jsx
function getPostCmpWithoutJSX() {

  return React.createElement("div", null,
    React.createElement('h1', null, "Title 1"),
    React.createElement('p', null, 'Continut post')
  )
}
// Cu jsx
function Post() {
  const postStyle = {
    border: '1px solid black',
    backgroundColor: 'red'
  }
  return (
    <div className="test" style={postStyle}>
      <h1>Title 1</h1>
      <p>Conuinut post</p>
    </div>
  )
}

ReactDOM.createRoot(app).render(<Post />)

