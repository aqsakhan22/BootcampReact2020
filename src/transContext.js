
import React,{createContext,useReducer} from 'react'
import TransactionReducer from './TransactionReducer'

//yaha per apka data huga avaialble
const initialtransaction=[

    {amount:500,desc:"Cash"},
    {amount:-40,desc:"Book"},
    {amount:700,desc:"Camera"}
        ];
        //jo bhi dataa hu pass yaha sy huga jo bhi data hu 
        export  const TransactionContext=createContext(initialtransaction);
  
       

       




        export const TransactionProvider = ({children})=> {
            let [state, dispatch] = useReducer(TransactionReducer, initialtransaction);
            console.log(state)
        
            function addTransaction(transObj){
                dispatch({
                    type: "ADD_TRANSACTION",
                    payload: { 
                        amount: transObj.amount, 
                        desc: transObj.desc 
                    },
                })
            }
       
            return(
                <TransactionContext.Provider value={{
                    transaction: state,
                    addTransaction
                }}>
                    {children}
                </TransactionContext.Provider>
            )
        }

    