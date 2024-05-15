
import hre from "hardhat"
async function main() {

    const StorageVictim = await hre.ethers.getContractFactory("StorageVictim");
    const storageVictim = await StorageVictim.deploy();

    await storageVictim.waitForDeployment();

    console.log(
        `StorageVictim deployed to  ${storageVictim.target}`
    );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

