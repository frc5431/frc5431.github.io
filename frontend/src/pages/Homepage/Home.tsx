// Import Bootstrap CSS (you'll need to install it with npm first)
import "bootstrap/dist/css/bootstrap.min.css";
import teamLogoBlack from "../../assets/img/universal/5431LogoBlackvector.svg";
import imageAliases from "../../assets/imageAliases";
import "./Home.css";
import Carousel from "../../components/Carosuel/Carousel";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Footer from "../../components/Footer/Footer";

export interface CarouselItem {
  id: number;
  imagePath: string;
  alt: string;
}

function Home() {
  const carouselItems: CarouselItem[] = [
    {
      id: 1,
      imagePath: imageAliases.universal5431NumberSign,
      alt: "team holding sign",
    },
    { id: 2, imagePath: imageAliases.frcEvent, alt: "sfs" },
    { id: 3, imagePath: imageAliases.hyperionShooting, alt: "fs" },
    { id: 4, imagePath: imageAliases.hatConstruction, alt: "" },
  ];

  return (
    <div className="app-container">
      <main>
        {/* Top banner */}
        <section id="banner">
          <div
            id="index-banner-image"
            className="rellax"
            data-rellax-speed="-1"
          ></div>
          <div id="arrowdown">
            <a href="#content">
              <span></span>
            </a>
          </div>
        </section>

        {/* <div className="carousel-container" id="slider">
          <Carousel data={carouselItems}/>
        </div> */}

        {/* Content section */}
        <section id="index-content">
          <div id="content" className="content-container">
            <img
              src={teamLogoBlack}
              alt="Team 5431 Logo"
              className="team-number"
            />
            <Carousel data={carouselItems} />
            <div className="social-container">
              <a
                href="https://www.instagram.com/frc5431/"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon fontSize="large" className="social-icon" />
              </a>
              <a
                href="https://www.facebook.com/frc5431/"
                target="_blank"
                rel="noreferrer"
              >
                <FacebookIcon fontSize="large" className="social-icon" />
              </a>
              <a
                href="https://www.youtube.com/@frc5431/"
                target="_blank"
                rel="noreferrer"
              >
                <YouTubeIcon fontSize="large" className="social-icon" />
              </a>
            </div>
          </div>
          <div className="container-fluid pb-0 pb-md-4">
            {/* Three info cards */}
            <div className="card-group pt-3">
              <div className="card p-2 p-lg-4" id="titan-blue">
                <div className="mt-1">
                  <img
                    className="card-img-overlay d-block d-md-none mh-100 mw-100"
                    src={imageAliases.FRCcondensedLogo}
                    alt="FIRST Robotics (FRC)"
                  />
                  <img
                    className="card-img-overlay d-none d-md-flex ml-md-auto d-lg-none mh-100 mw-100"
                    src={imageAliases.FRClogo}
                    alt="FIRST Robotics (FRC)"
                  />
                  <a
                    href="https://www.firstinspires.org/robotics/frc"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="card-img-top d-none d-lg-block"
                      src={imageAliases.FRClogo}
                      alt="FIRST Robotics (FRC)"
                    />
                  </a>
                </div>
                <div className="card-body">
                  <h2 className="card-title mt-3">FIRST Robotics</h2>
                  <div className="line mb-3"></div>
                  <p className="card-text">
                    <abbr title="For Inspiration and Recognition of Science and Technology">
                      FIRST
                    </abbr>{" "}
                    (For Inspiration and Recognition of Science and Technology)
                    was founded in 1989 to inspire young people's interest and
                    participation in science and technology. Over the past 30
                    years, FIRST participation has been proven to encourage
                    students to pursue education and careers in STEM-related
                    fields.
                  </p>
                </div>
                <div className="card-footer">
                  <h3>
                    <a
                      href="https://www.firstinspires.org/robotics/frc"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Find Out More
                    </a>
                  </h3>
                </div>
              </div>

              <div className="w-100 pt-3 d-none d-sm-block d-lg-none"></div>

              <div className="card p-2 p-lg-4" id="titan-navy">
                <div className="mt-1">
                  <img
                    className="card-img-overlay d-block d-md-flex ml-md-auto d-lg-none mh-100 mw-100"
                    src={imageAliases.PAHSHelmetLogo}
                    alt="Plano ISD Academy High School (AHS)"
                  />
                  <a
                    href="https://www.pisd.edu/academy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="card-img-top d-none d-lg-block"
                      src={imageAliases.PAHSHelmetLogo}
                      alt="Plano ISD Academy High School (AHS)"
                    />
                  </a>
                </div>
                <div className="card-body">
                  <h2 className="card-title mt-3">Plano ISD Academy</h2>
                  <div className="line mb-3"></div>
                  <p className="card-text">
                    Plano ISD Academy High School is an innovative, STEAM,
                    project-based 9th-12th grade learning community focused on
                    interdisciplinary connections to foster a professional
                    environment, inspire creativity, and empower students to
                    collaborate and compete in a rapidly changing world.
                  </p>
                </div>
                <div className="card-footer">
                  <h3>
                    <a
                      href="https://www.pisd.edu/academy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Find Out More
                    </a>
                  </h3>
                </div>
              </div>

              <div className="w-100 pt-3 d-none d-sm-block d-lg-none"></div>

              <div className="card p-2 p-lg-4" id="titan-purple">
                <div className="mt-1">
                  <img
                    className="card-img-overlay d-block d-md-none mh-100 mw-100"
                    src={imageAliases.NTXnotext}
                    alt="North Texas Robotics (NTX)"
                  />
                  <img
                    className="card-img-overlay d-none d-md-flex ml-md-auto d-lg-none mh-100 mw-100"
                    src={imageAliases.NTXLogo}
                    alt="North Texas Robotics (NTX)"
                  />
                  <a
                    href="https://www.ntxrobotics.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="card-img-top d-none d-lg-block"
                      src={imageAliases.NTXLogo}
                      alt="North Texas Robotics (NTX)"
                    />
                  </a>
                </div>
                <div className="card-body">
                  <h2 className="card-title mt-3">NTX Robotics</h2>
                  <div className="line mb-3"></div>
                  <p className="card-text">
                    North Texas Robotics was founded in 2015 to bring teams
                    together to further STEM and FIRST across North Texas. Its
                    teams work hard to promote and create inter-team alliances
                    across the area. NTX is responsible for the North Texas
                    Coach and Mentor Workshop and the NTX Tournament of Robots.
                  </p>
                </div>
                <div className="card-footer">
                  <h3>
                    <a
                      href="https://www.ntxrobotics.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Find Out More
                    </a>
                  </h3>
                </div>
              </div>
            </div>

            {/* Media section */}
            <div className="px-xl-5 px-md-3 px-0">
              <div
                className="row mt-3 mx-lg-3 mx-md-2 mx-0 px-xl-5 px-md-4 px-2 py-md-4 py-3"
                id="media"
              >
                <div className="col col-lg-8 col-md-7 center center-element">
                  <h2 className="center-text">5431 Chairman's Video</h2>
                  <div className="yt-container">
                    <iframe
                      title="Chairman's Video 2019-2020"
                      src="https://www.youtube.com/embed/V_4pVFlNjqI"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen={true}
                    ></iframe>
                  </div>
                  <p>
                    Our 2019-2020 season chairman's video. The video talks about
                    our drive and passion for spreading the seeds of STEM
                    education, and covers how we do it!
                  </p>
                  <h2 className="center-text">About FIRST</h2>
                  <div className="yt-container">
                    <iframe
                      title="About FIRST"
                      src="https://www.youtube.com/embed/K_PuWjr7qcM"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen={true}
                    ></iframe>
                  </div>
                  <p>
                    This video talks about who FIRST is and what FIRST Robotics
                    Competition (FRC) does. Impacting many highschool students
                    around the world preparing them for the future through fun
                    challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </section>
      </main>
    </div>
  );
}

export default Home;
