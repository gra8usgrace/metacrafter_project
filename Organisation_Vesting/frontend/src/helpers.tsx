import { ethers } from 'ethers';
import abi from '../backend/artifacts/contracts/TokenVesting.sol/TokenVesting.json';
import { getGlobalState, setGlobalState } from './utils';
import address from "../backend/contractAddress.json"
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

const ClaimToken = async () => {
  try {
    if (!ethereum) return alert("Please install Metamask");
    const connectedAccount = getGlobalState("connectedAccount")
    const contract: any = await getContract();
    const name = await contract.claimTokens();
    setGlobalState("name", name )
    console.log("token ", name);
    return true;
  } catch (error) {
    reportError(error);
  }
};

const tokenSymbol = async () => {
  try {
    if (!ethereum) return alert("Please install Metamask");
    const contract:any = await getContract();
    const symbol = await contract.symbol();
    setGlobalState("symbol", symbol )
    console.log(symbol);
  } catch (error) {
    reportError(error);
  }
};


const mintToken = async ( _amount: number) => {
  try {
    if (!ethereum) return alert("Please install Metamask");
    const contract:any = await getContract();
    console.log("Minting ....", _amount)
    const mint = await contract.mint(_amount);
    console.log("mint ", mint);
    return true;
  } catch (error) {
    reportError(error);
  }
};
const  AddStakeHolders = async (  
  _beneficiaryAddress: string,
   _position: string,
   _vestingDuration: Number,
   _tokenAmount: Number
) => {
    try {
      if (!ethereum) return alert("Please install Metamask");
      const connectedAccount = getGlobalState("connectedAccount")
      const contract:any = await getContract();
      console.log("adding StakeHolder ....", _position)
      const add = await contract.addBeneficiary(_beneficiaryAddress,
        _position,
        _vestingDuration,
        _tokenAmount);
      const res = await add.wait()
      console.log("result :", res);

    } catch (error) {
      reportError(error);
    }
  };


  const AddOrganization = async (  
    _name: string,  _organizationAddress: string,  _tokenAmount: number
  ) => {
      try {
        if (!ethereum) return alert("Please install Metamask");
        const connectedAccount = getGlobalState("connectedAccount")
        const contract:any = await getContract();
        console.log("adding Organisation ....", _organizationAddress)
        const Org = await contract.addOrganization(_name , _organizationAddress,_tokenAmount, );
        const result = await Org.wait();
        console.log("Organisation Added ", result);
        
      } catch (error) {
        reportError(error);
      }
    };

    const WhiteList = async (   _organizationAddress: string) => {
        try {
          if (!ethereum) return alert("Please install Metamask");
          const connectedAccount = getGlobalState("connectedAccount")
          const contract:any = await getContract();
          console.log("adding Organisation ....", _organizationAddress)
          const Org = await contract.addToWhitelist( _organizationAddress);
          const result = await Org.wait();
          console.log("Organisation Added ", result);
          
        } catch (error) {
          reportError(error);
        }
      };
const balanceOf = async () => {
  try {
    if (!ethereum) return alert("Please install Metamask");
    const connectedAccount = getGlobalState("connectedAccount")
    const contract:any = await getContract();
    const balance = await contract.getClaimedTokens();
    setGlobalState("balance", Number(balance))
    console.log("balance: ", Number(balance));
    return true;
  } catch (error) {
    reportError(error);
  }
};
const BeneficiaryInfo = async () => {
    try {
      if (!ethereum) return alert("Please install Metamask");
      const connectedAccount = getGlobalState("connectedAccount")
      const contract:any = await getContract();
      const info = await contract.getBeneficiaryInfo(connectedAccount);
      setGlobalState("info", info )
      console.log("info: ", info);
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
  ClaimToken,
  tokenSymbol,
  balanceOf,
  mintToken,
  BeneficiaryInfo,
  AddOrganization,
  AddStakeHolders,
  WhiteList
};
