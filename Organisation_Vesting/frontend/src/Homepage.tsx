import { balanceOf,
    AddStakeHolders,  getContract, AddOrganization, isWalletConnected, connectWallet, 
    WhiteList} from './helpers';
  import { useEffect, useState } from 'react';
  import { useGlobalState } from './utils';
  
  function Homepage() {
    const [connectedAccount] = useGlobalState('connectedAccount');
    const [position, setPosition] = useState<string>("");
    const [vestingPeriod, setVestingPeriod] = useState<string>("");
    const [vestingAmount, setVestingAmount] = useState<string>("");
    const [stakeholderAddress, setStakeholderAddress] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [tokenAmount, setTokenAmount] = useState<string>("");
    const [whitelistAddress, setWhitelistAddress] = useState<string>("");
    const [orgainsationName, setOrganisationName] = useState<string>("");
    const [loaded, setLoaded] = useState(false);
  
    useEffect(() => {
      const loadData = async () => {
        try {
          console.log('Blockchain loaded');
          await isWalletConnected();
          await Promise.all([
            getContract(),
            balanceOf()
          ]);
          setLoaded(true);
        } catch (error) {
          console.log('Failed to load data:', error);
        }
      };
      loadData();
    }, []);
  
  
  
    const handleAddOrganization = async (e: any) => {
      e.preventDefault();
      // if (!tokenAmount || !address || !name) return
      try {
        console.log("amount", Number(tokenAmount), address.toString())
        await AddOrganization(orgainsationName, address, Number(tokenAmount))
        
       
      } catch (error) {
        console.log(error)
      }
    };
    const handleWhitelist = async (e: any) => {
      e.preventDefault();
      try {
        console.log("whitelisted ", whitelistAddress.toString())
       const res = await WhiteList(whitelistAddress.toString())
        console.log(res)
       
      } catch (error) {
        console.log(error)
      }
    };
    const handleAddStakeHolders = async (e: any) => {
      e.preventDefault();
      // if (!tokenAmount || !address || !name) return
      try {
        console.log("amount", Number(vestingAmount), stakeholderAddress.toString())
        await AddStakeHolders(stakeholderAddress, position, 
          Number(vestingPeriod), Number(vestingAmount))
        
       
      } catch (error) {
        console.log(error)
      }
    };
  
    return (
      <div className='min-h-screen bg-gray-100 flex flex-col justify-center items-center'>
        {/* <header className="text-center">
          <h1 className="text-4xl font-extrabold mb-5">Welcome to the Vesting App Token!</h1>
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
        </header> */}
  
        <main className="flex  items-center mt-10 space-y-8">
          {/* <div className="flex space-x-4">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Token Name: {name}</button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Token Symbol: {symbol}</button>
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Token Decimal: {decimal}</button>
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">My token balance is {balance}</button>
          </div>
  
          <div className="flex space-x-4">
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} className="border bg-slate-200 rounded px-3 py-1 mb-2 mr-5" />
            <button
              onClick={handleMintToken}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Mint Token
            </button>
          </div> */}
  <div className='flex justify-between item-between'>
  
  <form className="max-w-md bg-stone-300 rounded-lg shadow-md px-8 py-6 space-y-4 mr-20"  onSubmit={handleAddOrganization}>
    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
        Add Organisation
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
      Orgainsation Name
      </label>
      <input
        className="shadowborder border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="Orgainsation Name"
        type="text"
        placeholder="Orgainsation Name"
        value={orgainsationName}
        onChange={(e) => setOrganisationName(e.target.value)}
        required
      />
    </div>
    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="number">
        Token
      </label>
      <input
        className="shadowborder border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="token Amount"
        type="number"
        placeholder="Token Amount"
        value={tokenAmount}
        onChange={(e) => setTokenAmount(e.target.value)}
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
  
          <form className="max-w-md bg-stone-300 rounded-lg shadow-md px-8 py-6 space-y-4 ml-10" onSubmit={handleAddStakeHolders}>
    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
        Add StakeHolders
      </label>
      <input
        className="shadow border border-stone-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="Stakeholder  address"
        type="text"
        placeholder="Stakeholder address"
        value={stakeholderAddress}
        onChange={(e) => setStakeholderAddress(e.target.value)}
        required
      />
    </div>
    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="number">
      Orgainsation Name
      </label>
      <input
        className="shadowborder border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="Stakeholder Position"
        type="text"
        placeholder="Stakeholder Position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        required
      />
    </div>
    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="number">
      Vesting Period
      </label>
      <input
        className="shadowborder border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="Vesting Period"
        type="text"
        placeholder="Vesting Period"
        value={vestingPeriod}
        onChange={(e) => setVestingPeriod(e.target.value)}
        required
      />
    </div>
    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="number">
        Token Amount
      </label>
      <input
        className="shadowborder border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="token Amount"
        type="number"
        placeholder="Token Amount"
        value={vestingAmount}
        onChange={(e) => setVestingAmount(e.target.value)}
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
        <div className='flex '>
        <div className="flex flex-row justify-center py-4 px-2 mt-5 bg-blue-500 rounded-md">
         
         <input type="text" value={whitelistAddress} placeholder='White List Address'
          onChange={(e) => setWhitelistAddress(e.target.value)} className="border
           bg-slate-200 rounded  " />
         <button
           onClick={handleWhitelist}
           className="bg-green-500 rounded-sm hover:bg-green-700 text-white font-bold p-2 ">
           White List Address
         </button>
       </div>
          
        </div>
        
      </div>
    );
  }
  
  export default Homepage;
  