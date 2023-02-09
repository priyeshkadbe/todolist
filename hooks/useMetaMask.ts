// import React, { useState, useEffect } from "react";
// import { ethers } from "hardhat";




// function useMetaMask() {
//   const [connected, setConnected] = useState(false);
//   const [address, setAddress] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string>();

//   const ALCHEMY_ID='9ncTUusrInkbhwbJfOveuv_fbMKNGnaJ'

//   const provider=new ethers.providers.JsonRpcProvider(`https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_ID}`)



//   const checkMetamaskConnected=async()=>{
//     if(!window.ethereum){
//       setError("please install Metamask and refresh the page");
//       return
//     }
//     // const account=window.ethereum.request({method: "eth_accounts"});
//     const account=await window.ethereum.request({method: "eth_accounts"})
//   }


//   return { address, loading, error };
// }

// export default useMetaMask;
