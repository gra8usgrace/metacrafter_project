import { useState, useEffect } from "react";
import { ethers } from "ethers";
import ERC20_abi from "./backend/artifacts/contracts/ERC20.sol/ERC20.json";

declare global {
  interface Window {
    ethereum?: any;
  }
}

export default function HomePage() {
  const [ethWallet, setEthWallet] = useState<any>(undefined);
  const [account, setAccount] = useState<string | undefined>(undefined);
  const [erc20Contract, setERC20Contract] = useState<any>(undefined);
  const [balance, setBalance] = useState<number | undefined>(undefined);
  const [decimal, setDecimal] = useState<number | undefined>(undefined);
  const [amount, setAmount] = useState<string>("");

  const contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"; // Replace with your ERC20 contract address
  const erc20ABI: any = ERC20_abi.abi;

  const getWallet = async () => {
    if (window.ethereum) {
      setEthWallet(new ethers.providers.Web3Provider(window.ethereum));
    }

    if (ethWallet) {
      const accounts = await ethWallet.listAccounts();
      handleAccount(accounts);
    }
  };

  const handleAccount = (accounts: string[]) => {
    if (accounts && accounts.length > 0) {
      console.log("Account connected: ", accounts[0]);
      setAccount(accounts[0]);
    } else {
      console.log("No account found");
    }
  };

  const connectAccount = async () => {
    if (!ethWallet) {
      alert('MetaMask wallet is required to connect');
      return;
    }

    const accounts = await ethWallet.listAccounts();
    handleAccount(accounts);

    // once wallet is set we can get a reference to our deployed contract
    getERC20Contract();
  };

  const getERC20Contract = () => {
    if (ethWallet) {
      const signer = ethWallet.getSigner();
      const erc20Contract = new ethers.Contract(contractAddress, erc20ABI, signer);
      setERC20Contract(erc20Contract);
      getDecimal();

    }
  };

  const getBalance = async () => {
    if (erc20Contract && account) {
      const balance = await erc20Contract.balanceOf(account);
      setBalance(balance.toNumber());
    }
  };
  const getDecimal = async () => {
    if (erc20Contract && account) {
      const decimal = await erc20Contract.decimals();
      setDecimal(decimal.toNumber());
    }
  };


  const deposit = async () => {
    if (erc20Contract && account && amount !== "") {
      const tx = await erc20Contract.transfer(contractAddress, ethers.utils.parseUnits(amount, 18));
      await tx.wait();
      setAmount("");
      getBalance();
    } else {
      alert("Please enter a valid amount");
    }
  };
  const mint = async () => {
    if (erc20Contract && account && amount !== "") {
      const tx = await erc20Contract.mint(amount);
      await tx.wait();
      setAmount("");
      getBalance();
    } else {
      alert("Please enter a valid amount");
    }
  };

  const withdraw = async () => {
    if (erc20Contract && account && amount !== "") {
      const tx = await erc20Contract.transfer(account, ethers.utils.parseUnits(amount, 18));
      await tx.wait();
      setAmount("");
      getBalance();
    } else {
      alert("Please enter a valid amount");
    }
  };

  const initUser = () => {
    // Check to see if user has Metamask
    if (!ethWallet) {
      return <p>Please install Metamask in order to use this ATM.</p>;
    }

    // Check to see if user is connected. If not, connect to their account
    if (!account) {
      return <button onClick={connectAccount}>Please connect your Metamask wallet</button>;
    }

    if (balance === undefined) {
      getBalance();
      getDecimal();
    }

    return (
      <div>
      <p>Your Account: {account}</p>
      <p>Your Balance: {balance}</p>
      <p>Token total supply : {decimal}</p>

      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} className="border rounded px-3 py-1 mb-2 " />
      <button onClick={mint} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">mint</button>
      <button onClick={deposit} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2">Deposit</button>
      <button onClick={withdraw} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Withdraw</button>
    </div>
    );
  };

  useEffect(() => {
    getWallet();
  }, []);

  return (
    <main className="container mx-auto max-w-lg mt-10">
      <header><h1 className="text-2xl mb-5">Welcome to the Metacrafters ATM!</h1></header>
      {initUser()}
    </main>
  );
}
