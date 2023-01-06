import React from 'react'
import { useState } from 'react'

export default function Footer() {
    const [count , setCount] = useState(1)
  return (
    <div style={{display: 'flex', justifyContent:'center' }}>
     <div>
           <h1>I'm 15 years old </h1>

   <div className='box'>
   <button onClick={() => setCount(count + 1 )}>icrement</button>
   </div>
        <h1>{count}</h1>
        <div className='box'>
   <button onClick={() => setCount(count -  1 )}>decrement</button>
   </div>
     </div>
    </div>
  )
}
