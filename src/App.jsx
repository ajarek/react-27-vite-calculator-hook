import './App.css'
import { useState } from 'react'
import Header from './components/Header/Header'
import Display from './components/Display/Display'
import Keyboard from './components/Keyboard/Keyboard'

function App() {
  const [value, setValue] = useState([])
  const [operation, setOperation] = useState([])
  const [nextValue, setNextValue] = useState([])
  const [result, setResult] = useState(null)

  const displayValue = (e) => {
    setResult(null)
    if (operation.length === 0) {
      setValue([...value, e.target.innerHTML])
    } else {
      setNextValue([...nextValue, e.target.innerHTML])
    }
  }

  const displayClear = () => {
    setValue([])
    setNextValue([])
    setOperation([])
    setResult(null)
  }
  const changeValue = () => {
    if (operation.length === 0) {
      setValue((String((Number(value.join('')) * -1))).split(''))
    } else {
      setNextValue((String((Number(nextValue.join('')) * -1))).split(''))
    }
  }
  const changeOperation = (e) => {
    if (operation.length > 1) { return }
    setOperation([...operation, e.target.innerHTML])
  }
  const calculate = () => {
    const arr = value.concat(operation, nextValue)
    // eslint-disable-next-line no-eval
    setResult(eval(arr.join('')))
    setValue([])
    setNextValue([])
    setOperation([])
  }
  return (
    <div
      className={'App'}
    >
      <Header />
      <Display>
        {result}
        {operation.length === 0 ? value : nextValue}
      </Display>
      <Keyboard
        onClick={displayValue}
        onClear={displayClear}
        changeValue={changeValue}
        changeOperation={changeOperation}
        equal={calculate}
      />
    </div>
  )
}

export default App
