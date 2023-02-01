import React from 'react'
import TestCard from '../Testimonial/TestCard'

const Testimonials = () => {
  const data = [{
      id: 1,
      name: 'Caroline Adeyanju',
      text: "What the LORD cannot do doesn’t exist..."
    },
    {
      id: 2,
      name: 'Joseph Chukwuemeka',
      text: "Because HE lives, I can face tomorrow..."
    }
  ]
  return (
    <div className="testimonial-section">
      <section>
        <div className="center">
          <h6 className="headline">
            testimonials
          </h6>
          <h4 className="tophead">
            Hear What People Have To Say!
          </h4>
        </div>
        <br />
        <div className="grid">
        {
            data.map(item => (
              <TestCard item={item}  key={item.id}/>
            ))
          }
        </div> 
      </section>
    </div>  )
}

export default Testimonials