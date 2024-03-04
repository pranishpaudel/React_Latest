import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


function MyButton(){
  return <h1>Click Me</h1>
}


ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
