import { ethers } from "hardhat";
import hre from "hardhat";
import { FXRootContractAbi } from "./FXRootContractAbi";
import { abi } from "../artifacts/contracts/DegenNFT.sol/DegenNFT.json";
import {contractaddress, user} from "./constants.json";
import { DegenNFT  as d}  from "../typechain-types";


async function main(){

  // Get ERC721 contract instance
  // const degenAddress= "";
  // const DegenNFT = await hre.ethers.getContractAt("DegenNFT", contractaddress);

  const [signerOne ] = await hre.ethers.getSigners();

  const DegenNFT: d = await hre.ethers.getContractAt("DegenNFT",contractaddress, signerOne ) 


  // Test balanceOf on Polygon Mumbai
  const balance = await DegenNFT.balanceOf(user);
  console.log("\n Balance of on Polygon Mumbai:", balance.toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
