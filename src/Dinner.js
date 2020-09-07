import React from 'react'
function Dinner(props){
    console.log(props);
    return(
        <div>
            <h1 style={{color:"blue"}}>Reusablity of components</h1>
            <h2>we are providing in dinner {props.item1}</h2>
            <h2>we are providing also sweet dish {props.item2}</h2>
            <hr/>
        </div>
    )
}
export default Dinner;