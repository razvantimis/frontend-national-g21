// State ramane intre re-renderul componentei - 
function Counter(props) {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
    props.updateCount(count + 1)
  }

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>
      Key1: {props.key1}
    </div>
  )

}
// Logica: Daca conterul ajunge la 5 , el dispare
//  Si apare in locul lui, trebuie sa platiti  

// App este parent si Counter este children
// Putem comunica intre ele folosind props
function App() {
  // sa aducem count aici in App - trebui sa comunica de la Counter catre App
  const [count, setCount] = React.useState(0);
  const updateCount = (value) => {
    console.log('ma apelat - updateCount')
    setCount(value)
  }

  // return (
  //   <div>
  //     {count > 5 ? (<span>Trebui sa platesti!!!</span>) : (
  //       <Counter updateCount={updateCount} key1={10} />
  //     )}
  //   </div>
  // )

  if (count < 5) {
    return (<Counter updateCount={updateCount} key1={count} />)
  }

  return (<span>Trebui sa platesti!!!</span>)
}
// putem avea oricate if-uri, switch etc in componenta



const app = document.getElementById("app")
ReactDOM.createRoot(app).render(<App />)

