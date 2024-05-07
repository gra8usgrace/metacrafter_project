import { ethers } from "hardhat";
import hre from "hardhat";
import { FXRootContractAbi } from "./FXRootContractAbi";
import { abi } from "../artifacts/contracts/DegenNFT.sol/DegenNFT.json";
import {contractaddress} from "./constants.json";
async function main(){
  const user = "0x4131811b8a4237712905650985A7474F8f92b18b"
  const DegenNFT = await hre.ethers.getContractAt(abi, contractaddress);


  // Get FXRoot contract instance
  const fxRootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de"; // FxRoot contract address on Mumbai
  const fxRoot = await ethers.getContractAt(FXRootContractAbi, fxRootAddress);

  // Approve NFTs for transfer
  const quantity: number[] = [0, 1, 2, 3, 4]; // Number of NFTs to transfer
  const approveTx = await DegenNFT.setApprovalForAll(fxRootAddress, true);
  await approveTx.wait();

  // Batch Deposit NFTs to the Bridge
  for (let i = 0; i < quantity.length; i++) {
    const depositTx = await fxRoot.deposit(
      contractaddress,
      user,
      quantity[i],
      '0x6566' 
    );
    await depositTx.wait();
  }

  console.log("NFTs approved and batch deposited to Polygon Mumbai.");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
