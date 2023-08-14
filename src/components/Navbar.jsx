import React from "react";
import SearchIcon from "@mui/icons-material/Search";
const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div>
      <div className="flex justify-start items-center text-center">
        <h2 className="p-6 text-6xl font-semibold first-letter:text-blue-500 ">
          G<span className="text-[#EA4335]">o</span>
          <span className="text-yellow-300">o</span>
          <span className="text-blue-500">g</span>
          <span className="text-green-800">l</span>
          <span className="text-[#EA4335]">e</span>{" "}
        </h2>

        <input
          type="text"
          placeholder="Enter your text here......."
          className=" border-none  border-gray-900 p-3 shadow-md  rounded-2xl w-[50%] m-2"
        />
        <div className="flex h-10 w-10 bg-blue-700 text-center justify-center items-center rounded-md text-white shadow-md  shadow-blue-300">
          <SearchIcon className="flex justify-center items-center text-center  " />
        </div>
        <div className="flex justify-between ml-20">
          <label className="relative inline-flex items-center cursor-pointer" >
            <input type="checkbox" value="" className="sr-only peer" onClick={() => setDarkTheme(!darkTheme)} />
            <div className="w-11 h-6 bg-gray-200  dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Switch to {darkTheme ? 'Light' : 'Dark'} mode
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
