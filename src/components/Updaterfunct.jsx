import React, {useState} from 'react'

const Updaterfunct = () => {
    
  const [count, setCount] = useState(0);

  const increment = () => {

    setCount(c => c+1); // understand this part very easy
    setCount(c => c+1);
    setCount(c => c+1);
  }

  const decrement = () => {
    setCount(c => c-1);
    setCount(c => c-1);
    setCount(c => c-1);
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

export default Updaterfunct