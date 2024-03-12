import { useState } from 'react'
import Task from './Task';


function App() {
  const [counter, setCounter] = useState(0)
 
  // //== 01- hard code value updating, without useState (dont works) ===//
  // let counter = 15;
  // const addValue = () => {
  //   console.log("value added" , Math.random());

  //   console.log(counter, ">>> counter old value");
  //   counter = counter + 1;
  //   console.log(counter, ">>> counter updated value");
  // }

  //== 02- with useState (update works) ===//
  const addValue = () => {
    // //== below will add counter+=1, even though itsmentioned three times ==//
    // setCounter(counter+1);
    // setCounter(counter+1);
    // setCounter(counter+1);

    //== below will add counter += 3 ==//
    setCounter(prevVal => prevVal + 1);
    setCounter(prevVal => prevVal + 1);
    setCounter(prevVal => prevVal + 1);
  }

  const decValue = () => {
    setCounter(counter-1);
  }

  // console.log(setCounter, ">>> setCounter function")
  console.log(counter, "counter value");
  return (
    <>
      <h1>Chai Aur React (Counter)</h1>

      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={decValue}>Decrease Value</button>

      <Task />
    </>
  )
}

export default App
