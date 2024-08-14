import React, { useEffect, useState } from "react";

function UseEffect01() {
  const [date, setDate] = useState(0);

  useEffect(() => {
  setTimeout(() => {
    const nowDate = new Date();
    const DateNow = nowDate.toLocaleTimeString();
    setDate(DateNow);
  }, 1000);
  }, [date]);

  

  return (
    <>
      <div>
        <h1>Date: {date}</h1>
      </div>
    </>
  );
}

export default UseEffect01;
