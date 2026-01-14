import React from 'react'
import { card_logo } from '../utils/ImagePath'
import "./Card.css"
function Card({product="Rapid ESG Risk Screening"}) {
  return (
    <>
      <div class="flip-card" id="esg4dPrism">
            <div class="flip-content">
                <div class="front">
                    <a href="licenseInformation.php?pid=33" class="dm-card-item active">
                        <div class="vyrProduct-logo">
                            <img src={card_logo} alt="" />
                        </div>
                        <span>E<small>$</small>G <span class="vyrScript">Prism </span><sup> ™</sup> <span class="vyrScript"> </span> </span>
                        <div class="bottom-text">{product} </div>
                    </a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Card
