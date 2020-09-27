import React from 'react'
import Child from './Child'
import ChildReducer from './ChildReducer'
const Parent =()=>
{
    return(
<div>
<Child name="hello my child"/>
        <ChildReducer/>
</div>
        
    )

}
export default Parent;