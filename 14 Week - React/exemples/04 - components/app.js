// Componenta facuta cu o clasa
// metoda render este obligatorie si trebui sa returneaza UI ( adica jsx- html)
class PostClass extends React.Component {
  
  render() {

    return (
      <div className="class-post">
        <h1>{this.props.title}</h1>
        <p>Conuinut post</p>
      </div>
    )
  }
}


//Function Componenta Post + props
function Post(props) {
  const postStyle = {
    border: '1px solid black',
    backgroundColor: 'red'
  }
  if(props.callbackFn){
    props.callbackFn();
  }
  return (
    <div className="test" style={postStyle}>
      <h1>{props.title}</h1>
      <p>Conuinut post</p>
    </div>
  )
}

function App() {

  return (
    <div>
      <Post title="Title 1" age={34} callbackFn={() => { console.log('apeleaza') }} />
      <PostClass title="Title 2" />
      <Post title="Title 3" />
      <PostClass title="Title 4" />
      <Post title="Title 5" />
    </div>
  )
}










const app = document.getElementById("app")
ReactDOM.createRoot(app).render(<App />)

