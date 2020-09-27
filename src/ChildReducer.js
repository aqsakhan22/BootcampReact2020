import React,{ useReducer} from 'react'
import Counterreducer from './Counterreducer'
const ChildReducer=()=>{
    let [state,dispatch]=useReducer(Counterreducer,0);


    return(

        <div>

    <h2>using Reducer and state value is :{state}</h2>
    <button onClick={()=>dispatch('INCREMENT')}>Incremen</button>
    <button onClick={()=>dispatch('DECREMENT')}>DECREMENT</button>

       </div>
    )



}
export default ChildReducer;