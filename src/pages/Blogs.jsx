import React from 'react'

import {AiOutlineSearch} from 'react-icons/ai'
import Search from '../components/Search'
import HomeContainer from '../components/HomeContainer'
import BlogCard from '../components/Blogs/BlogCard'


const Blogs = () => {
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
    {
      id: 4,
      name: 'Seeking Forgiveness From The Lord, Our Saviour...',
      },
      {
        id: 5,
        name: 'The Lost Times: When All We Knew Was At Peace',
      },{
        id:6,
        name: 'What Did Our Lord Say About Forgiveness?',
      },
      {
        id: 7,
        name: 'Seeking Forgiveness From The Lord, Our Saviour...',
        },
        {
          id: 8,
          name: 'The Lost Times: When All We Knew Was At Peace',
        },{
          id:9,
          name: 'What Did Our Lord Say About Forgiveness?',
        },
  ]
  return (
    <div className="blogs">
      <HomeContainer  title='blogs' text='“Trust in the LORD, and do good; dwell in the land and befriend faithfulness”'  button='read more' />
      <section>
        <div className="button-container flex ">
          <button className="round active">all article</button>
          <button className="round">article 1</button>
          <button className="round">article 2</button>
          <button className="round">article 3</button>
          <button className="round">article 4</button>
          <button className="round">article 5</button>
        </div>
        <Search />
        <h4 className="tophead">
          our articles
        </h4>
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

export default Blogs