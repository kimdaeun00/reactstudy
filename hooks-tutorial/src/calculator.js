import React, {
  useState,
  useMemo,
  useCallback,
  useRef,
  useReducer,
} from "react";

const Calculator = () => {
  const [numbers, setNumbers] = useState({ first: 0, second: 0, third: 0 });

  const onClick = (e, n) => {
    const key = e.target.name;
    const nextnumbers = {
      ...numbers,
    };
    setNumbers(nextnumbers);
  };

  const checkSum = (numbers) => {
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum;
  };

  const sum = () => checkSum();
  return (
    <div>
      <div>
        <h2>{numbers.first}</h2>
        <button name="first" onClick={onClick}>
          +1
        </button>
        <h2>{numbers.second}</h2>
        <button name="second" onClick={onClick}>
          +1
        </button>
        <h2>{numbers.third}</h2>
        <button name="third" onClick={onClick}>
          +1
        </button>
      </div>
      <div>
        <br />
        <button onClick={checkSum}>합 계산</button>
        <br />
        <b>합 : {sum}</b>
      </div>
    </div>
  );
};

export default Calculator;
