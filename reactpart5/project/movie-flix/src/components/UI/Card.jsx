import React from "react";

const Card = ({ data }) => {
    const { Poster, imdbID,Title } = data;
    return (
        <li className="m-12  ">
            <div className={`p-0 border border-gray-600/50 shadow-2xl hover:shadow-orange-600/40 transition-all hover:duration-300 rounded-lg`}>

                <div className="p-2 hover:z-10 hover:shadow-orange-500/50 hover:shadow-xl ">
                    <img src={Poster} alt="" className="object-cover w-[300px] h-[300px]" />
                </div>
                <div className="w-full flex items-center justify-center bg-orange-600 text-black">
                    <button className="p-2 font-bold font-2xl rounded-lg">Watch</button>
                </div>

            </div>
        </li>
    );
};

export default Card;
