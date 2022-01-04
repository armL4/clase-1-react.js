import React, {useState} from 'react'

function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
  }
  
  function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
  }
  
  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    /* cambio de true o false para cambiar lo que muestra en pantalla */
    if (true) {
      return <UserGreeting/>;
    }
    return <GuestGreeting />;
  }

export const ItemCount = ({min , max}) => {
    const [counter, setCounter] = useState(min)
    const HadleIncrement=() =>{
        if (counter<max) {
            setCounter(prev=>prev+1)
        }
        else{
            alert("stock maximo")
        }
    }
    const HadleDecrement=() =>{
        if (counter>min) {
            setCounter(prev=>prev-1)
        }
        else{
            alert("no se puede realizar la accion")
        }
        }
        return(
            <div>
            <Greeting />
            <h1>{counter}</h1>
            <button onClick={()=>HadleIncrement(counter+1)}>mas</button>
            <button onClick={()=>HadleDecrement(counter-1)}>menos</button>
            </div>
            )
}

export default ItemCount