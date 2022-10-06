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
    if (value.length === 0 && nextValue.length === 0) { return }
    if (operation.length === 0) {
      setValue((String((Number(value.join('')) * -1))).split(''))
    } else {
      setNextValue((String((Number(nextValue.join('')) * -1))).split(''))
    }
  }
  const changeOperation = (e) => {
    if (result) {
      setValue([...value, result])
    }
    if (operation.length > 1) { return }
    setOperation([...operation, e.target.innerHTML])
  }
  const calculate = () => {
    if (nextValue.length === 0) return
    const arr = value.concat(operation, nextValue)

    setResult((eval(arr.join(''))))

    setValue([])
    setNextValue([])
    setOperation([])
  }
  const calculatePercentage = () => {
    if (nextValue) { setNextValue(Number(nextValue.join('')) / 100) }
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
        calculatePercentage={calculatePercentage}
      />
    </div>
  )
}

export default App
