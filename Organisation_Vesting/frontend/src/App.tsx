import { balanceOf, tokenName, tokenSymbol, getContract, AddOrganization, isWalletConnected, mintToken, connectWallet, decimalToken } from './helpers';
import { useEffect, useState } from 'react';
import { useGlobalState } from './utils';

function App() {
  const [connectedAccount] = useGlobalState('connectedAccount');
  const [balance] = useGlobalState('balance');
  const [decimal] = useGlobalState('decimal');
  const [symbol] = useGlobalState('symbol');
  const [name] = useGlobalState('name');
  const [amount, setAmount] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [tokenAmount, setTokenAmount] = useState<string>("");
  const [orgainsationName, setOrganisationName] = useState<string>("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        console.log('Blockchain loaded');
        await isWalletConnected();
        await Promise.all([
          decimalToken(),
          getContract(),
          tokenName(),
          tokenSymbol(),
          balanceOf()
        ]);
        setLoaded(true);
      } catch (error) {
        console.log('Failed to load data:', error);
      }
    };
    loadData();
  }, []);

  const handleMintToken = async (e: any) => {
    e.preventDefault();
    if (!amount) return
    try {
      console.log("amount", Number(amount))
      const result = await mintToken(Number(amount))
      console.log("result ", result)
      if (result === true) {
        alert("Success: Token minted!");
      } else {
        alert("Failed to mint token");
      }
    } catch (error) {
      console.log(error)
    }
  };

  const handleAddOrganization = async (e: any) => {
    e.preventDefault();
    // if (!tokenAmount || !address || !name) return
    try {
      console.log("amount", Number(tokenAmount), address.toString())
      const result = await AddOrganization(name, address, Number(tokenAmount))
      console.log("result ", result)
      if (result === true) {
        alert("Success: Token transferred!");
      } else {
        alert("Failed to transfer token");
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className='min-h-screen bg-gray-100 flex flex-col justify-center items-center'>
      <header className="text-center">
        <h1 className="text-4xl font-extrabold mb-5">Welcome to the Metacrafters ERC20 Token!</h1>
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

      <main className="flex flex-col items-center mt-10 space-y-8">
        <div className="flex space-x-4">
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
        </div>

        <form className="max-w-md bg-stone-100 rounded-lg shadow-md px-8 py-6 space-y-4" onSubmit={handleAddOrganization}>
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


      </main>
    </div>
  );
}

export default App;
