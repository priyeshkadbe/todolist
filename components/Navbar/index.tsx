import { FC } from "react";

interface Props {}

const Navbar = () => {
  return (
    <div className="w-full bg-[#1D2233] h-16">
      <div className="flex mx-auto justify-between  p-4 md:w-2/3">
        <h1 className="text-3xl text-gray-100">To-Do List</h1>
        <button className="bg-[#0152A6] text-gray-500 px-4 py-2 rounded-md hover:bg-[#0079f2]">
          connect
        </button>
      </div>
    </div>
  );
};

export default Navbar;
