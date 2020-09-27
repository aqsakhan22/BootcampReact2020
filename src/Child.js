import React,{useContext,useState} from 'react'
import './App.css'
import {TransactionContext} from './transContext'
function Child(){
let [newDesc,setDesc]=useState("");
let [newAmount,setAmount]=useState(0);

   
    let {transaction,addTransaction}=useContext(TransactionContext); //use array destruction 
    //yaha per addransaction bbhi import kerwaa hai tak data dispatch k thorugh puhuncha seky
    console.log(transaction)
//     const transaction=[

// {amount:500,desc:"Cash"},
// {amount:40,desc:"Book"},
// {amount:700,desc:"Camera"}
//     ];
const handleAddition =(event) => {
    event.preventDefault();
    console.log(newDesc);
    console.log(newAmount)
    addTransaction(

        {
            amount:Number(newAmount) ,
            desc:newDesc
        }
    ) //yay function hai tb chalga jb on submit huga means 2no field ka data jga

 
}
const getIncome=()=>{
let income=0;
for(var i=0;i< transaction.length; i++){
    if(transaction[i].amount > 0)
        income=income + transaction[i].amount;


}
return income;
    
}

const getExpense=()=>{
    let expense=0;
    for(var i=0; i < transaction.length ; i++){
     if(transaction[i].amount < 0)
     expense=expense + transaction[i].amount;
     

    }
      return expense;
    
}
    return(
        <div className="container">
            <h1  className="text-center" >Expense Tracker</h1>
    <h3 >your Balance <br/> $ {getIncome() + getExpense()}</h3> 
            <div className="expense-container">
    <h3>Income <br/> { getIncome()}</h3>
    <h3>Expense <br/> {getExpense()}</h3>
            </div>
            <h3 >History</h3>
            <hr/>
           
            <ul className="transaction-list">
                {
                 
                
                transaction.map((transObj,index)=>{
                    return(
                        <li key={index}>
                            <span>{transObj.desc}</span>
                            <span>${transObj.amount}</span>
                        </li>
                    )
                })
                }
               
                
            </ul>
            <h3>Add new Transaction</h3>
            <hr/>
            <form className="transaction-form" onSubmit={handleAddition}>
                <label >
                    Enter Description <br/>
                 
                    <input type="text" placeholder=" transaction Name" onChange={(ev)=>setDesc(ev.target.value)} required/>

                </label>
                <br/>
                <br/>
                <label>
                    Enter Amount <br/>
                    <input type="text" placeholder="Add Amount" onChange={(ev)=> setAmount(ev.target.value)} required />

                </label>
                <br/>
                <br/>
                <input type="submit"   className="btn" value="Add Transaction" required/>
            </form>
            
            
            

            
           
        </div>
    )

}
export default Child;