import React,{createContext,useReducer} from 'react'

import TransactionReducer from './Reducer'

const data=

[
 
    {amount:500,desc:"Cash"},
    {amount:-40,desc:"Book"},
    {amount:700,desc:"Camera"}
]

const TransactionContext=createContext(data);


export const TransactionProvider=({children})=>{

let [state,dispatch]=useReducer(TransactionReducer,data);
console.log(state);
function addTransaction(transObj){

    dispatch({

        type:"ADD_TRANSACTION",
        payload:{
            amount: transObj.amount, 
            desc: transObj.desc 
        }
    })
}

function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

return (
    <TransactionContext.Provider value={

        {
            transaction: state,
            addTransaction,
            deleteTransaction
          
        }
    }>
           {children}

    </TransactionContext.Provider>

)


}

export default TransactionContext;
