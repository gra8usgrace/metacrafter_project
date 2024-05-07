import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { vars } from "hardhat/config";

const PRIVATE_KEY = vars.get("PRIVATE_KEY");


const config: HardhatUserConfig = {
  solidity: "0.8.24",
 
  networks: {
    seoplia: {
      url: 'https://ethereum-sepolia-rpc.publicnode.com',
      accounts: [`0x${PRIVATE_KEY}`
      ]
    },
  },


};

export default config;
