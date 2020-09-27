import React from 'react'

const TransactionReducer=((state,action)=>{

    switch(action.type){
        case "ADD_TRANSACTION":
            { 
                return [action.payload,...state];
            }
           
            break
        default:
           return state;
    }
})
export default TransactionReducer;