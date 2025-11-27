import React, { useEffect, useState } from 'react'

function Dashboard() {
  const[counter,setCounter]=useState(10);
  const[pointer,setPointer]=useState(0);

  useEffect(()=>{
    console.log(counter)
    console.log(pointer)
  },[counter])
  return (
    <div>
    <div>
      <h2>Counter value={counter}</h2>
      <h2>Counter value={pointer}</h2>
    </div>
      <button onClick={()=>setCounter(counter+10)}>Counter</button>
      <button onClick={()=>setPointer(pointer+20)}>Pointer</button>
    </div>
  )
}

export default Dashboard