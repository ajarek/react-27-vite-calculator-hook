import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'

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
    </div>
  )
}

export default App
