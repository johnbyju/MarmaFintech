import React from 'react';
import './Team.css';
import LinkedIn from "/images/linkedin.png";

const Team = () => {
  const teamList = [
    {
      id: 1,
      name: "Ananda Prabhu Rajendran",
      position: "Managing Director",
      image: '/images/profile/profile1.png',
      linkedin: 'https://in.linkedin.com/',
    },
    {
      id: 2,
      name: "Abishek",
      position: "Chief executive officer",
      image: '/images/profile/profile2.png',
      linkedin: 'https://in.linkedin.com/',
    },
    {
      id: 3,
      name: "Kumar Swamy",
      position: 'Finance and Operations Manager',
      image: '/images/profile/profile2.png',
      linkedin: 'https://in.linkedin.com/'
    },
    {
      id: 4,
      name: "Raghu",
      position: "Chif design officer",
      image: '/images/profile/profile3.png',
      linkedin: 'https://in.linkedin.com/',
    },
  ];

  const scrollers = document.querySelectorAll(".scroller");
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
addAnimation();
}

function addAnimation() {
}
  return (
    < >
      <div className='' id='team'>
        <div className="mobile-view z-10 px-0">
          <p className='text-headerLaseWhite text-3xl '>We are a team of </p>
          <p className='text-headerWhite text-3xl '><span>thinkers</span> & <span>makers</span>...</p>
        </div>
        <div className='team-wrapper min-h-screen'>
          <div className="team-list-container px-3 md:px-18 lg:px-20 xl:px-24">
            <div className="text-overlay web-view">
              <p className='text-headerLaseWhite '>We are a team of </p>
              <p className='text-headerWhite '><span>thinkers</span> & <span>makers</span>...</p>
            </div>
            {/* <div className='scroller'>
              <ul className='tag-list scroller__inner'>
                <li>
                  <div className='team-card'>
                    <div className="card-content">
                      <img src={team.image} alt={team.name} className="profile-pic" />
                      <div className="info">
                        <div className='official-name'>
                          <h3 className='italic'>{team.name}</h3>
                          <p className='official-position' style={{ color: '#C9C7C782' }}>{team.position}</p>
                        </div>
                        <a href={team} target="_blank" rel="noopener noreferrer">
                          <img src={LinkedIn} alt="LinkedIn" className="linkedin-icon" />
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='team-card'>
                    <div className="card-content">
                      <img src={team.image} alt={team.name} className="profile-pic" />
                      <div className="info">
                        <div className='official-name'>
                          <h3 className='italic'>{team.name}</h3>
                          <p className='official-position' style={{ color: '#C9C7C782' }}>{team.position}</p>
                        </div>
                        <a href={team} target="_blank" rel="noopener noreferrer">
                          <img src={LinkedIn} alt="LinkedIn" className="linkedin-icon" />
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='team-card'>
                    <div className="card-content">
                      <img src={team.image} alt={team.name} className="profile-pic" />
                      <div className="info">
                        <div className='official-name'>
                          <h3 className='italic'>{team.name}</h3>
                          <p className='official-position' style={{ color: '#C9C7C782' }}>{team.position}</p>
                        </div>
                        <a href={team} target="_blank" rel="noopener noreferrer">
                          <img src={LinkedIn} alt="LinkedIn" className="linkedin-icon" />
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='team-card'>
                    <div className="card-content">
                      <img src={team.image} alt={team.name} className="profile-pic" />
                      <div className="info">
                        <div className='official-name'>
                          <h3 className='italic'>{team.name}</h3>
                          <p className='official-position' style={{ color: '#C9C7C782' }}>{team.position}</p>
                        </div>
                        <a href={team} target="_blank" rel="noopener noreferrer">
                          <img src={LinkedIn} alt="LinkedIn" className="linkedin-icon" />
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>

            </div> */}
            <div className="carousel">
              <div className="group">
                {teamList.map((team, index) => (
                  <div key={team.id} className='team-card'>
                    <div className="card-content">
                      <img src={team.image} alt={team.name} className="profile-pic" />
                      <div className="info">
                        <div className='official-name'>
                          <h3 className='italic'>{team.name}</h3>
                          <p className='official-position' style={{ color: '#C9C7C782' }}>{team.position}</p>
                        </div>                       
                          <img src={LinkedIn} alt="LinkedIn" className="linkedin-icon" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="group">
                {teamList.map((team, index) => (
                  <div key={team.id} className='team-card'>
                    <div className="card-content">
                      <img src={team.image} alt={team.name} className="profile-pic" />
                      <div className="info">
                        <div>
                          <h3 className='italic'>{team.name}</h3>
                          <p style={{ color: '#C9C7C782' }}>{team.position}</p>
                        </div>
                        <a href={team} target="_blank" rel="noopener noreferrer">
                          <img src={LinkedIn} alt="LinkedIn" className="linkedin-icon" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;