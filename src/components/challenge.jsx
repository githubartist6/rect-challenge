import { useState } from "react";
import "./challenge.css"

export function Challenge() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  const Increment = () => {
    setCount(count + inputValue)
  }

  const Decrement = () => {
    setCount(count - inputValue)
  }

  const Reset = () => {
    setCount(0)
    setInputValue(0)
  }

  const Inputvaluechange = (e) => {
    setInputValue(Number(e.target.value))
  }

  return (
    <>
      <h1 className="challenge">challenge</h1>
      <div className="container-box">
        <p>Count: {count}</p>
        <label htmlFor="number">Increment & Decrement value</label>
        <input
          id="number"
          type="number"
          value={inputValue}
          onChange={Inputvaluechange}
        />
        <div className="button-box">
          <button onClick={Increment} disabled={count >= 100}>Increment</button>
          <button onClick={Decrement} disabled={count <= 0}>Decrement</button>
          <button onClick={Reset}>Reset</button>
        </div>
      </div>
    </>
  );
}
