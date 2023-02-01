import React from 'react'
import HomeContainer from '../components/HomeContainer'
import EventCard from '../components/Events/EventCard'

const Events = () => {
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
  {
    id: 4,
    name: 'behold the kingdom of god',
  },
  {
    id: 5,
    name: 'evangelism in our cities',
  },{
    id:6,
    name: 'event name goes here',
  },{
    id: 7,
    name: 'behold the kingdom of god',
  },
  {
    id: 8,
    name: 'evangelism in our cities',
  },{
    id:9,
    name: 'event name goes here',
  },{
    id: 10,
    name: 'behold the kingdom of god',
  },
  {
    id: 11,
    name: 'evangelism in our cities',
  },{
    id:12,
    name: 'event name goes here',
  },
  ]
  return (
    <div>
      <HomeContainer  title='events' text='“Trust in the LORD, and do good; dwell in the land and befriend faithfulness”'  button='participate' />
      <div className='upcoming'>
    <section>
      <div className="tri-grid">
        {
          data.map(item => (
            <EventCard item={item}  key={item.id}/>
          ))
        }
      </div>
    </section>
  </div>
    </div>
  )
}



export default Events
