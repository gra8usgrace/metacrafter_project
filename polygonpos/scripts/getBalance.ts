import { ethers } from "hardhat";
import hre from "hardhat";
import { FXRootContractAbi } from "./FXRootContractAbi";
import { abi } from "../artifacts/contracts/DegenNFT.sol/DegenNFT.json";

async function main(){

  // Get ERC721 contract instance
  const degenAddress= "0x79900000B214827062E6c1A3c81AA8bd6Def1606";
  const DegenNFT = await hre.ethers.getContractAt(abi, degenAddress);


  const user = "0x4131811b8a4237712905650985A7474F8f92b18b"

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
