import React from 'react'
import DasboardHeader from '../components/DasboardHeader'
import Footer from '../components/Footer'

export default function DasboardLayouts({children}) {
  return (
    <div>
      <DasboardHeader/>
      <div className='main_box'>{children}</div>
      <Footer />
    </div>
  )
}
