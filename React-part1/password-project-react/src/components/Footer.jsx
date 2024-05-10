import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-600 text-white flex flex-col justify-center items-center w-full">
      <div className="logo font-bold text-2xl ">
        <span className="text-green-500"> &lt;</span>
        Pass
        <span className="text-green-500">Mag/&gt;</span>
      </div>
      <div className="flex justify-center items-center font-semibold text-xl ">
        I
        <span className="mx-2 ">
          <lord-icon
            src="https://cdn.lordicon.com/biobqpgs.json"
            trigger="hover"
            colors="primary:#911710,secondary:#ffffff,tertiary:#c71f16,quaternary:#911710,quinary:#911710"
          ></lord-icon>
        </span>{" "}
        ManiWebDev
      </div>
    </div>
  );
};

export default Footer;
