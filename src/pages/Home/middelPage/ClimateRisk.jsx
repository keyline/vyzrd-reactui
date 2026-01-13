import React from 'react'
import Card from '../../../components/Card'

function ClimateRisk() {
  const Product=[{title:'test2'},
          {title:'test2'},
          {title:'test2'},
          {title:'test2'},
          {title:'test2'},
          {title:'test2'},
          {title:'test2'},
          {title:'test2'},
          {title:'test2'},
          {title:'test2'},
          {title:'test2'},
  ]
  return (
    <>
    <div className="row">
          {Product.map((item, index) => (
                <div className="col-lg-4 col-md-12" key={index}><Card product={item.title} /></div>
              ))}
      </div>
       
    </>
  )
}

export default ClimateRisk