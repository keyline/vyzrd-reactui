import React from 'react'
import Card from '../../../components/Card'
import { climate_logo } from '../../../utils/ImagePath'
import { climate_logo2 } from '../../../utils/ImagePath'
import { climate_logo3 } from '../../../utils/ImagePath'
import { climate_logo4 } from '../../../utils/ImagePath'

function ClimateRisk() {
  const Product=[{title:"climaTick S2",subtitle:"Base", card_logo:climate_logo,product:"Integrated Climate Risk Analysis",tm:"™"},
          {title:"climaTick S2",subtitle:" Core ", card_logo:climate_logo,product:"Financial and Enterprise Risk Impact Assessment",tm:"™"},
          {title:"Climatick S2",subtitle:"Plus", card_logo:climate_logo,product:"Detailed Integrated Climate Risk Analysis",tm:"™"},
          {title:"climaTick ",subtitle:"pro", card_logo:climate_logo,product:"Advanced Integrated Climate Risk Simulation & Analysis ",tm:"™"},
          {title:"climaTick",subtitle:"Zero", card_logo:climate_logo2,product:"Integrated Climate Risk Analysis & Net Zero Modelling",tm:"™"},
          {title:"climaGov", card_logo:climate_logo3,product:"Financial and Enterprise Risk Impact Assessment",tm:"™"},
          {title:"Financial Markets", card_logo:climate_logo4,product:"Financial Markets Climate Risk Impact Assessment"},
          
  ]
  return (
    <>
    <div className="row justify-content-center ">
          {Product.map((item, index) => (
                <div className="col-lg-4 col-md-12" key={index}><Card product={item.product} card_logo={item.card_logo} subtitle={item.subtitle} title={item.title} tm={item.tm} /></div>
              ))}
      </div>
       
    </>
  )
}

export default ClimateRisk