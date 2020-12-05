import "./App.css";

function App() {
  return <div  data-test="component-app" className="App">
    <h1 data-test="counter-display"> The Counter is currently: </h1>
    <button data-test="increment-button">Increments Counter</button>
  </div>;
}

export default App;
