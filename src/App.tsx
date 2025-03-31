import { useState, useEffect } from 'react';
import './App.css';
// Import Bootstrap CSS (you'll need to install it with npm first)
import 'bootstrap/dist/css/bootstrap.min.css';
import FRClogo from './assets/img/Logos/FRC.png'
import FRCcondensedLogo from './assets/img/Logos/FRC_condensed.png'
import PAHSHelmetLogo from './assets/img/Logos/PAHS_helmet.png'
import NTXLogo from './assets/img/Logos/NTX.png'
import NTXnotext from './assets/img/Logos/FRC_condensed.png'
import hatConstruction from './assets/img/universal/hat construction.jpg' 
import universal5431NumberSign from './assets/img/universal/5431 number sign.jpg'
import frcEvent from './assets/img/universal/frc event.jpg'
import hyperionShooting from './assets/img/about/2020/Hyperion shooting.jpg'
import Header from './components/header';


// Define TypeScript interfaces
interface CarouselItem {
  id: number;
  imagePath: string;
  isActive: boolean;
}

function App() {
  const [carouselItems] = useState<CarouselItem[]>([
    { id: 1, imagePath: universal5431NumberSign, isActive: true },
    { id: 2, imagePath: frcEvent, isActive: false },
    { id: 3, imagePath: hyperionShooting, isActive: false },
    { id: 4, imagePath: hatConstruction, isActive: false }
  ]);

  // Replace jQuery carousel functionality
  useEffect(() => {
    // Set up carousel interval (replaces the jQuery script)
    const interval = setInterval(() => {
      // Find the current active index
      const activeIndex = carouselItems.findIndex(item => item.isActive);
      const nextIndex = (activeIndex + 1) % carouselItems.length;
      
      // In a real implementation, you would use setState to update the active item
      // This is just to demonstrate the concept - use a proper carousel component in production
    }, 6000);

    return () => clearInterval(interval);
  }, [carouselItems]);

  return (
    <div className="app-container">
      <Header/>
       <div id="navbar"></div>

      <main>  
        {/* Top banner */}
        <section id="banner">
          <div id="index-banner-image" className="rellax" data-rellax-speed="-1"></div>
          <div id="arrowdown">
            <a href="#slider"><span></span></a>
          </div>
        </section>

        {/* Carousel - using React state instead of jQuery */}
        <div id="slider" className="carousel slide carousel-fade d-none d-md-block">
          <div className="carousel-inner">
            {carouselItems.map((item) => (
              <div 
                key={item.id} 
                className={`carousel-item ${item.isActive ? 'active' : ''}`} 
                id={item.id === 1 ? "activeOnLoad" : undefined}
              >
                <div 
                  className="item-inner" 
                  style={{ backgroundImage:item.imagePath}}
                ></div>
              </div>
            ))}
          </div>
          <a className="carousel-control-prev" href="#slider" role="button">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </a>
          <a className="carousel-control-next" href="#slider" role="button">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </a>
        </div>

        {/* Content section */}
        <section id="index-content">
          <div className="container-fluid pb-0 pb-md-4">
            {/* Three info cards */}
            <div className="card-group pt-3">
              <div className="card p-2 p-lg-4" id="titan-blue">
                <div className="mt-1">
                  <img 
                    className="card-img-overlay d-block d-md-none mh-100 mw-100"
                    src={FRCcondensedLogo}
                    alt="FIRST Robotics (FRC)"
                  />
                  <img 
                    className="card-img-overlay d-none d-md-flex ml-md-auto d-lg-none mh-100 mw-100" 
                    src={FRClogo} 
                    alt="FIRST Robotics (FRC)" 
                  />
                  <a href="https://www.firstinspires.org/robotics/frc" target="_blank" rel="noopener noreferrer">
                    <img 
                      className="card-img-top d-none d-lg-block" 
                      src={FRClogo} 
                      alt="FIRST Robotics (FRC)" 
                    />
                  </a>
                </div>
                <div className="card-body">
                  <h2 className="card-title mt-3">FIRST Robotics</h2>
                  <div className="line mb-3"></div>
                  <p className="card-text">
                    FIRST (For Inspiration and Recognition of Science and
                    Technology) was founded in 1989 to inspire young people's
                    interest and participation in science and technology. Over the
                    past 30 years, FIRST participation has been proven to
                    encourage students to pursue education and careers in
                    STEM-related fields.
                  </p>
                </div>
                <div className="card-footer">
                  <h3>
                    <a href="https://www.firstinspires.org/robotics/frc" target="_blank" rel="noopener noreferrer">Find Out More</a>
                  </h3>
                </div>
              </div>
              
              <div className="w-100 pt-3 d-none d-sm-block d-lg-none"></div>
              
              <div className="card p-2 p-lg-4" id="titan-navy">
                <div className="mt-1">
                  <img 
                    className="card-img-overlay d-block d-md-flex ml-md-auto d-lg-none mh-100 mw-100" 
                    src={PAHSHelmetLogo} 
                    alt="Plano ISD Academy High School (AHS)" 
                  />
                  <a href="https://www.pisd.edu/academy" target="_blank" rel="noopener noreferrer">
                    <img 
                      className="card-img-top d-none d-lg-block" 
                      src={PAHSHelmetLogo} 
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
                    <a href="https://www.pisd.edu/academy" target="_blank" rel="noopener noreferrer">Find Out More</a>
                  </h3>
                </div>
              </div>
              
              <div className="w-100 pt-3 d-none d-sm-block d-lg-none"></div>
              
              <div className="card p-2 p-lg-4" id="titan-purple">
                <div className="mt-1">
                  <img 
                    className="card-img-overlay d-block d-md-none mh-100 mw-100" 
                    src={NTXnotext} 
                    alt="North Texas Robotics (NTX)" 
                  />
                  <img 
                    className="card-img-overlay d-none d-md-flex ml-md-auto d-lg-none mh-100 mw-100" 
                    src={NTXLogo} 
                    alt="North Texas Robotics (NTX)" 
                  />
                  <a href="https://www.ntxrobotics.com/" target="_blank" rel="noopener noreferrer">
                    <img 
                      className="card-img-top d-none d-lg-block" 
                      src={NTXLogo} 
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
                    across the area. NTX is responsible for the North Texas Coach
                    and Mentor Workshop and the NTX Tournament of Robots.
                  </p>
                </div>
                <div className="card-footer">
                  <h3>
                    <a href="https://www.ntxrobotics.com/" target="_blank" rel="noopener noreferrer">Find Out More</a>
                  </h3>
                </div>
              </div>
            </div>

            {/* Media section */}
            <div className="px-xl-5 px-md-3 px-0">
              <div className="row mt-3 mx-lg-3 mx-md-2 mx-0 px-xl-5 px-md-4 px-2 py-md-4 py-3" id="media">
                <div className="col col-lg-8 col-md-7">
                  <h2>5431 Chairman's Video</h2>
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe 
                      width="700" 
                      height="394" 
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
                  <h2>About FIRST</h2>
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe 
                      width="700" 
                      height="394" 
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
                <div className="col col-lg-4 col-md-5">
                  <h2>Stay Up to Date!</h2>
                  {/* Twitter timeline would need a React Twitter component */}
                  <div className="twitter-timeline-container">
                    {/* Replace with a React Twitter component */}
                    <p>Twitter timeline will be integrated here using a React component</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="footer"></div>
        </section>
      </main>
    </div>
  );
}

export default App;