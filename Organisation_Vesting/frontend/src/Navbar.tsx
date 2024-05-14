import React from 'react';
import { connectWallet, 
    } from './helpers';

import { useGlobalState } from './utils';

function NavBar() {
    const [connectedAccount] = useGlobalState('connectedAccount');

  return (
    <div className=' bg-gray-100 flex flex-col justify-center items-center'>
   
          <div className="text-center">
          <button className="text-4xl font-extrabold mb-5">
          <a  href={'/'}
            > 
            Welcome to the Vesting App Token!
            </a>
          </button>
          <div className="flex justify-center items-center bg-blue-500 p-4 mt-4 rounded-lg shadow-md">
            <div className="flex space-x-8 justify-between items-center font-normal text-sm text-white">
              {connectedAccount ? (
                <div className='flex '>
                <div className='flex '>
                  {connectedAccount.slice(0, 4) + "..." + connectedAccount.slice(-5)}
                  
                </div>
                <div>
            <a className='flex ml-10 bg-lime-400 p-4 rounded-md ' href={'/User'}
            >
              Claim Page
            </a>
          </div>
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
        </div>
        </div>
  );
}

export default NavBar;
