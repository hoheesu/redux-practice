import React, {useState, useEffect} from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  const countOn = () => {
    setCount(count+1)
  }
  useEffect(()=>{
    countOn()
  },[setCount])
  return (
    <div className='counter'>
      <p>{count}</p>
      <button onClick={countOn}>+1</button>
    </div>
  )
}

export default Counter