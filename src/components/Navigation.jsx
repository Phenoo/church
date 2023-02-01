import React from 'react'
import Logo from './Logo'

import { NavLink } from 'react-router-dom'

import Dropdown from './DropDown'

const Navigation = () => {
  return (
    <nav id='nav'>
        <div className='space-between'>
          <Logo />
          <div className='nav-links'>
            <ul className=''>
              <li>
                <NavLink to='/'
                    className={({isActive}) => (isActive ? 'nav-active' : '') }
                  >
                  home
                </NavLink>
              </li>
              <li
                    className={({isActive}) => (isActive ? 'nav-active' : '') }
              >
                <Dropdown />
              </li>
              <li>
                <NavLink to='/sermons'
                    className={({isActive}) => (isActive ? 'nav-active' : '') }
                >
                  sermons
                </NavLink>
              </li>
              <li>
                <NavLink to='/partnership'
                    className={({isActive}) => (isActive ? 'nav-active' : '') }
                >
                  partnership
                </NavLink>
              </li>
              <li>
                <NavLink to='/events'
                    className={({isActive}) => (isActive ? 'nav-active' : '') }
                >
                  events
                </NavLink>
              </li>
              <li>
                <NavLink to='/blogs'
                    className={({isActive}) => (isActive ? 'nav-active' : '') }
                >
                  blogs
                </NavLink>
              </li>
              <li>
                <NavLink to='/donate'
                    className={({isActive}) => (isActive ? 'nav-active' : '') }
                >
                  donate
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
    </nav>
  )
}

export default Navigation
