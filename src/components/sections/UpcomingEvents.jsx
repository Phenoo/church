import React from 'react'
import EventCard from '../Events/EventCard'

const UpcomingEvents = () => {
  const data = [{
    id: 1,
    name: 'behold the kingdom of god',
  },
  {
    id: 2,
    name: 'evangelism in our cities',
  },{
    id:3,
    name: 'event name goes here',
  },
  ]
  
  return (
    <div className='upcoming'>
      <section>
        <div className="center">
          <h6 className="headline">
            attend now!
          </h6>
          <h4 className="tophead">
            upcoming events
          </h4>
        </div>
        <br />
        <br />
        <div className="tri-grid">
          {
            data.map(item => (
              <EventCard item={item}  key={item.id}/>
            ))
          }
        </div>
      </section>
    </div>
  )
}

export default UpcomingEvents