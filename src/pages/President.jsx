import React from 'react'
import HomeContainer from '../components/HomeContainer'
import Img from '../assets/pastor.png'

const President = () => {
  return (
    <div className='president'>
      <HomeContainer title='About President' subtitle='Psalm 37:3' text='“Trust in the LORD, and do good; dwell in the land and befriend faithfulness”' button='read more' />
      <section>
        <div className="flex">
          <div>
            <h6 className='headline'>
              president
            </h6>
            <br />
            <h4 className='tophead'>
              Set Man, Remnant Christian Network
            </h4>
            <br />
            <p>
              Arome Osayi was born on 2nd December, 1977, the ﬁfth child in a family of seven, to late Chief Paul Ameh Osayi – a career civil servant and Mrs. Mamuna Osayi – a career nurse in the capital city of Makurdi, Benue State, Nigeria. His parents were devout Christians and were fully invested in raising him and his siblings in the ways of the Lord. His parents’ commitment to God would yield hundred percent result as he and all his six siblings would personally get to know the Lord at a young age.
              <br />
              <br />
              Arome got saved at the age of seven. His battle for destiny began in his mother’s womb as he was born with facial palsy – which massively impaired his speech and left half of his face paralysed. Though vocally disadvantaged from birth, his getting to meet the Lord early enough on account of his parents’ commitment to the Lord set him on a great collision course with destiny.
            </p>
          </div>
          <div className='image'>
            <img src={Img} alt="pastor" />
          </div>
        </div>
        <br />
        <p>
        His tongue would be loosened in a momentous encounter he had with Jesus at the age of thirteen. It was at this encounter that he received the call to be God’s mouthpiece to the nations. His teenage years right into his mid twenties were replete with pushing, stretching, daring and adventuring into the full gamut of this call. His progress was slow but steady; his strides in the pursuit of God were rhythmic and his following o f Jesus Christ has been a concatenation of obedience, consistency and service born out of deep-seated hunger and love for God.
        </p>
        <br />
        <p>
          In October 2002, shortly after completing his tertiary education with a B.Sc. in Chemistry from Benue State University, Makurdi, and being on the cusp of successfully rounding off the mandatory one-year national service in Kano State, Nigeria, his dealings with God culminated in an apostolic mandate with the thrust to reinforce, intensify and scale up the apostolic recovery in the body of Christ across the nations. And in December 2006, he founded the Remnant Christian Network.
          <br /><br />
          In recent years, Remnant Christian Network has witnessed such a transcontinental upsurge as it rapidly morphs into a place where the gospel of the kingdom of Christ is preached with great grace in revelation, inspiration, illumination, signs, miracles, and prophetic breakthroughs as God conﬁrms His word in the mouth of His servant and as men come into their ordinations in God. Its borderless, tentacular penetration across the nations conspicuously places it in the vanguard of the current apostolic recovery taking place on the planet from the Sub-Saharan African front. The Network is run with a divine policy direction from Isaiah 37:31
        </p>
        <br />
        <p>
          Arome Osayi has a summarized mission statement: ”To strive towards the rebirth of Apostolic Christianity”.
          <br />
          <br />

          He believes that in the years to come, people from all nations of the world will come to the RCN Embassy which is the ministry’s international headquarters domiciled in Makurdi, Benue State, Nigeria to experience the true God as well as get in tune with accurate apostolic patterns that they can replicate in their different nations. The RCN Embassy is currently under construction.
          <br />
          <br />
          Arome’s apostolic mandate is two-pronged: stretching from within the body of Christ to the marketplace. In keeping with the schematics of this mandate, in 2004, he got a job in the then newly- created PPPRA (Petroleum Products Pricing Regulatory Agency) an organisation charged with the responsibility of regulating the prices of petroleum products sold and consumed in Nigeria as a pioneer staff and would go on to meritoriously serve there for sixteen years. So, for nearly two decades he has been an apostle to the body of Christ and in the marketplace.
          Arome Osayi is an apostle of the Lord Jesus Christ, author, mentor, entrepreneur and philanthropist. He is married to Dinna, and their union is blessed with two children
        </p>
        <br />
        <br />

        <h4>
          Apostle Arome Osayi 
        </h4>
        <h6>
          The Set Man of Remnant Christian Network (RCN) Global
        </h6>
      </section>
    </div>
  )
}

export default President
