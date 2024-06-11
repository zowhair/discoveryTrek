'use client'
import React, { useState } from 'react';
import './nav.css'
import NavItem from './navitem/navitem';

const MENU_LIST = [
  { text: "Home", href: "/" },
    // { text: "Services", href: "/Service" },
    { text: "Services", href: "/allservices" },
    { text: "About Us", href: "/aboutus" },
    { text: "Contact Us", href: "/contactus" },
  ];
export default function Nav() {


  const [navActive, setNavActive] = useState(true);
  const [activeIdx, setActiveIdx] = useState(-1);

    return (
        <div className='upper'>
    <header className="sticky z-30 top-0 bg-white ">
      <nav
        className={`nav ${
          navActive ? "active" : ""
        }
        `}
      >
        <div className='flex-row'>
            <a href={"/"}>
            <span onClick={() => setActiveIdx(-1)}>
                <h1 className="text-xl font-semibold">
                  Discovery Trek Askoli
                </h1>
            </span>
            </a>

        </div>
       
        <div
          className={`menu__icon ${
              navActive ? "activated" : "inactivated"
          }`}
          onClick={() => setNavActive(!navActive)}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className={`nav__menu ${navActive ? "activated" : ""}`}>
          
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.href}
            >
              <NavItem {...menu} activated={idx === activeIdx} />
            </div>
          ))}
        </div>

        
        <div className={`menu ${navActive ? "activated" : ""}`}>
        {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.href}
            >
              <NavItem {...menu} activated={idx === activeIdx} />
            </div>
          ))}
            
          </div>
          
      </nav>
   
    </header>


    
</div>
    )
}