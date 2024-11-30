import { useState } from 'react'

import './App.css'
import Header from "./components/Header"
import Selection from './components/Selection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       
         <Header />
         <Selection />
     
    </>
  )
}

export default App
