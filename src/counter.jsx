import './App.css'
import { useState } from "react"

export default function Counter(){
    
  const [a,setb] = useState(0);
  const handleAdd = () => {
            setb(a + 1)
        }
        const handleRemove = () => {
            setb(a - 1)
        }
    return(
        <div className = 'person'>

        <h1>Counter: {a}</h1>
        <h2>subhanallah</h2>
        <button onClick={handleAdd} className='person'>add</button>
        <button onClick={handleRemove} className='person'>remove</button>
       
       </div>
    )
}