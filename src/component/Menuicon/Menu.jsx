import React, { useState, useEffect } from 'react';
import './Menu.css';
import { ClickAwayListener } from '@mui/material';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Handle scroll lock on menu open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll');
  }, [isOpen]);

  return (
    <div className="hamburger-menu">
      <button
        onClick={toggleMenu}
        className={`hamburger-button ${isOpen ? 'open' : ''}`}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
      </button>

      {isOpen && (
        <ClickAwayListener onClickAway={() => setIsOpen(false)}>
          <div className="menu-overlay">
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
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
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
          </div>
        </ClickAwayListener>
      )}
    </div>
  );
}
