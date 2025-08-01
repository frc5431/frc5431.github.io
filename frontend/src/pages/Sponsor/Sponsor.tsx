import React from "react";
import "./Sponsor.css";
import teamNumber from "../../assets/img/universal/5431LogoBlackvector.svg";
import Footer from "../../components/Footer/Footer";

import imageAliases from "../../assets/imageAliases";

const Sponsor: React.FC = () => {
  const sponsors = [
    {
      id: 1,
      name: "Raising Canes",
      image: imageAliases.raisingCanesLogo,
    },
    {
      id: 2,
      name: "PISD Education Foundation",
      image: imageAliases.pisdLogo,
    },
    {
      id: 3,
      name: "Texas Instruments",
      image: imageAliases.texasInstrumentsLogo,
    },
    {
      id: 4,
      name: "Poop 911",
      image: imageAliases.poop911Logo,
    },
    {
      id: 5,
      name: "HAAS",
      image: imageAliases.haasLogo,
    },
    {
      id: 6,
      name: "Booster Club",
      image: imageAliases.boosterClubLogo,
    },
    {
      id: 7,
      name: "Booz Allen Hamilton",
      image: imageAliases.boozAllenLogo,
    },
    {
      id: 8,
      name: "Texas Workforce Commission",
      image: imageAliases.texasWorkforceLogo,
    },
    {
      id: 9,
      name: "GTS Technology",
      image: imageAliases.gtsTechnologyLogo,
    },
    {
      id: 10,
      name: "Boeing",
      image: imageAliases.boeingLogo,
    },
    {
      id: 11,
      name: "SolidWorks",
      image: imageAliases.solidWorksLogo,
    },
    {
      id: 12,
      name: "Raytheon",
      image: imageAliases.raytheonLogo,
    },
  ];

  return (
    <>
      <section id="sponsor-banner" style={{ background: "transparent" }}>
        <div className="rellax" id="sponsor-banner-image"></div>
        <div id="banner-text">
          <h1 className="title-text-sponsor">Our Sponsors</h1>
          <h3 className="subtext-sponsor">
            Thank you to our amazing sponsors who make our robotics journey
            possible!
          </h3>
        </div>
      </section>

      <section className="sponsor-description">
        <h2>How Your Support Helps</h2>
        <p>
          Titan Robotics loves competing and giving back to the community more
          than anything. Unfortunately, we can't do that without some help.
          That's where sponsorships and donations come in! Thanks to the
          generosity of local companies and community members, we get the
          funding that we need to buy what we need for the upcoming seasons.
          From metal, to motors, to batteries, we couldn't get them without the
          amazing support from our sponsors. Go Plano!
        </p>
      </section>

      <section className="sponsor-content">
        <div className="sponsor-container">
          <h2 className="sponsor-section-title">Our Supporters</h2>
          <div className="sponsor-cards-grid">
            {sponsors.map((sponsor) => (
              <article
                key={sponsor.id}
                className="sponsor-card"
                aria-labelledby={`sponsor-${sponsor.id}`}
              >
                <div className="sponsor-image-container">
                  <img
                    src={sponsor.image}
                    alt={sponsor.name}
                    className="sponsor-image"
                    onError={(e) => {
                      e.currentTarget.src = teamNumber;
                    }}
                  />
                </div>
                <div className="sponsor-info">
                  <h3 className="sponsor-name">{sponsor.name}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Sponsor;
