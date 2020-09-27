import React , {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './Parent'
import CounterContext from './CounterContext'
function App() {
//   var txt = "Hello World!";
// console.log(txt.length)
// console.log(txt.indexOf('H'))
//slice replace
  let count=useState(30); 
  return (
    //value he parameter use kersekty hai or nh
   
    <CounterContext.Provider value={count}>

<div className="App">
     <Parent/>
    </div>
    </CounterContext.Provider>
    
  );
}

export default App;
