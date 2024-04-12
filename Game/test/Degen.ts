import { expect } from "chai";
import { ethers } from "hardhat";
import { Signer } from "ethers";
import { Degen } from "../typechain-types";

describe("Degen Contract", function () {
  let Degen: Degen;
  let owner: Signer;
  let addr1: Signer;
  let addr2: Signer;

  beforeEach(async function () {
    // Deploy the contract
    const DegenFactory = await ethers.getContractFactory("Degen");
    [owner, addr1, addr2] = await ethers.getSigners();
    Degen = (await DegenFactory.deploy(await owner.getAddress())) as Degen;
    await Degen.getDeployedCode();
  });

  it("Should have correct name, symbol, and decimals", async function () {
    expect(await Degen.name()).to.equal("Degen");
    expect(await Degen.symbol()).to.equal("DGN");
    expect(await Degen.decimals()).to.equal(1000000000);
  });

  it("Should mint tokens to owner", async function () {
    await Degen.mint(1000);
    expect(await Degen.balanceOf(await owner.getAddress())).to.equal(1000);
  });

  it("Should transfer tokens between accounts", async function () {
    await Degen.mint(1000);
    await Degen.connect(owner).transfer(await addr1.getAddress(), 100);
    expect(await Degen.balanceOf(await addr1.getAddress())).to.equal(100);
  });

  it("Should burn tokens", async function () {
    await Degen.mint(1000);
    await Degen.burn(100);
    expect(await Degen.balanceOf(await owner.getAddress())).to.equal(900);
  });

  it("Should redeem correct game item", async function () {
    await Degen.mint(500);
    await Degen.redeem(500);
    expect(await Degen.gameItems(await owner.getAddress())).to.equal("DGNPACK");
  });

  it("Should revert if redemption amount is invalid", async function () {
    await Degen.mint(100);
    await expect(Degen.redeem(200)).to.be.revertedWith("Insufficient balance.");
  });

  it("Should revert if redemption amount is zero", async function () {
    await Degen.mint(100);
    await expect(Degen.redeem(0)).to.be.revertedWith("Amount must be greater than zero.");
  });

  it("Should revert if redeeming more tokens than balance", async function () {
    await Degen.mint(100);
    await expect(Degen.redeem(200)).to.be.revertedWith("Insufficient balance.");
  });
});
