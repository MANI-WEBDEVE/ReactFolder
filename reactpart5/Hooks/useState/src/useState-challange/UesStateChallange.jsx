import React, { useState } from "react";

function UesStateChallange() {
  const [increament, setIncreament] = useState(1);
  const [inputIncreament, setInputIncreament] = useState(1);
  const [lcount, setLcount] = useState([]);
  const handleLoop = () => {
    setLcount((pretask) => [...pretask, increament]);
  };

  return (
    <>
      <div>
        <p>count:{increament}</p>
        <input
          type="number"
          value={inputIncreament}
          onChange={(e) => setInputIncreament(e.target.value)}
        />
        <div>
          <button
            disabled={increament >= 100} 
            onClick={() => setIncreament(increament + Number(inputIncreament) ,handleLoop())}
          >
            increament
          </button>
          <button
            disabled={increament <= 0}
            onClick={() => setIncreament(increament - Number(inputIncreament))}
          >
            decrement
          </button>
          <button onClick={() => setIncreament(0)}>reset</button>
        </div>
        {lcount.map((curElm, index) => {
          return <p key={index}>{curElm}</p>;
        })}
      </div>
    </>
  );
}

export default UesStateChallange;
