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

  return (
    < >
      <div className='' id='team'>
        <div className="mobile-view z-10 px-8">
          <p className='text-headerLaseWhite text-2xl sm:text-3xl'>We are a team of </p>
          <p className='text-headerWhite text-2xl sm:text-3xl'><span>thinkers</span> & <span>makers</span>...</p>
        </div>
        <div className='team-wrapper min-h-screen'>
          <div className="team-list-container md:px-8 lg:px-20">
            <div className="text-overlay web-view">
              <p className='text-headerLaseWhite text-2xl sm:text-3xl'>We are a team of </p>
              <p className='text-headerWhite text-2xl sm:text-3xl'><span>thinkers</span> & <span>makers</span>...</p>
            </div>
            <div className="carousel">
              <div className="group">
                {teamList.map((team, index) => (
                  <div key={team.id} className='team-card'>
                    <div className="card-content">
                      <img src={team.image} alt={team.name} className="profile-pic" />
                      <div className="info">
                        <div className='official-name'>
                          <h3 className='italic'>{team.name}</h3>
                          <p className='' style={{color:'#C9C7C782'}}>{team.position}</p>
                        </div>
                        <a href={team} target="_blank" rel="noopener noreferrer">
                          <img src={LinkedIn} alt="LinkedIn" className="linkedin-icon" />
                        </a>
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
                          <p style={{color:'#C9C7C782'}}>{team.position}</p>
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