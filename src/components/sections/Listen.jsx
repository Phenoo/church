import React from 'react'

import SermonCard from '../Sermons/SermonCard'


const Listen = () => {
  const data = [{
    id: 1,
  },
  {
    id: 2,
  },{
    id:3,
  },
  {
    id:4,
  },
  ]
  return (
    <div className="sermon">
      <section>
        <div className="sermon-section">
          <div className="center">
            <h6 className="headline">
              bare your soul
            </h6>
            <h4 className="tophead">
              listen to the word of god
            </h4>
          </div>
          <div className="four-grid">
            {
              data.map(item => (
                <SermonCard key={item.id} />
              ))
            }
          </div>
        </div>
      </section>
    </div>
  )
}

export default Listen
