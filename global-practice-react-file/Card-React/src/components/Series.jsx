import React from "react";

const Series = ({ data }) => {
  const { name, URI, price, description, rating, category, watchNow } = data;

  return (
    <>
      <li>
        <img src={URI} alt="" className="w-[188px] h-[296px] rounded-lg" />
        <h1 className="text-xl font-bold m-2 text-center">{name}</h1>
        <div>
          <p className="text-opacity-90 font-thin text-[11px]">
            
            Summery: {description}
          </p>
          <p className="text-opacity-90 font-bolder text-[16px]">
            Category: {category}
          </p>
        </div>
        <div>
          <h5>Rating: {rating}</h5>
          <h6>Price: {price} </h6>
        </div>
        <a href={watchNow} target="_blank">
          <button>Watch Now</button>
        </a>
      </li>
    </>
  );
};

export default Series;
