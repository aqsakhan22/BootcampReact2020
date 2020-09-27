import React,{useContext,useState} from 'react'
import TransactionContext from './createContext'
const Child =()=>{
    let [newDesc,setDesc]=useState("");
let [newAmount,setAmount]=useState(0);

let {transaction,addTransaction,deleteTransaction}=useContext(TransactionContext);
    console.log(transaction)
    
    const handleAddition=(event)=>{

        event.preventDefault();
        console.log(event)
        addTransaction(

            {
                
            amount:Number(newAmount) ,
            desc:newDesc
            }
        );
       
     
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
        // delTransaction=(del)=>{
        // console.log("value",del);
        // }
   
return(
    <>
   
   <div className="container">
            <h1  className="text-center" >Expense Tracker</h1>
    <h3 >your Balance <br/> ${getIncome() + getExpense()}</h3> 
            <div className="expense-container">
    <h3>Income <br/> ${getIncome()}</h3>
    <h3>Expense <br/> ${getExpense()}</h3>
            </div>
            <h3 >History</h3>
            <hr/>
           
            <ul className="transaction-list">
                {
                 
                
                transaction.map((transObj,index)=>{
                    return(
                        <li key={index}>
                            <span>${transObj.desc}</span>
                            <span>${transObj.amount}</span>
                    {/* <button onClick={()=>delTransaction(index)}>{index}x</button> */}
                    <button onClick={() => deleteTransaction(index)}>x</button>
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
                    <input type="text" placeholder="Add Amount" onChange={(ev)=>setAmount(ev.target.value)}  required />

                </label>
                <br/>
                <br/>
                <input type="submit"   className="btn" value="Add Transaction"  required/>
            </form>
            
            
            

            
           
        </div>


    </>
)

}
export default Child;