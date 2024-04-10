import { createGlobalState } from 'react-hooks-global-state'


const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState({

    connectedAccount: '',
    contract: null,
    balance: 0,
    symbol: '',
    name: '',
    decimal: ''
    
})


  

export {
    useGlobalState,
    setGlobalState,
    getGlobalState,
}