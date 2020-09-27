import React from 'react'
const Reducer = (state,action) => {
    switch(action)
    {
    case 'INCREMENT':
        return state +1;
        break;

    case 'DECREMENT':
        return state - 1;
        break;
    }


}








export default Reducer;