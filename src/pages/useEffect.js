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

    // if there is a return, this will run first. can be used to clean up eventListener ran previously
    return () => {
      console.log('this is the return statement')
    }
  }, [number])


  return (
    <div>
      <p>Number : {number}</p>
      {para && <p>Number is updated with {number}</p>}
      <button onClick={addNumber}>Add number</button>
    </div>
  )
}