import React, { useState, useEffect, useRef } from 'react';
import './Menu.css';
import { FaXTwitter } from "react-icons/fa6";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuRef = useRef()

  useEffect(() => {
    let handler =(e)=>{
      if(!menuRef.current.contains(e.target)){
        setIsOpen(false)
        console.log(menuRef.current);
        
      }
    };
    document.addEventListener('mousedown',handler);
    return()=>{
      document.removeEventListener('mousedown',handler);
    }
  })



  return (
    <div className="hamburger-menu "  ref={menuRef}>
      <button
        onClick={toggleMenu}
        className={`hamburger-button ${isOpen ? 'open' : ''}`}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
      </button>

      {isOpen && (
        
          <nav className="menu-content">
            <ul>
              <li><a href="#mission" onClick={toggleMenu}>Mission</a></li>
              <li><a href="#products" onClick={toggleMenu}>Products</a></li>
              <li><a href="#team" onClick={toggleMenu}>Team</a></li>
              <li><a href="#event" onClick={toggleMenu}>Event</a></li>
              <li><a href="#contact" onClick={toggleMenu} className="contact-us">Contact us</a></li>
            </ul>
            <div className="social-icons">
              <a href="#" aria-label="Twitter">
              <FaXTwitter size={24} style={{ width: '24px', height: '24px', stroke: 'currentColor', strokeWidth: '2' }} />
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </nav>
      )}
    </div>
  );
}


