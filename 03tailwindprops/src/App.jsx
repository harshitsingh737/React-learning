import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Cards'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username :"Harshit",
    age:23
  }

  let newArr = [1,2,3]

  return (
    <> 
    <h1 className='bg-red-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>

    {/* <Card username="chaiorcode" someObj = {myObj} someArr = {newArr}/> */}
    <Card username="chaiorcode" Text ="I am a full stack developer"/>
    <Card username="Harshit" Text ="I am a backend developer"/>
    </>
  )
}

export default App
