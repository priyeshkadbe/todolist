import { FC } from "react";

interface Props {
  children:React.ReactNode
}

function HomePage({children}:Props) {
  return (
    <div className="bg-[#0F1425] h-screen ">
      <div className="flex justify-center items-center p-4 md:p-6">
        <div className="w-full bg-[#2A3244] rounded-sm md:rounded-lg p-2  md:w-2/3 h-1/2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
