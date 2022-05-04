
//Function Componenta Post + props
function Post(props) {
  return (
    <div className="test">
      <h1>{props.title}</h1>
      <p>Conuinut post</p>
    </div>
  )
}
// daca am face <form> avem onSubmit
function FormPost() { // conventia pascalcase
  // const [value, setValue] = React.useState('');
  // document.addEventListener('scroll') se poate face
  return (
    <div>
      <div>User a scris {value}</div>
      <input type='text'
        onChange={(event) => {
          console.log(event.target.value);
          // setValue(event.target.value)
        }}
      ></input>
      <button
        onClick={() => {
          console.log('sa dat click')
        }}
      >Post</button>
    </div>
  )
}


function App() {
  return (
    <div>
      <FormPost />
      <Post
        title="Title 1"
      />
    </div>
  )
}



const app = document.getElementById("app")
ReactDOM.createRoot(app).render(<App />)

