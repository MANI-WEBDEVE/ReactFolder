import { useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const num = new Array(30_000_000).fill(0).map((_, i) => {
  return {
    index: i,
    isMagical: i === 10_000_000 ,
  };
});

function App() {
  const [count, setCount] = useState(0);
  const [Number, setNumber] = useState(num);
  const magical = useMemo(() => Number.find(item => item.isMagical === true), [Number])
  // const magical = Number.find((item) => item.isMagical === true); //Exensive Computation
  // console.log(magical)
  return (
    <>
      <div>
        <span>Magical Number is {magical.index}</span>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => {
          setCount((count) => count + 1)
          if(count == 4){
            setNumber
              new Array(3_000_000).fill(0).map((_, i) => {
                return {
                  index: i,
                  isMagical: i === 1_000_000 ,
                };
              });
            console.log(setNumber)
            console.log(num.filter)
          }
          
          }}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
