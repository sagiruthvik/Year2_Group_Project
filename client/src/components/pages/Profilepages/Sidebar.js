import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './Data/SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

function Sidebar() {

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='sidebar-men active'>
          <ul>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Sidebar;
