import React, { useState, useEffect, useRef } from 'react';
import './Menu.css';
import { FaXTwitter } from "react-icons/fa6";
import { LiaLinkedin } from "react-icons/lia";
import { AiOutlineInstagram } from "react-icons/ai";


export default function Menu() {
  // const[isLocked,toggle]=UseBodyScrollLock()
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () =>{
    setIsOpen(!isOpen);
    // the toggle function
    toggle()
   
  } 

  const menuRef = useRef()

  useEffect(() => {
    let handler =(e)=>{
      if(!menuRef.current.contains(e.target)){
        setIsOpen(false)
        toggle()
        
      }
    };
    document.addEventListener('mousedown',handler);
    return()=>{
      document.removeEventListener('mousedown',handler);
    }
  },[])



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
              <a href="#" aria-label="Twitter" className='custom-icon'>
              <FaXTwitter />
              </a>
              <a href="#" aria-label="LinkedIn" className='custom-icon'>
              <LiaLinkedin className=''/>
              </a>
              <a href="#" aria-label="Instagram" className='custom-icon'>
              <AiOutlineInstagram />
              </a>
            </div>
          </nav>
      )}
    </div>
  );
}


