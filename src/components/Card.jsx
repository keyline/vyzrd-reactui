import React from 'react'
import { Link } from "react-router-dom";
// import { card_logo } from '../utils/ImagePath'
import "./Card.css"
function Card({product="Rapid ESG Risk Screening",card_logo,subtitle,title,tm,extra_subtitle,status}) {
  return (
    <>
      <div className="flip-card" id="esg4dPrism">
            <div className="flip-content">
                <div class="front">
                    <Link to="" className={`dm-card-item ${status === 'deactivated' ? 'deactivated' : 'active'}`}>
                        <div className="vyrProduct-logo">
                            <img src={card_logo} alt="" />
                        </div>
                        <span>{title}<span className="vyrScript">{extra_subtitle}</span> <sup> {tm}</sup> <span className="vyrScript">{subtitle} </span> <span className="vyrScript"> </span> </span>
                        <div className="bottom-text">{product} </div>
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Card
