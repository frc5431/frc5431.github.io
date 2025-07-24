import React from 'react';
import './Sponsor.css';
import teamNumber from '../../assets/img/universal/5431LogoBlackvector.svg';
import raisingCanesLogo from '../../assets/img/Logos/Raising Canes.png';
import pisdLogo from '../../assets/img/Logos/PISD.png';
import texasInstrumentsLogo from '../../assets/img/Logos/Texas_Instruments.png';
import solidWorksLogo from '../../assets/img/Logos/SolidWorks.png';
import texasWorkforceLogo from '../../assets/img/Logos/Texas_Workforce_Commission.png';
import boosterClubLogo from '../../assets/img/Logos/Booster_Club.png';
import boeingLogo from '../../assets/img/Logos/boeing logo.png';
import haasLogo from '../../assets/img/Logos/haaslogo.png';
import poop911Logo from '../../assets/img/Logos/poop911.png';
import raytheonLogo from '../../assets/img/Logos/raytheon.png';
import boozAllenLogo from '../../assets/img/Logos/boozallen.webp';
import gtsTechnologyLogo from '../../assets/img/Logos/gtstechnology.png';
import Footer from '../../components/Footer/Footer';

const Sponsor: React.FC = () => {
  const sponsors = [
    {
      id: 1,
      name: "Raising Canes",
      image: raisingCanesLogo,
    },
    {
      id: 2,
      name: "PISD Education Foundation",
      image: pisdLogo,
    },
    {
      id: 3,
      name: "Texas Instruments",
      image: texasInstrumentsLogo,
    },
    {
      id: 4,
      name: "Poop 911",
      image: poop911Logo,
    },
    {
      id: 5,
      name: "HAAS",
      image: haasLogo,
    },
    {
      id: 6,
      name: "Booster Club",
      image: boosterClubLogo,
    },
    {
      id: 7,
      name: "Booz Allen Hamilton",
      image: boozAllenLogo,
    },
    {
      id: 8,
      name: "Texas Workforce Commission",
      image: texasWorkforceLogo,
    },
    {
      id: 9,
      name: "GTS Technology",
      image: gtsTechnologyLogo,
    },
    {
      id: 10,
      name: "Boeing",
      image: boeingLogo,
    },
    {
      id: 11,
      name: "SolidWorks",
      image: solidWorksLogo,
    },
    {
      id: 12,
      name: "Raytheon",
      image: raytheonLogo,
    },
  ];

  return (
    <>
      <section id="sponsor-banner" style={{ background: 'transparent' }}>
        <div className="rellax" id="sponsor-banner-image"></div>
        <div id="banner-text">
          <h1 className="title-text-sponsor">
            Our Sponsors
          </h1>
          <h3 className="subtext-sponsor">
            Thank you to our amazing sponsors who make our robotics journey possible!
          </h3>
        </div>
      </section>

      <section className="sponsor-description">
        <h2>How Your Support Helps</h2>
        <p>
          Titan Robotics loves competing and giving back to the community more than anything.
          Unfortunately, we can't do that without some help. That's where sponsorships and donations come in!
          Thanks to the generosity of local companies and community members, we get the funding that we need
            to buy what we need for the upcoming seasons.
          From metal, to motors, to batteries, we couldn't get them without the amazing support from our sponsors. Go Plano!
        </p>
      </section>

      <section className="sponsor-content">
        <div className="sponsor-container">
          <h2 className="sponsor-section-title">Our Supporters</h2>
          <div className="sponsor-cards-grid">
            {sponsors.map((sponsor) => (
              <div key={sponsor.id} className="sponsor-card">
                <div className="sponsor-image-container">
                  <img
                    src={sponsor.image}
                    alt={sponsor.name}
                    className="sponsor-image"
                    onError={(e) => {
                      // Fallback for missing images
                      e.currentTarget.src = teamNumber;
                    }}
                  />
                </div>
                <div className="sponsor-info">
                  <h3 className="sponsor-name">{sponsor.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer/>
    </>
  );
};

export default Sponsor;
