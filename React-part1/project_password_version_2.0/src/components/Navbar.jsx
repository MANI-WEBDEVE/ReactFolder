import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-700 text-white ">
      <div className=" myContainer flex justify-between px-4 py-5 h-16 items-center">
        <div className="logo font-bold text-2xl ">
          <span className="text-green-500"> &lt;</span>
          Pass
          <span className="text-green-500">Mag/&gt;</span>
        </div>
        {/* <ul>
          <li className="flex gap-4">
            <a className="hover:font-bold hover:text-black" href="">
              Home
            </a>
            <a className="hover:font-bold hover:text-black" href="">
              Blog
            </a>
            <a className="hover:font-bold hover:text-black" href="">
              Contact
            </a>
            <a className="hover:font-bold hover:text-black" href="">
              Service
            </a>
          </li>
        </ul>  */}
        {/* <span> <img src="icon/wired-flat-1331-repository.png" alt="" width="54px"/>GitHub</span> */}
        <a href="https://github.com/MANI-WEBDEVE" target="_blank">
          <span className="flex justify-center items-center  border-black-300 rounded-full px-2 py-1  bg-black  border-black hover:bg-white hover:text-black font-bold">
            <lord-icon
              className="w-44"
              src="https://cdn.lordicon.com/fzgrewpn.json"
              trigger="hover"
            ></lord-icon>
            GitHub
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
