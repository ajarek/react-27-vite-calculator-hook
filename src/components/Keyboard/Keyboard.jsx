import React from 'react'
import './Keyboard.css'

function Keyboard() {
  return (
    <div
      className={'keyboard'}
    >
      <button className={'btn light'} type={'button'}>AC</button>
      <button className={'btn light'} type={'button'}>+/-</button>
      <button className={'btn light'} type={'button'}>%</button>
      <button className={'btn operation'} type={'button'}>/</button>
      <button className={'btn'} type={'button'}>7</button>
      <button className={'btn'} type={'button'}>8</button>
      <button className={'btn'} type={'button'}>9</button>
      <button className={'btn operation'} type={'button'}>*</button>
      <button className={'btn'} type={'button'}>4</button>
      <button className={'btn'} type={'button'}>5</button>
      <button className={'btn'} type={'button'}>6</button>
      <button className={'btn operation'} type={'button'}>-</button>
      <button className={'btn'} type={'button'}>1</button>
      <button className={'btn'} type={'button'}>2</button>
      <button className={'btn'} type={'button'}>3</button>
      <button className={'btn operation'} type={'button'}>+</button>
      <button className={'btn null'} type={'button'}>0</button>
      <button className={'btn'} type={'button'}>.</button>
      <button className={'btn'} type={'button'}>=</button>
    </div>
  )
}

export default Keyboard