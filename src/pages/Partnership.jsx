import React from 'react'
import HomeContainer from '../components/HomeContainer'


const Partnership = () => {
  return (
    <div className='partner-page'>
      <HomeContainer  title='Partnership' text='“Trust in the LORD, and do good; dwell in the land and befriend faithfulness”'  button='join us'  />
      <section>
        <h4 className="tophead">
          REMNANT KINGDOM STEWARD (RKS)
        </h4>
        <p>
            This serves to provide a systematic framework for the ministry’s partnership initiative in direct fulfillment of the corporate mandate of the network.
          In view of the various projects embarked by the ministry, it necessitates that we strategically build a storehouse of resources in anticipation of the day-to-day demands of the work.
          <br />
          <br />
          The ministry is saddled with a huge task to bear the yoke side-by-side the Master, hence the need to create this platform to accommodate the various cares: in-reach and out-reach, of this divine assignment
        </p>
        <div className="tri-grid">
          <article className="center">
            <h4>
              our mission
            </h4>
            <p>
              To effectively mobilize & deploy resources for the building of an apostolic community where the weak becomes strong for an active participation in the ministry of the word and prayers through:
            </p>
          </article>
          <article className="center">
            <h4>
              our vision
            </h4>
            <p>
              Raising strong Kingdom pillars. 
              We aim to raise people who are passionately committed to the advancement of God’s Kingdom by first giving themselves to the Lord; and then the resources entrusted in their hands to His work.
            </p>
          </article>
          <article className="center">
            <h4>
              our goals
            </h4>
            {/* <ul> */}
              <li>
                Missions and Outreaches
              </li>
              <li>
                Church Planting and Support
              </li>
              <li>
                Welfare And Helps
              </li>
              <li>
                Community Development Initiatives
              </li>
            {/* </ul> */}
          </article>
        </div>
        <div>
          <p>
            RCN Remnant Kingdom Stewards (RKS) covers the global network of believers, who are committed to the Biblical principles of righteous living.
            Our goal is to connect with the committed pillars of the ministry, provide a detailed reporting system and reinforce the set objectives of the ministry.
            <br />
            <br />
            The result is an informed platform for various forms of financial engagement that strengthen the mutuality of our covenant relationship as we see in 2 Corinthians 9:6-14.
            <br />
            <br />
            The early church forged such a synergy in resources in Act 4:32 that greatly impacted the degree of power available to the Apostle in Act 4:33 and ensured that no one lacked. Acts4:34
            <br />
            <br />
            The committee members are persons in the ministry who have shared the vision with the Set-Man in ensuring that the mandate of the Lord committed to him, towards building a strong Apostolic Christian Community, is actualized.
          </p>
          <br />
          <div>
            <p>
              Our responsibilities therefore are outlined as follows:
            </p>
            <li>
              Develop and manage a database of partners
            </li>
            <li>
              Organize events for partners such as partners conferences and gala dinner
            </li>
            <li>
              Periodic articles and newsletters posted on the website for partners
            </li>
            <li>
              Prayer requests and partners’ welfare
            </li>
            <li>
              Reporting and audit of funds from partners.
            </li>
          </div>
          <br />
          <br />
          <br />
          <br />
          <button className="button">
            become a partner
          </button>
        </div>
      </section>
    </div>
  )
}

export default Partnership