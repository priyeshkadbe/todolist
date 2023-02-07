import { FC } from "react";

interface Props {
  children:React.ReactNode
}

function HomePage({children}:Props) {
  return (
    <div className="bg-[#0F1425] h-screen snap-none">
      <div className="flex justify-center items-center p-4 md:p-6">
        <div className="w-full bg-[#2A3244] rounded-sm md:rounded-lg p-2 md:w-2/3 h-1/2">
          {/* <h1 className="text-white">HomePage</h1> */}
          <div className="py-3 text-[#7d99e9]">YOUR TASKS</div>
          <form className="flex items-center justify-center">
            <input
              className="rounded-[10px] w-full p-[10px] border-none outline-none bg-[#0F1425] text-white mb-[10px]"
              placeholder="Add New Task..."
              // take input from the form here
            />
            <button className="text-gray-200 text-xl cursor-pointer ml-6 mb-3 bg-[#044B11] px-4 py-2 rounded-sm md:rounded-lg hover:bg-[#6cd97e]">
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
