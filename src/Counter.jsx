import React, { useState } from 'react'

const Counter =() =>{
    let [counter,setcounter]=useState(1)
    return(
        <div>
            <h2>Counter Example</h2>
           <h3>Counter Value:{counter}</h3>
        <button onClick={()=>{setcounter(counter+1)}}>+</button>
        <button onClick={()=>{setcounter(counter-1)}}>-</button>
        </div>
    )
}

export default Counter