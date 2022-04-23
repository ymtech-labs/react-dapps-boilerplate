import { ethers } from "hardhat";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const Greeter = await ethers.getContractFactory("Greeter");
  //Methods to deploy your contract
  const greeter = await Greeter.deploy("Hello, Hardhat!");

  //waiting of contract deployment
  await greeter.deployed();

  console.log("Greeter deployed to:", greeter.address);
};
export default func;
