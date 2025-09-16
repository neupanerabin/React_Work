import React, { useState } from 'react'

function Counter() {

  const [count, setCount] = useState(0);

  const increment = () => {

    // Takes the PENDING state to calculate NEXT state.
    // React puts your updater function in a queue (waiting in line )
    // During the next renderr, it will call them in the same order
    setCount(count => count + 1);
    setCount(count => count + 1);
    setCount(count => count + 1);

  }


  const decrement = () => {
    setCount(c => c - 1);
    setCount(c => c - 1);
    setCount(c => c - 1);

  }

  const reset = () => {
    setCount(c => c = 0);
  }
  return (
    <div className='counter-container'>
      <p className='count-display'>{count}</p>
      <button className='counter-button' onClick={decrement}>Decrement</button>
      <button className='counter-button' onClick={increment}>Increment</button>
      <button className='counter-button' onClick={reset}>Reset</button>


    </div>
  );

}
export default Counter