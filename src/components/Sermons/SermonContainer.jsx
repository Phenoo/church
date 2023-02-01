import React from 'react'
import SermonCard from './SermonCard'

const SermonContainer = () => {
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
  {
    id: 5,
  },{
    id:6,
  },
  {
    id:7,
  },  {
    id: 8,
  },{
    id:9,
  },
  {
    id:10,
  },
  ]
  return (
    <div>
        <h4 className="tophead">
          latest sermons
        </h4>
        <div className="four-grid">
            {
              data.map(item => (
                <SermonCard key={item.id} />
              ))
            }
          </div>
    </div>
  )
}

export default SermonContainer