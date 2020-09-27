import React, { useContext } from 'react'

import Countercontext from './CounterContext';
const Child =(props)=>
{
    let CounterValue= useContext(Countercontext); //yay arra ki form hai jismay 0 per value hugi initial or 1 per update value;
    console.log(CounterValue);
    return(

       <div>
<h2>this is child using contextApi </h2>
<h3>get from parent {props.name}</h3>
    <h2>using contextApi we use value{CounterValue[0]}</h2>  
    {/* CounterValue[0] yay value hai jo defaul hai or CounterValue[1] wo value hai jo hum Update kerni hai */}
    <button onClick={()=>CounterValue[1](++CounterValue[0])}>Update value</button>
       </div>
    )

}
export default Child;