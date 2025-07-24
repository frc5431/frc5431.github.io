import React from 'react';
import "./OurTeam.css";
import buildTeamImage from '../../../assets/img/universal/teamdescphoto/BuildTeam.png';
import controlSystemsImage from '../../../assets/img/universal/teamdescphoto/ControlSystemTeam.png';
import scoutingImage from '../../../assets/img/universal/teamdescphoto/SNSteam.png';
import businessTeamImage from '../../../assets/img/universal/teamdescphoto/BusinessTeam.png';
import Footer from '../../../components/Footer/Footer';

const OurTeam = () => {
  const subteams = [
    {
      id: 1,
      name: "Build",
      description: "The Build subteam is the core of the team. They build the robot and manufacture the parts needed to do so. It doesn't matter if they CAD, weld, or assemble, they are the backbone that we couldn't function without!",
      image: buildTeamImage
    },
    {
      id: 2,
      name: "Control Systems",
      description: "Control Systems is the subteam that makes sure the robot can operate! They create the programs that operate the robot, as well as wiring all the electronics that go into it. The games wouldn't be playable without them!",
      image: controlSystemsImage
    },
    {
      id: 3,
      name: "Scouting and Strategy",
      description: "Scouting and Strategy, or S&S, is the team that manages all scouting for the team. They study the manual for each new game until they know it backwards and forwards, and then use their knowledge of the game to decide alliances!",
      image: scoutingImage
    },
    {
      id: 4,
      name: "Business",
      description: "Business is the subteam that manages all the marketing and outreach the team does. From managing sponsorships to designing buttons and merchandise, Business is there to make our presence in the community known!",
      image: businessTeamImage
    }
  ];

  return (
    <div className='main'>
      <section id="ourteam-banner" style={{ background: 'transparent' }}>
        <div className="rellax" id="ourteam-banner-image"></div>
        <div id="banner-text">
          <h1 className="title-text-ourteam">
            Our Team 
          </h1>
          <h3 className="subtext-ourteam">
            Meet the passionate students and mentors behind Titan Robotics!
          </h3>
        </div>
      </section>

      <section className="ourteam-description">
        <h2>About Titan Robotics</h2>
        <p>
          Titan Robotics is a FIRST Robotics Competition Team. Each year since 2015 we have strived to promote the values of FIRST, support our community, and build robots. Our team is composed of sub-teams specializing in different fields.
        </p>
      </section>

      <section className="subteams-content">
        <div className="subteams-container">
          <h2 className="subteams-section-title">Our Subteams</h2>
          <div className="subteams-grid">
            {subteams.map((subteam) => (
              <div key={subteam.id} className="subteam-card">
                <div className="subteam-image-container">
                  <img 
                    src={subteam.image} 
                    alt={subteam.name}
                    className="subteam-image"
                  />
                </div>
                <div className="subteam-content">
                  <h3 className="subteam-name">{subteam.name}</h3>
                  <p className="subteam-description">{subteam.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     <Footer/>
    </div>
  )
}

export default OurTeam