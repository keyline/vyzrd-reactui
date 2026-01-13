import React from 'react'
import "./Card.css"
function Card({product="Rapid ESG Risk Screening"}) {
  return (
    <>
      <div class="flip-card" id="esg4dPrism">
            <div class="flip-content">
                <div class="front">
                    <a href="licenseInformation.php?pid=33" class="dm-card-item active">
                        <div class="vyrProduct-logo">
                            <img src="../src/assets/Images/udb_logopro6.jpg" alt="" />
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
