
const hre = require("hardhat");

async function main() {

    const Erc20 = await hre.ethers.getContractFactory("ERC20");
    const erc20 = await Erc20.deploy();

    await erc20.waitForDeployment(1);

    console.log(
        `Token deployed to  ${erc20.target}`
    );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

