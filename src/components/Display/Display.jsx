import React from 'react'
import './Display.css'

function Display({ children }) {
  return (
    <div
      className={'display'}
    >
      {children}

    </div>
  )
}

export default Display
