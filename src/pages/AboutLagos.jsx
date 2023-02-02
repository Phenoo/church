import React from 'react'
import HomeContainer from '../components/HomeContainer'
import PastorCard from '../components/PastorCard'


import Img1 from '../assets/item1.png'
import Img2 from '../assets/item2.png'

const AboutLagos = () => {
  const data = [{
    id: 1,
    image: Img1,
    text: 'Media and Publicity',
    name: "The Media and Publicity department is the Information Technology and Public Relations arm of Remnant Christian Network (RCN), Lagos State. The responsibility of this unit include (but are not restricted to) graphic design of flyers and banners for events, video and audio recording of sermons, distribution of sermons, photography, creating video, audio and image content for social media, disseminating relevant information of the Ministry’s events and sermons, managing Remnant Christian Network’s social media platforms"
  },
  {
    id: 2,
    image: Img2,
    text: 'Ushering',
    name: "David declared, “I had rather be a doorkeeper in the house of my God, than to dwell in the tents of wickedness”. Ps 84:10b. This is the message that underscores the ministry of Remnant Christian Network Ushers. RCN ushers man the gates and act as watchmen during all events put together by the house. Their duties include maintaining prayer cover throughout meetings, organizing and directing the seating arrangements, collection of tithes and offerings, taking headcounts, providing security and attending to members that are slain in the spirit.",
  },{
    id:3,
    image: Img2,
    text: 'Logistics',
    name: 'The logistics department is the sweatshop of RCN, Lagos. They are tasked with the responsibility of organizing travel itinerary and lodging for guests as well as the movement of equipment for events and ensuring the security of guests.',
  },
  {
    id:4,
    image: Img1,
    text: 'Choir',
    name: 'The Sweet Psalmists choir is a group of worship leaders whose spiritual ears are sharpened to hear the sound from the third realm and whose sole desire is to sing the song of the Lord and lead the people of God in procession to the throne room. They are David’s mighty men',
  }
]
  return (
    <div className='global'>
      <HomeContainer title='About President' subtitle='Psalm 37:3' text='“Trust in the LORD, and do good; dwell in the land and befriend faithfulness”' button='read more' />
      <section>
        <div className="flex">
          <div>
            <h6 className='headline'>
              REMNANT CHRISTIAN NETWORK
            </h6>
            <br />
            <h4 className='tophead'>
              The Birth Of RCN Lagos
            </h4>
            <br />
            <p>
              Apostle Arome came into my life at a time when my business was adrift. The year was 2015 and I was battling a multitude of issues and had pretty much put ministry on hold. My younger brother, who felt that I needed sufficient spiritual covering and fathering, which I wasn’t getting at my place of worship then, handed me Apostle Arome’s messages. I played the message titled ‘Staying Power’ and immediately got an earful of someone blasting in tongues. It was Apostle. I was instantly captivated. I thought to myself, “who is this man? Where is he from?” He reminded me of my church in Sokoto and I couldn’t help feeling at home. I listened to that message several times that day and afterwards collected his number.
              <br />
              <br />
              We chatted for six months and eventually organized a meeting. The first day he met me, the first words out of his mouth were “When are you going to start what God has called you to do?” He began to hold in-door bible studies with me and my wife, Pastor Grace, Pastor Victor and his wife, Motunrayo and Pastor Abbey. We ran those bible studies till very late at night, twice a week. We prayed, studied the word and ate sumptuous meals prepared by my wife before we called it a night
            </p>
          </div>
          <div>
            <PastorCard />
          </div>
        </div>
        <p>
          Apostle Arome was so keen on me fulfilling God’s call upon my life that when our team of five decided to hold our inaugural summit under the auspices of Global Intercessors Network on the 14th of August, 2015, Apostle Arome gave us the cash we used to secure the venue (N45,000) as well as paid me an honorarium when we concluded the meeting. I was blown away by his selflessness. We planned to hold the second summit in December of the same year, but it did not work out. The following year, when we were trying to work out the modalities of registering Global Intercessors Network ministry, God spoke to us, questioning why we wanted to go ahead with Global Intercessors Network when he had already sent Apostle to teach, train and equip in this generation. He told us to give up Global Intercessors Network and join the Remnant Christian Network bandwagon. This we did gladly and haven’t looked back since. We continued with in-door bible studies and during one of those meetings, Apostle singled me out for prayers and it was then the mantle of the leadership of Remnant Christian Network, Lagos was laid upon me.
          <br />
          <br />

          Although RCN Lagos takes its bearing from Remnant Christian Network, Makurdi, its shape, rhythm and growth has been entirely organic. This is possible because the father of the commission Apostle Arome does not believe in emphasizing money or cloning ministries or persons. RCN Lagos runs according to the uniqueness of our territory because Apostle believes ministries should operate according to the uniqueness of their territory, therefore although all branches are pursuing the same vision, they are quite different in outlook and structure.
          <br />
          <br />
          RCN Lagos is simply a ministry responding to the burdens in our generation and I am humbled to be leading that charge
        </p>
        <div>
          <br />
          <br />
          <br />
          <br />
          <div className='center'>
            <h6 className='headline'>
              REMNANT CHRISTIAN NETWORK
            </h6>
            <h4 className='tophead'>
              The Departments
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
              </article>
            ))
          }
        </div>
        </div>
      </section>
    </div>
  )
}


export default AboutLagos