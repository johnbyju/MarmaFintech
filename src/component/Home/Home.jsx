import React, { useEffect, useState } from 'react';
import './Home.css';
import Spline from '@splinetool/react-spline';
import Menu from '../Menuicon/Menu';
import logo from '/logo.png'
const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {

  //     if (window.scrollY > 70) {
  //       setIsScrolled(true);
  //       console.log("scroll trigered");
  //     } else {
  //       setIsScrolled(false); 
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);


  const [isFixed, setIsFixed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
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
      
        <div id='spline-overlay'></div>
         {/* <Spline
          style={{
            overflow: 'auto',
          }}
          id='spline-component'
          scene="/energy_cube.spline"
        />  */}
          <iframe
          // src="https://my.spline.design/reflectivespinner-ecfd7456ef402c5676a1ad39be3e3d20/"
          src="https://my.spline.design/energycube-856d259987bc8058b6eb5d42d67f784a/"
          id='spline-component'
          style={{overflow:'auto',marginTop:'1px'}}
        ></iframe>  

      <div className={`logo-comp-wrapper`} id='logo-wrapper'>
        <img src={logo} />
        {/* {isFixed && <div className='logo-fixed'><img src='/public/logo.png' alt="Logo" /></div>} */}
      </div>
 
    </section>
  );
};

export default Home;
