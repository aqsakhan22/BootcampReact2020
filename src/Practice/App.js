import React,{ useState,useContext} from 'react'
import CreateContext from './CreateContext'
import ContextParent from './ContextParent'
function App(){
    
    let count=useState(10);

return(
    <CreateContext.Provider value={count}>

        <div>
            <ContextParent/>
        
        </div>
    </CreateContext.Provider>
    
)
}
export default App;