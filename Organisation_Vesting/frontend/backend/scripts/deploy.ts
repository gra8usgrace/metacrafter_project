
import hre from "hardhat"
async function main() {

    const TokenVesting = await hre.ethers.getContractFactory("TokenVesting");
    const tokenvesting = await TokenVesting.deploy();

    await tokenvesting.waitForDeployment();

    console.log(
        `Token deployed to  ${tokenvesting.target}`
    );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

