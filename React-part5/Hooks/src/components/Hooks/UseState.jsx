 import { useState } from "react";

export function UseState() {
  const [count, setCount] = useState(2);
    console.log('parent component')
  const handleClick = () => {
    setCount(() =>  {
        return  count + 1
    });
  };
  return (
    <>
      <section>
        <h1>{count}</h1>
        <button onClick={handleClick}>Click Increment</button>
        <ChildComponent count={count}/>
     
      </section>
    </>
  );
}

export const ChildComponent = ({count}) => {
    console.log("Childe Component");

    return (
        <>
            <h1>Child Component: {count}</h1>
        </>
    )
}
