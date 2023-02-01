import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom';

const DropDown = () => {

  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
      }      
    };

    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });

  return (
      <div className='menu-container' ref={menuRef}>
        <div className={`menu-trigger flex ${open ? '' : ''} `} onClick={()=>{setOpen(!open)}}>
          About

        </div>

        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
          <ul  onClick={()=>{setOpen(!open)}}>
            <DropdownItem link='global' text = {"about rcn global"}/>
            <DropdownItem link='president' text = {"About presidents"}/>
            <DropdownItem link='lagos' text = {"about RCN Lagos"}/>
            <DropdownItem link='programmes'  text = {"our programmes"}/>
            <DropdownItem link='pastors'  text = {"meet our pastors"}/>
          </ul>
        </div>
      </div>
  );
}


function DropdownItem(props){
  return(
    <li className = 'dropdownItem'>
      <NavLink to={`/about/${props.link}`}
        // className={({isActive}) => (isActive ? 'nav-active' : '') }
      > {props.text} </NavLink>
    </li>
  );
}

export default DropDown
