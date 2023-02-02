import React from 'react'

const Subscribe = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  } 

  return (
    <div className='subscribe'>
      <section>
        <div className="center">
          <h6 className="headline">
            join the community!
          </h6>
          <h4 className='tophead'>
            Subscribe To Our Mail List
          </h4>
          <form onSubmit={handleSubmit}>
            <div className="flex-box">
              <div className="box">
                <div className="form-input">
                  <label>Full Name</label>
                  <input type='text' placeholder='Jane Goe' required />
                </div>
                <div className="form-input email">
                  <label>Email Address</label>
                  <input type='email' placeholder='janedoe@gmail.com' required />
                </div>
              </div>
              <div className='btn-div'>
                <button type='submit' className='button'>
                  subscribe
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Subscribe
