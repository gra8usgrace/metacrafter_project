import { balanceOf,  getContract,  isWalletConnected, connectWallet, 
  CreateAccount,
  FundWallet,
  GetAddress} from './helpers';
import { useEffect, useState } from 'react';
import { useGlobalState } from './utils';

function Homepage() {
  const [connectedAccount] = useGlobalState('connectedAccount');
  const [balance] = useGlobalState('balance');
  const [newaddress] = useGlobalState('newaddress');
  const [vestingPeriod, setVestingPeriod] = useState<string>("");
  const [getaddress, setGetaddress] = useState<string>("");
  const [newGetaddress, setNewGetaddress] = useState<string>("");
  const [stakeholderAddress, setStakeholderAddress] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [salt, setSalt] = useState<string>("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        console.log('Blockchain loaded');
        await isWalletConnected();
        await Promise.all([
          getContract(),
          // balanceOf(),
        ]);
        setLoaded(true);
      } catch (error) {
        console.log('Failed to load data:', error);
      }
    };
    loadData();
  }, []);



  const handleCreateAccount = async (e: any) => {
    e.preventDefault();
    // if (!tokenAmount || !address || !name) return
    try {
      console.log("amount", Number(salt), address.toString())
      await CreateAccount( address, Number(salt))
      console.log("account created")
     
    } catch (error) {
      console.log(error)
    }
  };

  const handleFundWallet = async (e: any) => {
    e.preventDefault();
    // if (!tokenAmount || !address || !name) return
    try {
      console.log("amount", Number(vestingPeriod), stakeholderAddress.toString())
      await FundWallet(stakeholderAddress, vestingPeriod)
      
     
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className='min-h-screen bg-gray-100 flex flex-col justify-center items-center'>
      <header className="text-center">
        <h1 className="text-4xl font-extrabold mb-5">Welcome to the Smart Wallet App !</h1>
        <div className="flex justify-center items-center bg-blue-500 p-4 mt-4 rounded-lg shadow-md">
          <div className="flex space-x-8 justify-between items-center font-normal text-sm text-white">
            {connectedAccount ? (
              <div>
                {connectedAccount.slice(0, 4) + "..." + connectedAccount.slice(-5)}
              </div>
            ) : (
              <div>
                <button
                  onClick={connectWallet}
                  className="bg-slate-100 text-blue-500 font-bold py-2 px-4 rounded hover:bg-blue-200 transition duration-300">
                  Connect Wallet
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="flex  items-center mt-10 space-y-8">
<div className='flex justify-between item-between'>

<form className="max-w-md bg-stone-300 rounded-lg shadow-md px-8 py-6 space-y-4 mr-20"  onSubmit={handleCreateAccount}>
  <div>
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
      Add Your Address
    </label>
    <input
      className="shadow border border-stone-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="Organisation address"
      type="text"
      placeholder=" address"
      value={address}
      onChange={(e) => setAddress(e.target.value)}
      required
    />
  </div>
  
  <div>
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="number">
      Salt
    </label>
    <input
      className="shadowborder border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="salt"
      type="number"
      placeholder="salt"
      value={salt}
      onChange={(e) => setSalt(e.target.value)}
      required
    />
  </div>
  <div className="flex justify-center">
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="submit"
    >
      Submit
    </button>
  </div>
        </form>

        <form className="max-w-md bg-stone-300 rounded-lg shadow-md px-8 py-6 space-y-4 ml-10" onSubmit={handleFundWallet}>
  <div>
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
      Address to fund
    </label>
    <input
      className="shadow border border-stone-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="address"
      type="text"
      placeholder="address to fund"
      value={stakeholderAddress}
      onChange={(e) => setStakeholderAddress(e.target.value)}
      required
    />
  </div>
 
  <div>
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="number">
    Amount To send
    </label>
    <input
      className="shadowborder border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="Amount"
      type="text"
      placeholder="Amount"
      value={vestingPeriod}
      onChange={(e) => setVestingPeriod(e.target.value)}
      required
    />
  </div>
  
  <div className="flex justify-center">
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="submit"
    >
      Submit
    </button>
  </div>
        </form>
</div>


      </main>
      <div className=' flex'>
        
      <div className="flex flex-col justify-center py-4 px-2 mt-5 bg-blue-500 rounded-md">
      <div className="flex space-x-4 text-white font-bold py-2 px-2 rounded">
          <input type="number" value={getaddress} onChange={(e) => setGetaddress(e.target.value)} className=" bg-slate-700 " />
          <button
            onClick={() => GetAddress(Number(getaddress))}
            className="bg-green-500 hover:bg-green-700 rounded-md p-1 ">
            Get  smart Address
          </button>
        </div>


        <div className="flex space-x-4 text-white font-bold py-2 px-2 rounded">
          <input type="text" value={newGetaddress} onChange={(e) => setNewGetaddress(e.target.value)} className=" bg-slate-700 " />
          <button
            onClick={() => balanceOf(newGetaddress)}
            className="bg-green-500 hover:bg-green-700 rounded-md p-1 ">
            Get  smart Address balance
          </button>
        </div>

      <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Your balance is {balance}</button>

     
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Your smart account address is: {newaddress}</button>

     </div>
        
      </div>
      
    </div>
  );
}

export default Homepage;
