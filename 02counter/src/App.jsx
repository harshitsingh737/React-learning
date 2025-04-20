import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter,setCounter] = useState(15)
  // let counter = 5

const addValue = () => {
//  console.log("clicked" , counter);
//  counter = counter + 1
// setCounter(counter+1)


// this will not add +3 on click because it the the function of useState where it will take the bunch of it and treat it as one
//  setCounter(counter+1)
//  setCounter(counter+1)
//  setCounter(counter+1)

// solution
setCounter(prevCounter => prevCounter+1)
setCounter(prevCounter => prevCounter+1)
setCounter(prevCounter => prevCounter+1)
setCounter(prevCounter => prevCounter+1)
}
 

const removeValue = () => {
  setCounter(counter-1)
}
  

  return (
   <>
    <h1>Chai or react</h1>
    <h2>Counter value:{counter}</h2>

    <button 
    onClick={addValue}>Add Value {counter}</button>
    <br/>
    <button
    onClick={removeValue}
    >Remove value {counter}</button>
    <p>footer : {counter}</p>
   </>
  )
}

export default App
