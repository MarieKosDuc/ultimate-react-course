import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  return (
    <>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        ></input>
        <p>Step: {step}</p>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - 1)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + 1)}>+</button>
      </div>

      <DateCount step={step} count={count} />

      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={() => handleReset()}>Reset</button>
        </div>
      ) : null}
    </>
  );
}

function DateCount({ step, count }) {
  const today = new Date();
  const days = step * count;

  function addDays(date, days) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days);
    return newDate.toDateString();
  }

  return (
    <div>
      <p>
        <span>
          {count < 0
            ? `${-days} days from today was ${addDays(today, days)}`
            : ""}
        </span>
        <span>{count === 0 ? `Today is ${today.toDateString()}` : ""}</span>
        <span>
          {count > 0
            ? `${days} days from today is ${addDays(today, days)}`
            : ""}
        </span>
      </p>
    </div>
  );
}

export default App;
