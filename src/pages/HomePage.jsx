import React from 'react'
import HomeContainer from '../components/HomeContainer'
import UpcomingEvents from '../components/sections/UpcomingEvents'


import Img1 from '../assets/image1.jpg'
import Offer from '../components/sections/Offer'
import Listen from '../components/sections/Listen'
import PartnerShipSection from '../components/sections/PartnerShipSection'
import BlogSection from '../components/sections/BlogSection'
import Testimonials from '../components/sections/Testimonials'
import MessageYt from '../components/sections/MessageYt'
import Subscribe from '../components/Subscribe'


const HomePage = () => {
  return (
    <>
      <HomeContainer image={Img1} subtitle='Psalm 37:3' text='“Trust in the LORD, and do good; dwell in the land and befriend faithfulness”' button='read more' />
      <Offer />
      <UpcomingEvents />
      <Listen />
      <PartnerShipSection />
      <BlogSection />
      <Testimonials />
      <MessageYt />
      <Subscribe />
    </>
  )
}

export default HomePage