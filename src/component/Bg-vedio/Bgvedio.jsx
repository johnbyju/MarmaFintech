import React from 'react';
import './Bgvedio.css'

const Bgvedio = () => {
  return (
    <>
      <div className="video-container min-h-full relative" >
        <div className='linear-bg'>
          <video autoPlay loop muted className="background-video">
            <source src="https://sapphire-large-cougar-300.mypinata.cloud/ipfs/QmWaqmrEnEHUhu4gDHhdV87rk8w4qFqjQUoFCuXicE8seD" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className='flex items-center justify-center py-56 px-4'>
            <div className="content">
              <p> Redifining the Global <br /> Engagement in digital <br /> World with<span style={{ color: 'rgb(239, 235, 235)' }}> Web3 Innovation"</span></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bgvedio;





