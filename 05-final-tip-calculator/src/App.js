import './App.css';
import { useState } from 'react';
import Bill from './Bill';
import Tips from './Tip';
import Sum from './Sum';

function App() {
  const [bill, setBill] = useState(0);
  const [tips, setTips] = useState({});
  const [reset, setReset] = useState(false);

  function calculateTotalTip(tip, index) {
    setTips((prevTotalTip) => {
      return {
        ...prevTotalTip,
        [index]: tip,
      };
    });
  }

  const totalTips = Object.values(tips).reduce((acc, tip) => acc + tip, 0);
  const averageTips = totalTips / Object.values(tips).length || 0;
  const totalTipsAmout = bill * averageTips / 100;
  const totalSum = bill + totalTipsAmout

  function handleReset() {
    setBill(0);
    setTips({});
    setReset((prev) => !prev);
  };

  return (
    <div className="App">
      <Bill onBillInput={setBill}/>
      <Tips onTipChange={(tip) => calculateTotalTip(tip, 1)} reset={reset}>How did you like the service? </Tips>
      <Tips onTipChange={(tip) => calculateTotalTip(tip, 2)} reset={reset}>How did your friend like the service? </Tips>
      <Sum totalSum={totalSum} bill={bill} totalTips={totalTipsAmout}/>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
