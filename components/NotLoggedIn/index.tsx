import { FC } from "react";

interface Props {
  children: React.ReactNode;
}

function NotLoggedIn() {
  return (
    <div className="bg-[#0F1425] h-screen flex justify-center items-center">
      <h1 className="text-3xl text-gray-100">
       Please connect to Metamask to access your tasks
      </h1>
    </div>
  );
}

export default NotLoggedIn;
