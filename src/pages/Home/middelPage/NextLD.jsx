import React from 'react'
import Card from '../../../components/Card'
import { next_logo } from '../../../utils/ImagePath'

function NextLD() {
  const Product=[{title:"NExT Sim", card_logo:next_logo,product:"Integrated Climate Risk Management - Simulation",tm:"™"},
          {title:"NExT Sim+ ", card_logo:next_logo,product:"Integrated Climate Risk Management - Simulation",tm:"™"},
         
          
  ]
  return (
    <>
    <div className="row">
              {Product.map((item, index) => (
                    <div className="col-lg-4 col-md-12" key={index}><Card product={item.product} card_logo={item.card_logo} subtitle={item.subtitle} title={item.title} tm={item.tm} extra_subtitle={item.extra_subtitle} /></div>
                  ))}
          </div>
       
    </>
  )
}

export default NextLD