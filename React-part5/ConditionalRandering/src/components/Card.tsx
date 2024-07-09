import React from "react";

type CardProps = {
  movieName: string;
  img: string;
  para: string;
};

const Card: React.FC<CardProps> = (props) => {
  const age = 18;

  const canWatch = (): String => {
    if (age >= 18) return "watch now";
    return "Not Watching";
  };

  return (
    <>
      <h1>{props.movieName}</h1>
      <img style={{width:'120px'}} src={props.img} alt="" />
      <p>{props.para}</p>
      <button>{canWatch()}</button>
    </>
  );
};

export default Card;
