import React from "react";
import api from "../api/seriesData.json";
import SeriesCard from "./SeriesCard";

const NetCard = () => {
  return (
    <>
      <ul>
        {api.map((curElem) => {
            return  <SeriesCard key={curElem.key} curElem= {curElem}/>
        })}
      </ul>
    </>
  );
};

export default NetCard;
