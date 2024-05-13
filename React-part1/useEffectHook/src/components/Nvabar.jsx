import { useEffect } from "react";
import React from "react";

const Nvabar = ({ color }) => {
  //Example of every render
  useEffect(() => {
    alert("i`m every render");
  });
  //Example of only One render
  useEffect(() => {
    alert("i`m run only on first render");
  }, []);
  //Example of Color change render
  useEffect(() => {
    alert("This is was colored change");
  }, [color]);
  //Example of functional render
  // useEffect(() => {
  //   return () => {
  //     alert("this is unmounted serev");
  //   };
  // }, []);

  return <div>just looking like a Wow {color}</div>;
};

export default Nvabar;
