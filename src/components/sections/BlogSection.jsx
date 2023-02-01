import React from 'react'
import BlogCard from '../Blogs/BlogCard'

const BlogSection = () => {
  const data = [{
    id: 1,
    name: 'Seeking Forgiveness From The Lord, Our Saviour...',
    },
    {
      id: 2,
      name: 'The Lost Times: When All We Knew Was At Peace',
    },{
      id:3,
      name: 'What Did Our Lord Say About Forgiveness?',
    },
  ]
  return (
    <div className="blog-section">
      <section>
        <div className="center">
          <h6 className="headline">
              read up!
            </h6>
            <h4 className="tophead">
              Trending articles
            </h4>
        </div>
        <br />
        <div className="tri-grid">
        {
            data.map(item => (
              <BlogCard item={item}  key={item.id}/>
            ))
          }
        </div>
      </section>
    </div>
  )
}

export default BlogSection
