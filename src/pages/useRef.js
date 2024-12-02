import { useEffect, useRef, useState } from "react";

// example 1
// using useRef to access DOM
export const FocusInputExample = () => {

  // set it to null initially

  const inputRef = useRef(null)

  const handleFocus = () => {
    // use .current to access the DOM
    inputRef.current.focus(); // access the element and focus
  }

  return (
    <div>
      {/* ref will refer to inputRef that uses useRef()  */}
      <input ref={inputRef} type="text" placeholder="click the button to focus"/>
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  )
}

// example 2
// using useRef to store previous state
export const PreviousStateExample = () => {
  const [count, setCount] = useState(0)
  const previousCountRef = useRef()

  useEffect(() => {
    previousCountRef.current = count
  })

  const increamentCount = () => {
    setCount(count +1)
  }

  return (
    <div>
      <p>Current count: {count}</p>
      <p>Previous count: {previousCountRef.current}</p>
      <button onClick={increamentCount} >Add Count</button>
    </div>
  )
}