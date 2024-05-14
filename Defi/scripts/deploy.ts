
import hre from "hardhat"
async function main() {

    const Factory = await hre.ethers.getContractFactory("Factory");
    const factory = await Factory.deploy();

    await factory.waitForDeployment();

    console.log(
        `Token deployed to  ${factory.target}`
    );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

