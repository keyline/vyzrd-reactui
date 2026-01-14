import React from 'react'
import Card from '../../../components/Card'
import { esg_logo } from '../../../utils/ImagePath'
import { climate_logo4 } from '../../../utils/ImagePath'

function ESGEffectiveness() {
 const Product=[
           {title:"E$G ",extra_subtitle:"Prism", card_logo:esg_logo,product:"Rapid ESG Risk Screening  ",tm:"™"},
          {title:"E$G ",extra_subtitle:"Prism",subtitle:"plus", card_logo:esg_logo,product:"Extended ESG Risk Screening ",tm:"™"},
           {title:"E$G ",extra_subtitle:"4D", card_logo:esg_logo,product:"ESG Due Diligence  ",tm:"™"},



           {title:"E$G ",extra_subtitle:"4D",subtitle:"plus", card_logo:esg_logo,product:"Extended ESG Due Diligence ",tm:"™"},
           {title:"E$G ",extra_subtitle:"Invest ",subtitle:"pro", card_logo:esg_logo,product:"ESG Investment for Improved Org. Perf. and Shareholder Returns ",tm:"™"},
           {title:"E$G ",extra_subtitle:"Invest ", card_logo:esg_logo,product:"ESG Investment for Improved Org. Perf. and Shareholder Returns  ",tm:"™"},


           {title:"E$G ",extra_subtitle:"ASPIRE", card_logo:esg_logo,product:"Rapid Shadow Ratings & Maturity Assessment ",tm:"™"},
           {title:"E$G ",extra_subtitle:"ASPIRE Plus", card_logo:esg_logo,product:"Detailed Shadow Ratings & Maturity Assessment ",tm:"™"},
           {title:"E$G ",extra_subtitle:"ASPIRE Pro", card_logo:esg_logo,product:"Shadown Ratings, Maturity Assessment and Double Materiality Assessment  ",tm:"™"},


           {title:"E$G ",extra_subtitle:"4D",subtitle:"-Assure ", card_logo:esg_logo,product:"Comprehensive ESG assurance ",tm:"™" ,status:"deactivated"},
           {title:"Financial Markets ",card_logo:climate_logo4,product:"Financial Markets ESG 4D Assessment ",},
           
   ]
  return (
    <>
    <div className="row justify-content-center ">
              {Product.map((item, index) => (
                    <div className="col-lg-4 col-md-12" key={index}><Card product={item.product} card_logo={item.card_logo} subtitle={item.subtitle} title={item.title} tm={item.tm} extra_subtitle={item.extra_subtitle} status={item.status} /></div>
                  ))}
          </div>
       
    </>
  )
}

export default ESGEffectiveness