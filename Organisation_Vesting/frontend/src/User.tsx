// import { useEffect, useState } from 'react';
import react from 'react';
import { useGlobalState } from './utils';
import { ClaimToken, balanceOf } from './helpers';


function User(){

    const [connectedAccount] = useGlobalState('connectedAccount');
    const [balance] = useGlobalState('balance');
    const [info] = useGlobalState('info');
    const [name] = useGlobalState('name');
  


    return (
      <div className="p-8 mt-40 flex justify-center items-center">
        <div className="w-full sm:w-1/2">
          
          <div className="bg-blue-300 p-6 rounded-lg shadow-lg mb-4">
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              User Position: {info ? `${info?.position}` : ""}
            </button>
          </div>
          <div className="bg-blue-300 p-6 rounded-lg shadow-lg mb-4">
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              User Balance: {balance}
            </button>
          </div>
          <div className="bg-blue-300 p-6 rounded-lg shadow-lg mb-4">
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => balanceOf()}
            >
              Get Balance
            </button>
          </div>
          <div className="bg-blue-300 p-6 rounded-lg shadow-lg">
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => ClaimToken()}
            >
              Claim Token
            </button>
          </div>
        </div>
      </div>
    );
    

}

export default User;
