import hre from "hardhat";


async function main() {

    const Degen = await hre.ethers.getContractFactory("Degen");
    const degen = await Degen.deploy("0xE146986484f8f162A31225c5663DC604b73d9996");

    await degen.waitForDeployment();

    console.log(
        `Token deployed to  ${degen.target}`
    );
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
