import { createGlobalState } from 'react-hooks-global-state'


const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState({

    connectedAccount: '',
    contract: null,
    balance: 0,
    symbol: '',
    name: '',
    info: null
    
})


  

export {
    useGlobalState,
    setGlobalState,
    getGlobalState,
}