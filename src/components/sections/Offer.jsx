import React from 'react'

import { CiGlobe } from 'react-icons/ci'
import {AiOutlineHeart} from 'react-icons/ai'
import {BiDiamond} from 'react-icons/bi'
import { HiOutlineUserGroup } from 'react-icons/hi'



const Offer = () => {
  const data = [{
    id: 1,
    svg: <CiGlobe />,
    name: 'our mission',
    desc: "Preservation of biblical doctrine and living out the truth of God's word as it is written in the Holy Scriptures"
  },
  {
    id: 2,
    svg: <AiOutlineHeart />,
    name: 'our vision',
    desc: 'To equip ministers of the gospel of our Lord Jesus Christ in Africa and Europe to become effective in the work of the ministry'
  },{
    id:3,
    svg: <HiOutlineUserGroup />,
    name: 'our community',
    desc: 'Our community is one that strives for the rebirth of Apostolic Christianity in our generation'
  },
  {
    id: 4,
    svg: <BiDiamond />,
    name: 'our values',
    desc: 'Dedication, Relevance, Excellence, Accountability, Resilience, Forbearance, Faithfulness'
  },

  ]
  return (
    <div className='offer'>
      <section>
        <div className='info'>
          <p>
          We are a ministry with a single minded focus on restoring the prayer commission of the church in fulfillment of Jesus’ proclamation in Matthew 21: 13 that 
          “My house shall be called the house of prayer”.
          </p>
        </div>
        <div className="offer-container">
          <div className="four-grid">
            {
              data.map((item) => (
                <article key={item.id} className="center offer-item">
                  <span>
                    {item.svg}
                  </span>
                  <h6>
                    {item.name}
                  </h6>
                  <p>
                    {item.desc}
                  </p>
                </article>
              ))
            }
          </div>
        </div>
      </section>
    </div>
  )
}

export default Offer