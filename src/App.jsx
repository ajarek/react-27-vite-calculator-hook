import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Display from './components/Display/Display'
import Keyboard from './components/Keyboard/Keyboard'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log(count)
  }, [count])

  return (
    <div
      className={'App'}
    >
      <Header />
      <Display />
      <Keyboard />
    </div>
  )
}

export default App
