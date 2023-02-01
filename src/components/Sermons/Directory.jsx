import React from 'react'
import SermonCard from './SermonCard'
import Search from '../Search'

const Directory = () => {
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
        <div className="space-between">
          <span>
            <h4 className="tophead">
              sermons directory
            </h4>
          </span>
          <span>
            <Search />
          </span>
        </div>
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

export default Directory
