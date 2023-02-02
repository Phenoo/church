import Logo from './Logo'
import Subscribe from './Subscribe'

import { FaChevronRight } from 'react-icons/fa'
const Footer = () => {
  const social = ['facebook', 'instagram', 'twitter', 'youtube']
  const useful = ['sermons', 'partnerships', 'events', 'blogs']
  return (
      <footer>
        <section>
          <div className='four-grid'>
            <div>
              <div>
                <Logo />
              </div>
              <p>
              Location: Guest House, Plot 6A Lateef Jakande Road, Agindingbi 101212, Ikeja, Lagos State.
              </p>
              <p>
              Contact: +234 818 625 3251/+234 906 176 7430
              </p>
              <p>
              Email: info@rcnlagos.org
              </p>
            </div>
            <div>
              <h6>
                Useful Links
              </h6>
              <ul>
                  {
                    useful.map((item, index) => (
                      <li key={index}>
                        <a href="#a" className='flex'>
                          <span>
                            <FaChevronRight />
                          </span>
                          <span>
                            <p>{item}</p>
                          </span>
                        </a>
                    </li>
                    ))
                  }
                </ul>
            </div>
            <div>
              <h6>
                Social Media
              </h6>
                <ul>
                  {
                    social.map((item, index) => (
                      <li key={index}>
                        <a href="#a" className='flex'>
                          <span>
                            <FaChevronRight />
                          </span>
                          <span>
                            <p>{item}</p>
                          </span>
                        </a>
                    </li>
                    ))
                  }
                </ul>
            </div>
            <div>
              <h6>
              Join Us Live on MixLR
              </h6>
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
            </div>
          </div>
          <div className='divider' />

          <div className='copytext'>
            <p>
              &copy; Copyright rcnlagos 2023. All rights reserved
            </p>
          </div>
        </section>
      </footer>
  )
}

export default Footer
