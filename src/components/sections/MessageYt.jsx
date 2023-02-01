import React from 'react'
import Card from '../Message/Card'

const MessageYt = () => {
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
    <div className="message">
      <section>
        <div className="message-section">
          <div className="center">
            <h6 className="headline">
              bare your soul
            </h6>
            <h4 className="tophead">
              Listen To Life Transforming Messages            
            </h4>
          <div className="four-grid">
            {
              data.map(item => (
                <Card key={item.id} />
              ))
            }
          </div>
          <div>
            <button className="btn">
                listen to more messages
            </button>
          </div>
        </div>
        </div>

      </section>
    </div>
  )
}

export default MessageYt