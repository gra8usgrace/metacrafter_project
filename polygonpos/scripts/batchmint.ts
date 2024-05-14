import { ethers } from "hardhat";
import { abi } from "../artifacts/contracts/DegenNFT.sol/DegenNFT.json";
import { contractaddress, user } from "./constants.json";
import hre from "hardhat";
import { DegenNFT  as d}  from "../typechain-types";
async function main() {

  const [signerOne ] = await hre.ethers.getSigners();

  const DegenNFT: d = await hre.ethers.getContractAt("DegenNFT",contractaddress, signerOne ) 

  const quantity = 4;
   
  const mintToken = await DegenNFT.safeMint(user, quantity);
  const result = await mintToken.wait();
  console.log("Transaction Hash:", result);
  console.log("✨ Minted  ✅ ", await DegenNFT.balanceOf(user));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
