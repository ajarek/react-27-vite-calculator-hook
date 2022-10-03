import React from 'react'
import './Keyboard.css'

function Keyboard(props) {
  const { onClick, onClear, changeValue } = props
  const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.']

  return (
    <div
      className={'keyboard'}
    >
      <div className={'section1'}>
        <button type={'button'} className={'btn light'} onClick={onClear}>AC</button>
        <button type={'button'} className={'btn light'} onClick={changeValue}>+/-</button>
        <button type={'button'} className={'btn light'}>%</button>
        {numbers.map((item) => (
          <button
            type={'button'}
            key={item}
            className={item === 0 ? 'btn btn-null' : 'btn '}
            onClick={onClick}
          >
            {item}
          </button>
        ))}
      </div>
      <div className={'section2'}>
        <button type={'button'} className={'btn operation'}>/</button>
        <button type={'button'} className={'btn operation'}>*</button>
        <button type={'button'} className={'btn operation'}>-</button>
        <button type={'button'} className={'btn operation'}>+</button>
        <button type={'button'} className={'btn operation'}>=</button>
      </div>
    </div>
  )
}

export default Keyboard
