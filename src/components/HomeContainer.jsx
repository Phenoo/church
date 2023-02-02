import Navigation from './Navigation'

const HomeContainer = ({ title, text, subtitle, button }) => {
  return (
    <div className='main-home' >
      <Navigation />
      <section className='home'>
        <div className="home-text">
          <h6 className='headline'>
            {title}
          </h6>
          <h2 className='tophead'>
            {text}
          </h2>
          <br />
          <h4>
            {subtitle}
          </h4>
          <br />
          <button className='button'>
            {button}
          </button>
        </div>
      </section>
    </div>
  )
}

export default HomeContainer