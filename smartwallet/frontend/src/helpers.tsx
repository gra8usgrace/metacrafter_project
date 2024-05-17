import { ethers } from 'ethers';
import abi from '../../backend/artifacts/contracts/samples/SimpleAccountFactory.sol/SimpleAccountFactory.json';
import { getGlobalState, setGlobalState } from './utils';
import address from "../../backend/contractAddress.json"
declare global {
    interface Window {
      ethereum?: any;
    }
  }


const { ethereum } = window;
const contractAbi = abi.abi;

const contractAddress = address;

const connectWallet = async () => {
  try {
    if (!ethereum) return alert('Wallet not found');
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    setGlobalState('connectedAccount', accounts[0]?.toLowerCase());
  } catch (error) {
    reportError(error);
  }
};

const isWalletConnected = async () => {
  try {
    if (!ethereum) return alert('Please install Metamask');
    const accounts = await ethereum.request({ method: 'eth_accounts' });
    setGlobalState('connectedAccount', accounts[0]?.toLowerCase());

    window.ethereum.on('chainChanged', (chainId: any) => {
      window.location.reload();
    });

    window.ethereum.on('accountsChanged', async () => {
      setGlobalState('connectedAccount', accounts[0]?.toLowerCase());
      await isWalletConnected();
    });

    if (accounts.length) {
      setGlobalState('connectedAccount', accounts[0]?.toLowerCase());
    } else {
      alert('Please connect wallet.');
      console.log('No accounts found.');
    }
  } catch (error) {
    reportError(error);
  }
};

const getContract = async () => {
  const connectedAccount = getGlobalState('connectedAccount');

  if (connectedAccount) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress.address, contractAbi, signer);
    return contract;
  } else {
    return getGlobalState('contract');
  }
};




const CreateAccount = async (address: string, salt:Number) => {
  try {
    if (!ethereum) return alert("Please install Metamask");
    const connectedAccount = getGlobalState("connectedAccount")
    const contract: any = await getContract();
    const name = await contract.createAccount(address, salt);
 
    console.log("token ", name);
    return true;
  } catch (error) {
    reportError(error);
  }
};

const FundWallet = async (account: string, amount:string) => {
  try {
    if (!ethereum) return alert("Please install Metamask");
    const fundsamount = ethers.utils.parseEther(amount)
    const contract:any = await getContract();
    const symbol = await contract.fundWallet(account,{value: fundsamount});
    // setGlobalState("symbol", symbol )
    // console.log(symbol);
  } catch (error) {
    reportError(error);
  }
};






const balanceOf = async (account: string ) => {
  try {
    if (!ethereum) return alert("Please install Metamask");
    const connectedAccount = getGlobalState("connectedAccount")
    const contract:any = await getContract();
    const balance = await contract.balanceOf(account);
    setGlobalState("balance", Number(balance))
    console.log("balance: ", Number(balance));
    return true;
  } catch (error) {
    reportError(error);
  }
};


const GetAddress = async ( salt:Number) => {
  try {
    if (!ethereum) return alert("Please install Metamask");
    const connectedAccount = getGlobalState("connectedAccount")
    const contract:any = await getContract();
    const newAddress = await contract.getCreatedAddress(connectedAccount, salt);
    setGlobalState("newaddress", newAddress)
    console.log("newAddress: ", newAddress);
    return true;
  } catch (error) {
    reportError(error);
  }
};

const reportError = (error: any) => {
  console.log(error.message);
  throw new Error( error);
};

export {
  connectWallet,
  isWalletConnected,
  getContract,
  CreateAccount,
  FundWallet,
  GetAddress,
  balanceOf
}
