import React, {useState} from 'react'

const NumCounter = () => {
    
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count+1);
  }

  const decrement = () => {
    setCount(count-1);
  }

  const reset = () => {
    setCount(0);
  }

  return (
    <div>
    <p>value: {count} </p>
    <button onClick={increment}>Increment Counter</button>
    <br />
    <br />
    <button onClick={reset}>Reset Counter</button>
    <br />
    <br />
    <button onClick={decrement}>Decrement Counter</button>
    </div>
  )
}

export default NumCounter