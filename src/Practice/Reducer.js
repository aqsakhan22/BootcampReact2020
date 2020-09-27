import React from 'react';
const TransactionReducer =((state,action)=>{

    switch(action.type){
        case "ADD_TRANSACTION":

            {
                return [action.payload,...state];
            }
            
            break;
            case 'DELETE_TRANSACTION':
                
            {
                return [...state.splice(action.payload,1),...state];
            }
                
     break;
           
            default:
                return state;
    }
})
export default TransactionReducer;