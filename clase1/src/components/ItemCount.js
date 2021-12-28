import React, {useState} from 'react'

export const ItemCount = () => {
    const [Counter, setCounter] = useState(1)


    return (
        <div>
            <h1>{Counter}</h1>
            <button onClick={()=>setCounter(Counter+1)}>mas</button>
            <button onClick={()=>setCounter(Counter-1)}>menos</button>
        </div>
    )
}

export default ItemCount