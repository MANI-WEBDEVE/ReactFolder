import React, { useState } from "react";
import Countmemo from "./Countmemo";

export default function ReactMemo() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="h-[100vh ] w-full bg-blue-700/50 text-white flex flex-col items-center justify-center gap-2 mt-2">
        <h1 className="text-2xl font-semibold"> {count}</h1>
        <div className="flex items-center justify-center border-none ">
          <button
            className="p-2 rounded-lg bg-green-700/40 text-xl font-bold"
            onClick={() => setCount(count + 1)}
          >
            increment
          </button>
        </div>
      <Countmemo/>
      </div>
    </>
  );
}
 