import React from 'react'
import Img from '../assets/pastor.png'

const PastorCard = () => {
  return (
    <div className="center pastor-card">
      <div>
        <img src={Img} alt="pastorcard" />
      </div>
      <div>
        <h4>
          Apostle Arome Osayi 
        </h4>
        <h6>
          Set Man, RCN
        </h6>
        <p>
          President of Remnant Christian Network (RCN) Global
        </p>
      </div>
    </div>
  )
}

export default PastorCard