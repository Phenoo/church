import React from 'react'

import Img1 from '../../assets/image1.jpg'


const SermonCard = () => {
  return (
    <div className='sermon-card'>
      <div className='image'>
        <img src={Img1} alt="audio" />
      </div>
      <div>
        <h6>
        Title Of The Sermon Here
        </h6>
        <p>
          Pastor First Name Last name
        </p>
        <button>
          download mp3
        </button>
      </div>
    </div>
  )
}

export default SermonCard
