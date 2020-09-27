import React,{useReducer} from 'react'
import Reducer from './Reducer'
const Child =()=>{
    let [state,dispatch]=useReducer(Reducer,0);
    return(
        <div>
            <h2>state value is:{state}</h2>
           <button onClick={()=>dispatch('INCREMENT')}>+</button> 
           <button onClick={()=>dispatch('DECREMENT')}>-</button> 
        </div>
    )




}
export default Child;