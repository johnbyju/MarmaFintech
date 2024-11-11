import React from 'react'
import './Mission.css'
import gif1 from '../../../public/gif/mission1.gif'
import gif2 from '../../../public/gif/mission2.gif'
import gif3 from '../../../public/gif/mission3.gif'
const ExtendMission = () => {
  return (
    <div className='' style={{width:"100%"}}>
      <div className='mission-title'>
        <h3 className=' text-lg xsm:text-2xl jb:text-4xl'>OUR MISSION</h3>
      </div>
      <div className="mission-wrapper">
        <div className='mission-sections'>
          <div className='section1 p-5'>
            <div className='img-wrapper'>
              <img src={gif1}/>
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
              <img src={gif2}  />
            </div>
            <div className='text-wrapper'>
              <p>We're here to help you</p>
              <p>tackle <span>every challenge</span></p>
              <p>along the way.</p>
            </div>
          </div>
          <div className='section3'>
            <div className='img-wrapper'>
              <img src={gif3} />
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
  )
}

export default ExtendMission