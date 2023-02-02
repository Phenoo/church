import React from 'react'
import HomeContainer from '../components/HomeContainer'
 

const Pastors = () => {
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
  },{
    id:11,
  },
  {
    id:12,
  },
  ]
  return (
    <div className='pastor'>
      <HomeContainer title='Pastors' subtitle='Psalm 37:3' text='“Trust in the LORD, and do good; dwell in the land and befriend faithfulness”' button='read more' />
      <section>
        <div className='center'>
          <h6 className='headline'>
            pastors
          </h6>
          <h4>
            Ministers With Vision
          </h4>
        </div>
        <div className='four-grid'>
          {
            data.map(item => (
              <article key={item.id} className='item'>
                <div className='image'></div>
                <h6>
                  Rev. Austin Ukporhe
                </h6>
                <p>
                  Set Man
                </p>
              </article>
            ))
          }
        </div>
      </section>
    </div>
  )
}

export default Pastors