import hre from "hardhat";
// import { FXRootContractAbi } from "./FXRootContractAbi";
import { abi } from "../artifacts/contracts/DegenNFT.sol/DegenNFT.json";
import {contractaddress, user} from "./constants.json"


async function main() {
  const DegenNFT = await hre.ethers.getContractAt(abi, contractaddress);

  const quantity = 5;
   
  const mintToken = await DegenNFT.mint(user, quantity);
  const result = await mintToken.wait();
  console.log("Result :", result)

  console.log("Successfully minted", quantity);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

