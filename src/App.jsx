import './App.css'
import { useState } from 'react'
import Header from './components/Header/Header'
import Display from './components/Display/Display'
import Keyboard from './components/Keyboard/Keyboard'

function App() {
  const [value, setValue] = useState([])

  const displayValue = (e) => {
    setValue([...value, e.target.innerHTML])
  }
  const displayClear = () => {
    setValue([])
  }
  const changeValue = () => {
    setValue((String((Number(value.join('')) * -1))).split(''))
  }
  return (
    <div
      className={'App'}
    >
      <Header />
      <Display>{value}</Display>
      <Keyboard
        onClick={displayValue}
        onClear={displayClear}
        changeValue={changeValue}
      />
    </div>
  )
}

export default App
