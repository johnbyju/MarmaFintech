import React, { useEffect, useState } from 'react';
import './Home.css'; // Import the integrated CSS
import Spline from '@splinetool/react-spline';
import Menu from '../Menuicon/Menu';
import logo from '../../../public/logo.png'
const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      
      if (window.scrollY > 70) {
        setIsScrolled(true);
        console.log("scroll trigered");
      } else {
        setIsScrolled(false); 
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

 
  const [isFixed, setIsFixed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >300) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="home-section min-h-screen">
      {/* <Menu/> */}
      <Spline
  style={{
    overflow: 'auto',
    filter: 'brightness(0.5)',
  }}
  scene="/energy_cube.spline"
/>

      <div className={`logo-comp-wrapper`} id='logo-wrapper'>
        <img src={logo}/>
        {/* {isFixed && <div className='logo-fixed'><img src='/public/logo.png' alt="Logo" /></div>} */}
      </div>

    </section>
  );
};

export default Home;
