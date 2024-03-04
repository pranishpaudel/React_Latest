import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] =useState(15)

const addValue= () => {
  counter++;
  setCounter(counter)
}
const removeValue= () => {
  counter--;
  setCounter(counter)
}
  return (
    <>
  <h1>Pranish Poudel</h1>
  <h2>Counter value: {counter}</h2>
  <button onClick={addValue} >Add Value {counter}</button>
  <button onClick= {removeValue}>Remove Value {counter}</button>
  <br/>
  </>
  )
}

export default App
