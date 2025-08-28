import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(5);
  const addValue = () => {
    if (counter + 1 > 20) {
      alert("You can not go beyond 20!");
      return;
    }
    setCounter(counter + 1);
  };
  const removeValue = () => {
    if (counter - 1 < 0) {
      alert("You can not go below 0!");
      return;
    }
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Debottam's Counter App</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  );
}

export default App;
