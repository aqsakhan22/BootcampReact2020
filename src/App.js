import React, {useState} from 'react';
import Message from './Message'
import './App.css';

function App() {
  let[count,setCount]=useState(0); //variable using hooks only apply in funcions

  let [isMorning,setMorning]=useState(true); //we can use boolean , arr
  
  let[age,setage]=useState(22);

  let [name,setname]=useState("aqsa")

  // let [obj,setobj]=useState([{text:"json obj sample"}]);
  return (
    <div className={`box ${isMorning ? 'daylight' : ''}`}>
      <h1> good {isMorning ? 'morning' : 'Night'}</h1>
    <Message counter={count}/>
     <br/>
  <h3>set age is:{age}</h3>
  <h3>Name:{name}</h3>
  {/* <h3>object sample:{obj}</h3> */}
     <button  onClick={()=> setCount(++count)}>Update</button>
     <button onClick={()=>setMorning(!isMorning)}>UpdateDay</button>
     <button onClick={()=>setage(24)}>Update Age</button>
     <button onClick={()=>setname("aqsa khan")}>Mention name</button>
    
     

    

    </div>
  );
}

export default App;
