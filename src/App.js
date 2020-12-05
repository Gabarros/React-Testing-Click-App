import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div data-test="component-app" className="App">
      <h1 data-test="counter-display">
        {" "}
        The Counter is currently: <span data-test="count">{count}</span>{" "}
      </h1>
      <button data-test="increment-button" onClick={() => setCount(count + 1)}>
        Increments Counter
      </button>
    </div>
  );
}

export default App;
