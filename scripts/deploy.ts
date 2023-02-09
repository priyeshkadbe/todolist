import { ethers } from "hardhat";

async function main() {
  const ToDoList = await ethers.getContractFactory("ToDoList");
  const toDoList = await ToDoList.deploy();

  await toDoList.deployed();

  console.log("Lock with 1 ETH deployed to:", toDoList.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
