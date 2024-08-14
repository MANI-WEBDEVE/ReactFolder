import React, { useEffect, useState } from "react";

const CleanUpFunctionUseEffect = () => {
  const [count, setCount] = useState(window.screen.width);

  // setInterval(() => {
  //     // setCount( prevCount + 1)
  //     setCount(count + 1 * 12 * 80081089)
  // }, 1000)

  // useEffect(() => {
  //    let timer =  setInterval(() => {
  //         setCount((preTask) => preTask + 1)
  //     }, 1000);
  //     return () => {
  //         console.log(clearInterval(timer))
  //     }
  // }, [])

    const widthFunc = () => {
        setCount(window.innerWidth)
    }

  useEffect(() => {
    window.addEventListener("resize",widthFunc);

    return () => {
      window.removeEventListener("resize",widthFunc);
    };
  });

  return (
    <>
      <div>
        <p>My Computer Screen Width </p>
        <div>{count}</div>
      </div>
    </>
  );
};

export default CleanUpFunctionUseEffect;
