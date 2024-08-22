import { useEffect, useMemo, useState } from "react";

function ExpensiveComponent() {
  const [Counte, setCounte] = useState(0);

  const sum = () => {
    console.log("Calculating sum...");
    let i = 0;
    for (let i = 0; i <= 1000000000; i++) {
      i = i + 1;
    }
    return i;
  };

 
  const total = useMemo(() => {
    return sum();
  }, []);
  

  const total2 = useMemo(() => {
    console.log("rebder")
    return setCounte(Counte + 0);
  }, []);
  return (
    <>
      <p> sum: {total}</p>
      <p>counter : {Counte}</p>
      <button onClick={total2}>Click</button>
    </>
  );
}

function UseMemo() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <ExpensiveComponent />
        <h1>Counter Component</h1>
        <p> the count value is {count}</p>
        <button
          className="text-2xl px-4  py-2 border-black bg-cyan-800/50"
          onClick={() => setCount(count + 1)}
        >
          Increament
        </button>
      </div>
    </>
  );
}

export default UseMemo;
