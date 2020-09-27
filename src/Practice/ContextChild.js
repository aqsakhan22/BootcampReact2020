import React,{ useContext} from 'react'
import CreateContext from './CreateContext'
const ContextChild = () =>{
    let CounterValue= useContext(CreateContext);
    
return(
    <div>
        <h2>childs</h2>
         <h3>{CounterValue[0]}</h3>
         <button onClick={()=>CounterValue[1](++CounterValue[0])}>Update value</button>


    </div>
)

}
export default ContextChild;