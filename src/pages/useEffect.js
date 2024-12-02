import { useState, useEffect } from "react";

export const TimerComponent = () => {
  const[number, setNumber] = useState(0)
  const[para, setPara] = useState(false)

  const addNumber = () => {
    setNumber(number + 1)
  }


  useEffect(() => {
    // line below will keep adding
    // addNumber()
    console.log('number is updated')
  }, [number])


  return (
    <div>
      <p>Number : {number}</p>
      {para && <p>Number is updated with {number}</p>}
      <button onClick={addNumber}>Add number</button>
    </div>
  )
}