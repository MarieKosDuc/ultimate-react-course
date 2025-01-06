import { useEffect, useState } from "react";

export default function Tips({ onTipChange, children, reset }) {
  const [tip, setTip] = useState(0);

  function handleTipChange(value) {
    setTip(value);
    onTipChange(value);
  }

  useEffect(() => {
    if (reset) {
      setTip(0);
      onTipChange(0);
    }
  }, [reset]);

  const satisfaction = [
    ["Dissatisfied", 0],
    ["Satisfied", 5],
    ["It was good", 10],
    ["Absolutely amazing!", 15],
    ["It was amazing", 20],
  ];

  return (
    <div>
      <label>{children}</label>
      <select value={tip} onChange={(e) => handleTipChange(Number(e.target.value))}>
        {satisfaction.map(([label, value]) => (
          <option value={value} key={value}>
            {label + " (" + value + "%)"}
          </option>
        ))}
      </select>
    </div>
  );
}
