import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-violet-900 text-white py-3">
      <div className="logo">
        <span className="font-bold text-xl mx-8">ITASK</span>
      </div>
      <ul className="flex gap-11 mx-9">
        <li className="hover:cursor-pointer hover:font-bold ">ITask </li>
        <li className="hover:cursor-pointer hover:font-bold ">Your Task</li>
      </ul>
    </nav>
  );
};

export default Navbar;
