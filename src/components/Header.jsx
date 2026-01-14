import React from 'react'
import { logo } from '../utils/ImagePath'

// or "../../assets/logo.png" depending on folder


function Header() {
  return (
    <header className="w-full">
      <div className="logo login_apptop">
        <img
          src={logo}
          alt="Vyzrd"
          className=""
        />
      </div>
    </header>
  )
}

export default Header