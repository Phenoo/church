import React from 'react'

import { CiLocationOn } from 'react-icons/ci'

import Img1 from '../../assets/image1.jpg'
import { AiOutlineClockCircle } from 'react-icons/ai'

const EventCard = ({item}) => {
  return (
    <article className='event-card'>
      <div>
        <img src={Img1} alt="event" />
      </div>
      <div>
          <h4>
              {item.name}
            </h4>
            <h6>
              12-February-2023
            </h6>
            <p>
              Beloved! Join us, as we spread the word of God to brethren, come along and win a soul for Christ...
            </p>
            <div className="flex">
              <span>
                <CiLocationOn />
              </span>
              <span>
                <p>
                  Location: Church Premise
                </p>
              </span>
            </div>
            <div className="flex">
              <span>
                <AiOutlineClockCircle />
              </span>
              <span>
                <p>
                  Time: 3pm WAT
                </p>
              </span>
            </div>
        </div>
    </article>
  )
}

export default EventCard