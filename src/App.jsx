import { useState } from 'react'
import reactLogo from './assets/react.svg'
import workintech from '/workintech.svg'
import './App.css'
import Header from './assets/components/Header'
import Content from './assets/components/Content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
     <Content />
    </>
  )
}

export default App
