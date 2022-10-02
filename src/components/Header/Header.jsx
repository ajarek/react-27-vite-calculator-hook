import React from 'react'
import './Header.css'
import { FaSignal, FaWifi, FaBatteryHalf } from 'react-icons/fa'

function Header() {
  return (
    <div
      className={'header'}
    >
      9:41
      <div
        className={'wrapper'}
      >
        <FaSignal />
        <FaWifi />
        <FaBatteryHalf />
      </div>

    </div>
  )
}

export default Header
