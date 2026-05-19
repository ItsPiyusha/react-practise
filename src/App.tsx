import { useState } from 'react'
import "./App.css";
import {
  square,
  sumOfSquares,
  sumOfSquaresWithcallback,
} from "./utils/math";


function App() {
  const [count, setCount] = useState<number>(0);

  const [firstNumber, setFirstNumber] = useState<number>(0);
  const [secondNumber, setSecondNumber] = useState<number>(0);

  const ans = sumOfSquaresWithcallback(
    firstNumber,
    secondNumber,
    square
  );
  

const squareAns = sumOfSquares(
  firstNumber,
  secondNumber
);


  return (
    <div className = "container">
      <h1>Counter App</h1>
      
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count -1)}>
        -
      </button>

      <button onClick={() => setCount(count +1)}>
        +
      </button>


            <h1>Sum of Squares</h1>

      <input
        type="number"
        placeholder="First Number"
        onChange={(e) =>
          setFirstNumber(Number(e.target.value))
        }
      />

      <br />
      <br />

      <input
        type="number"
        placeholder="Second Number"
        onChange={(e) =>
          setSecondNumber(Number(e.target.value))
        }
      />

      <h2>Answer: {ans}</h2>

    </div>
  )
}

export default App
