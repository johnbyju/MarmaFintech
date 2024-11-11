import "./Mission.css"
import React, { useEffect } from 'react';
// import './Mission.css';


const Mission = () => {

  useEffect(() => {
    const topElement = document.querySelector('.section1');
    const middleElement = document.querySelector('.section2');
    const bottomElement = document.querySelector('.section3');

    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      const newTopOpacity = 1 - scrollPosition / 500;
      topElement.style.opacity = Math.max(newTopOpacity, 0);
      const newMiddleOpacity = Math.max(1 - (scrollPosition - 400) / 500, 0);
      middleElement.style.opacity = newMiddleOpacity;
    });
  }, [])

  return (
    <div className='min-h-screen min-w-screen'>
      <div className='mission-title'>
        <h3>OUR MISSION</h3>
      </div>
      <div className="mission-wrapper">
        <div className='mission-sections'>
          <div className='section1'>
            <div className='img-wrapper'>
              <img src='/public/gif/mission1.gif' />
            </div>
            <div className='text-wrapper'>
              <p><span>Struggling</span> with the ever-</p>
              <p>changing landscape of</p>
              <p>cryptocurrency and</p>
              <p><span>Web3?</span></p>
            </div>
          </div>
          <div className='section2'>
            <div className='img-wrapper'>
              <img src='/public/gif/mission2.gif'  />
            </div>
            <div className='text-wrapper'>
              <p>We're here to help you</p>
              <p>tackle <span>every challenge</span></p>
              <p>along the way.</p>
            </div>
          </div>
          <div className='section3'>
            <div className='img-wrapper'>
              <img src='/public/gif/mission3.gif' />
            </div>
            <div className='text-wrapper'>
              <p>Begin your journey to</p>
              <p>digital excellence in</p>
              <p><span>Web3</span> right here!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
