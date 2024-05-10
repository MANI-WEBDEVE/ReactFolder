import { useContext } from "react";
import React from "react";
import { counterContext } from "../context/context";

const component1 = () => {
    const value =useContext(counterContext)
  return <div>{value.count}</div>;
};

export default component1;
