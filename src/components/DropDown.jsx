import React, { useState } from "react";
import { serviceDropdown } from "./NavItems";
import { NavLink } from "react-router-dom";
import "../styles/Dropdown.css";

function Dropdown() {
  const [dropdown, setDropdown] = useState(false);

  return (
      <ul
        className={dropdown ? "services-submenu clicked" : "services-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {serviceDropdown.map((item) => (
          <li key={item.id}>
            <NavLink
              to={item.path}
              className={({isActive}) => (isActive ? 'nav-active' : '') }

              onClick={() => setDropdown(false)}
          >
            {item.title}
          </NavLink>
        </li>
        )
        )}
      </ul>
  );
}

export default Dropdown;
