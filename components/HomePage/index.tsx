import { FC } from "react";

interface Props {
  children:React.ReactNode
}

function HomePage({children}:Props) {
  return (
    <div className="bg-[#0F1425] h-screen snap-none">
      <div className="flex justify-center items-center p-4 md:p-6">
        <div className="w-full bg-[#2A3244] rounded-sm md:rounded-lg p-2  md:w-2/3 h-1/2">
          <form className="flex items-center justify-center mt-2 px-2">
            <input
              className="rounded-md w-full p-2 border-none outline-none bg-[#0F1425] text-white focus:outline-1 focus:outline-gray-500"
              placeholder="Add New Task..."
            />
            <button className="text-gray-200 text-md cursor-pointer ml-6  bg-[#1db45a] px-6 py-2 rounded-md md:rounded-lg hover:text-gray-50">
              Add
            </button>
          </form>
          {children}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
