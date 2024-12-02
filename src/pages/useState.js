import { useState } from "react";

export const CounterComponent = () => {
  const[count, setCount] = useState(0)
  const[name, setName] = useState('')
  const[displayName, setDisplayName] = useState(false)

  const showCount = () => {
    setCount(4)
    console.log('current: ', count)
  }

  const addCount = () => {
    setCount(count + 1)
  }

  const addName = (event) => {
    setName(event.target.value)
  }

  const showName = () => {
    setDisplayName(true)
  }
  
  console.log('first count: ', count)

  return (
    <div>
      <div>
        <p>current count : {count}</p>
        <button onClick={showCount}>show count</button>
        <button onClick={addCount}>add count</button>
      </div>


      <div>
        <input type="text" value={name} onChange={addName} placeholder="Enter your name" />
        <p>My name is: {displayName ? name : 'name not set' }</p>
        <button onClick={showName}>Show name</button>
      </div>
    </div>
  )
}