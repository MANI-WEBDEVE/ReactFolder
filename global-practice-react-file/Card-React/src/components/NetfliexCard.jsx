import Series from "./Series";
import api from "../api/card.json";

import React from "react";

const NetfliexCard = () => {
  return (
      <>
        <h1>Movie List</h1>
      <div className="h-[100vh] w-[82vw] m-10 flex flex-wrap ">
      <div className="list-none flex justify-center items-center   gap-4   w-[80vw] flex-wrap">
        <ul className="flex gap-4 items-center justify-center  border-2 border-black ">
          {api.map((curElem) => {
            return <Series key={curElem.id} data={curElem} />;
          })}
        </ul>
      </div>
    </div>
      </>
  );
};

export default NetfliexCard;
