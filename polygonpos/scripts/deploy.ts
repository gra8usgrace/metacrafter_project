import hre from "hardhat";


async function main() {

    const DegenNFT = await hre.ethers.getContractFactory("DegenNFT");
    const degennft = await DegenNFT.deploy();

    await degennft.waitForDeployment();

    console.log(
        `Token deployed to  ${degennft.target}`
    );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

