import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          <Link to='/'>
          Info-Seputar-Indonesia
          </Link>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <Link to='/pahlawan'
              className="text-gray-800 hover:text-gray-400 duration-500"
            >
              Pahlawan
            </Link>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <Link to='/berita'
              className="text-gray-800 hover:text-gray-400 duration-500"
            >
              Berita Terbaru
            </Link>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <Link to='/film'
              className="text-gray-800 hover:text-gray-400 duration-500"
            >
              Film Populer
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
