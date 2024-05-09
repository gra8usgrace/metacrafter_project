import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { vars } from "hardhat/config";

const PRIVATE_KEY = vars.get("PRIVATE_KEY");
const RPC_URL = vars.get("RPC_URL");
const API_URL = vars.get("API_URL");


const config: HardhatUserConfig = {
  solidity: "0.8.24",
 
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${RPC_URL}`,
      accounts: [`0x${PRIVATE_KEY}`
      ]
    },
    localhost: {
      chainId: 31337
    },
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${API_URL}`,
      accounts: [`0x${PRIVATE_KEY}`]
      },
  },


};

export default config;
