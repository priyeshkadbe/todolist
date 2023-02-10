import { FC } from "react";

function MetaMaskNotFound() {
  return (
    <div className="bg-[#0F1425] h-screen flex justify-center items-center">
      <h1 className="text-3xl text-gray-100">
        Please Install Metamask and reload the browser
      </h1>
    </div>
  );
}

export default MetaMaskNotFound;
