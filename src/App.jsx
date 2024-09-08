import { useState } from 'react'
import reactLogo from './assets/react.svg'
import workintech from '/workintech.svg'
import './App.css'
import Header from './assets/components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
    </>
  )
}

export default App
