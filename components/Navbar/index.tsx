import { FC, useState, useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";
import { ethers } from "ethers";
import {GOERLI_ID} from "../../utils/Constants"

interface Props {
  isConnected: boolean;
  setIsConnected: (value: boolean) => void;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  isError: boolean;
  setIsError: (value: boolean) => void;
  address: string;
  setAddress: (value: string) => void;
  chainId: number;
  setChainId: (value: number) => void;
  isMetamaskNotInstalled: boolean;
  setIsMetamaskNotInstalled: (value: boolean) => void;
}

const Navbar = ({
  isConnected,
  setIsConnected,
  isLoading,
  setIsLoading,
  isError,
  setIsError,
  address,
  setAddress,
  chainId,
  setChainId,
  isMetamaskNotInstalled,
  setIsMetamaskNotInstalled,
}: Props) => {
  useEffect(() => {
    if (!window.ethereum) {
      setIsMetamaskNotInstalled(true);
      return;
    }
    // console.log("🚀 ~ file: index.tsx:38 ~ isMetamaskNotInstalled", isMetamaskNotInstalled)
    console.log("🚀 ~ file: index.tsx:121 ~ isLoading", isLoading);
   
  }, []);

  // useEffect(()=>{
    
  //   console.log("🚀 ~ file: index.tsx:70 ~ connectWithMetamask ~ setChainId", chainId)
  // },[chainId])

  // async function connectWithMetamask() {
  //   try {
  //     setIsLoading(true);
  //     await window.ethereum.enable();
  //     await window.ethereum.send("eth_requestAccounts");
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //     const signer = provider.getSigner();
  //     const accounts = await provider.listAccounts();
  //     const address = accounts[0];
  //     const network = await provider.getNetwork();
  //     const chainid = network.chainId;
  //     setChainId(chainid);
  //     setIsLoading(false);
  //     if(chainId===GOERLI_ID){
  //        setIsConnected(true);
  //        setAddress(address);
  //     } else {
  //       window.alert('Please switch to the Goerli testnet.');
  //       setIsConnected(false);
  //       setAddress('');
  //     }
       
  //   } catch (error) {
  //     setIsError(true);
  //     setIsLoading(false);
  //     setChainId(chainId);
  //   }  
  // }

  async function connectWithMetamask() {
    try {
      setIsLoading(true);
      await window.ethereum.enable();
      await window.ethereum.send("eth_requestAccounts");
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const accounts = await provider.listAccounts();
      const address = accounts[0];
      const network = await provider.getNetwork();
      const chainid = network.chainId;

      setChainId(chainid);
      setIsLoading(false);
      if (chainid === GOERLI_ID) {
        setIsConnected(true);
        setAddress(address);
      } else {
        window.alert('Please switch to the Goerli testnet.');
        setIsConnected(false);
        setAddress('');
      }
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
      console.error(error);
    }  
  }

  const disconnectWithMetamask = async () => {
    if (!isConnected) {
      return;
    }
    setIsConnected(false);
    setAddress("");
    setChainId(0);
    window.ethereum = null;
    window.location.reload();
  };

  return (
    <div className="w-full bg-[#1D2233] h-16 md:h-18">
      <div className="flex mx-auto justify-between items-center  p-4 md:w-2/3">
        <h1 className="text-xl md:text-3xl text-gray-100">To-Do List</h1>
        <div className="flex gap-x-4 justify-center items-center">
          <h1 className="text-xl text-gray-500 hidden md:flex">{address} </h1>

          {!isConnected ? (
            <button
              className="bg-[#007fff] text-gray-200 px-4 py-2 rounded-md hover:text-gray-50"
              onClick={connectWithMetamask}
            >
              {isLoading ? (
                <ThreeDots
                  height={20}
                  width={40}
                  radius={9}
                  color="#f1f1f1"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  visible={true}
                />
              ) : (
                "connect"
              )}
            </button>
          ) : (
            <button
              className="bg-[#007fff] text-gray-200 px-4 py-2 rounded-md hover:text-gray-50"
              onClick={disconnectWithMetamask}
            >
              disconnect
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
