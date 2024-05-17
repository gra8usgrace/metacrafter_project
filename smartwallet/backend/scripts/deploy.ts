
import hre from "hardhat"
import { ethers } from "hardhat";
async function main() {

  const [deployer] = await ethers.getSigners();

    const SimpleAccountFactory = await hre.ethers.getContractFactory("SimpleAccountFactory");
    const simpleAccountFactoryInstance = await SimpleAccountFactory.deploy(deployer.address);

    await simpleAccountFactoryInstance.waitForDeployment();

    console.log(
        `simpleAccountFactoryInstance deployed to  ${simpleAccountFactoryInstance.target}`
    );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

