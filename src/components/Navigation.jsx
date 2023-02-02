import React, {useState} from 'react'
import Logo from './Logo'
import { FaBars, FaTimes } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import Dropdown from './Dropdown'
import { navItems } from './NavItems'

const Navigation = () => {
  const [dropdown, setDropdown] = useState(false);
  const [navbar, setNavbar] = useState(false)
  return (
    <nav id='nav'>
        <div className='space-between'>
          <Logo />
          <div className={`nav-links ${navbar ? 'show' : ''}`}>
            <ul className='menu'>
            {navItems.map((item) => {
              if (item.title === "About") {
                return (
                  <li
                    key={item.id}
                    className={item.cName}
                    onMouseEnter={() => setDropdown(true)}
                    // onMouseLeave={() => setDropdown(false)}
                    onClick={() => setDropdown(!dropdown)}
                  >
                    <NavLink to={item.path}
                    >{item.title}</NavLink>
                    {dropdown && <Dropdown />}
                  </li>
                );
              }
              return (
                <li key={item.id} className={item.cName}>
                  <NavLink to={item.path}
                    className={({isActive}) => (isActive ? 'nav-active' : '') }
                  >{item.title}</NavLink>
                </li>
              );
            })}
            </ul>
          </div>
          <button className='mobile' onClick={() => setNavbar(!navbar)}>
                {
                  navbar ? <FaTimes /> : <FaBars />
                }
              </button>
        </div>
    </nav>
  )
}

export default Navigation
