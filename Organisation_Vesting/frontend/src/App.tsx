import { Route, Routes } from 'react-router-dom'
import Homepage from "./Homepage"
import User from "./User"
import NavBar from './Navbar';

import {  BeneficiaryInfo, getContract, isWalletConnected
  } from './helpers';
  import { useEffect, useState } from 'react'

function App() {

  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const loadData = async () => {
      try {
        console.log('Blockchain loaded');
        await isWalletConnected();
        await Promise.all([
          getContract(),
          BeneficiaryInfo(),
        ]);
        setLoaded(true);
      } catch (error) {
        console.log('Failed to load data:', error);
      }
    };
    loadData();
  }, []);
  
  return (
    <>
      <div className='min-h-screen'>
        <NavBar/>
        {/* <Homepage/> */}
        <Routes>
          <Route path="/"  element={<Homepage/>} />
          <Route path="/User"  element={<User/>} />
        </Routes>
      </div>
    </>
  )
}

export default App