import React from 'react'
import logo from "../../src/assets/vyzer-logo.png";
// or "../../assets/logo.png" depending on folder


function Header() {
  return (
    <header className="fixed top-0 left-0 w-full p-4">
      <img
        src={logo}
        alt="Vyzrd"
        className="h-20 m-2 w-auto"
      />
    </header>
  )
}

export default Header