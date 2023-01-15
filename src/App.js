import React, {useState} from 'react'
import './App.css';


function App() {
  const [count, setCount] = useState(0)
  
  const increase = () => {
    setCount(count+1);
  }

  
  return (
    <div className='counter'>
      <p>{count}</p>
      <button onClick={increase}>+1</button>
    </div>
  )
}

export default App;
