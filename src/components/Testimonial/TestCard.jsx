import React from 'react'

const TestCard = ({item}) => {
  return (
    <article className="test-card">
      <div className="box"></div>
      <h4>
        {item.name}
      </h4>
      <br />
      <p>
        {item.text}
      </p>
    </article>
  )
}

export default TestCard