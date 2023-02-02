import React from 'react'
import HomeContainer from '../components/HomeContainer'
import {  FaMapPin } from 'react-icons/fa'

import Img1 from '../assets/item1.png'
import Img2 from '../assets/item2.png'

const Programme = () => {
  const data = [{
      id: 1,
      image: Img1,
      text: 'The Convergence Lagos',
      name: 'The Convergence is a bi-monthly event on the mainland area of Lagos that sees over 2000+ saints gather together on-site and online for a time of doctrine, punch and power. It holds on Friday and Saturday and it is always a time to bask in the word and glow in prayers. We are then ignited to take on both local and global challenges afterwards. It’s always a time of refreshing',
      venue: 'Academy Event Center, Plot 6, Lateef Jakande Road, Agidingbi, Ikeja Lagos State',
    },
    {
      id: 2,
      image: Img2,
      text: '10 Hours Prayer',
      name: 'Join the saints bi-monthly (twice a month) as we gain ascendancy and declare the mind of God captured in the place of prayer. It’s always a good time of intercession, warfare and petition. Apostle Paul admonished us to pray all kinds of prayers and 10 Hours Prayers is a place where we pray until something happens.      ',
      venue: 'Academy Event Center, Plot 6, Lateef Jakande Road, Agidingbi, Ikeja Lagos State',
    },{
      id:3,
      image: Img1,
      text: 'Community Bible Study',
      name: 'Join the saints on the mainland for an in-depth look into the perfect law of liberty every Monday at 6PM WAT.',
      venue: 'Academy Event Center, Plot 6, Lateef Jakande Road, Agidingbi, Ikeja Lagos State',
    },
    {
      id:4,
      image: Img2,
      text: 'Island Bible Study',
      name: 'Join the saints on the Island for an illuminating experience into God’s word every Friday at 6PM WAT.',
      venue: 'Academy Event Center, Plot 6, Lateef Jakande Road, Agidingbi, Ikeja Lagos State',
    },
    {
      id: 5,
      image: Img2,
      text: 'International Prophetic Conference',
      name: 'The International Prophetic Conference is an annual prophetic meeting in the South Western region of Nigeria where we gather at a camp for 3-days. It is a time we assemble and re-align ourselves with the current revelation position of the Spirit for the region.',
      venue: 'Academy Event Center, Plot 6, Lateef Jakande Road, Agidingbi, Ikeja Lagos State',
    },{
      id:6,
      image: Img1,
      text: 'The Voice of One Conference',
      name: 'The Voice of One Conference is a bi-monthly programme on the island area of Lagos where we see saints gather to receive marching orders from ‘The Voice of One’ amidst a myriad of voices that are speaking in the territory. It is the Island version of the Mainland’s Convergence',
      venue: 'Academy Event Center, Plot 6, Lateef Jakande Road, Agidingbi, Ikeja Lagos State',
    }
  ]
  return (
    <div className='program'>
      <HomeContainer title='About President' subtitle='Psalm 37:3' text='“Trust in the LORD, and do good; dwell in the land and befriend faithfulness”' button='read more' />
      <section>
        <div className='center'>
          <h6 className='headline'>
            our programmes
          </h6>
          <h4>
            RCN Lagos Programs And Activities
          </h4>
        </div>
        <div className='grid'>
          {
            data.map(item => (
              <article key={item.id} className='program-card'>
                <div className='image'>
                  <img src={item.image} alt={item.name} />
                </div>
                <div>
                  <h4>
                    {item.text}
                  </h4>
                  <p>
                    {item.name}
                  </p>
                </div>
                <br />
                <div className='flex'>
                  <span>
                    <FaMapPin />
                  </span>
                  <span>
                    <p>
                      {item.venue}
                    </p>
                  </span>
                </div>
              </article>
            ))
          }
        </div>
      </section>
    </div>
  )
}

export default Programme