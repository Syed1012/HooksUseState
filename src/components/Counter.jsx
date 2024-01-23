import React, {useState} from 'react'

const Counter = () => {

    const[incounter, setincounter] = useState(0);
    const[resetcounter, setresetCounter] = useState(0);
    const[deccounter, setdecCounter] = useState(0);

    const IncrementCounter = () => {
        setincounter(incounter+1);
    }

    const ResetCounter = () => {
        setresetCounter(resetcounter);
    }

    const DecrementCounter = () => {
        setdecCounter(incounter-1);
    }

  return (
    <div>
    <p>value: {incounter}</p>
    <button onClick={IncrementCounter}>Increment Counter</button>
    <br />
    <br />
    <p>value: {resetcounter}</p>
    <button onClick={ResetCounter}>Reset Counter</button>
    <br />
    <br />
    <p>value: {deccounter}</p>
    <button onClick={DecrementCounter}>Decrement Counter</button>
    </div>
  )
}

export default Counter;