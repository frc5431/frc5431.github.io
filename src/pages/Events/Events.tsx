import React, { useState, useEffect } from "react";
import "./Events.css";
import Footer from "../../components/Footer/Footer";
import BalloonFestival from "../../assets/img/universal/planoballoonfestival.png";
import stemGals from "../../assets/img/universal/stem gals.jpg";
import Carousel from "../../components/Carosuel/Carousel";
import imageAliases from "../../assets/imageAliases";

export interface CarouselItem {
  id: number;
  imagePath: string;
  alt: string;
}

const Events: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const carouselItems: CarouselItem[] = [
    {
      id: 1,
      imagePath: imageAliases.universal5431NumberSign,
      alt: "Team 5431 number sign",
    },
    {
      id: 2,
      imagePath: imageAliases.frcEvent,
      alt: "FRC Event",
    },
    {
      id: 3,
      imagePath: imageAliases.hatConstruction,
      alt: "Robot construction",
    },
    {
      id: 4,
      imagePath: imageAliases.hyperionShooting,
      alt: "Robot shooting",
    },
  ];

  const calendarSrc = isMobile
    ? "https://calendar.google.com/calendar/embed?src=d9a7fe0jcjkg5nnlpld4q66uvb9ulq4d%40import.calendar.google.com&ctz=America%2FChicago&mode=AGENDA"
    : "https://calendar.google.com/calendar/embed?src=d9a7fe0jcjkg5nnlpld4q66uvb9ulq4d%40import.calendar.google.com&ctz=America%2FChicago";

  return (
    <main id="events-main" aria-labelledby="events-title">
      {/* Top banner */}
      <section id="events-banner">
        <div className="rellax" id="events-banner-image"></div>

        <div id="banner-text">
          <h1 className="events-main-text" id="events-title">
            Events
          </h1>
          <h3 className="events-subtext">Be on time!</h3>
        </div>
      </section>

      <section
        className="page-content"
        id="events-content"
        style={{
          height: "auto",
          position: "relative",
          top: "0",
          marginTop: "0",
        }}
      >
        <div
          className="container-fluid py-xs-0 py-md-4 px-lg-5 px-xs-0"
          id="calendar"
        >
          <div className="row p-4">
            <div
              className="col"
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h2 className="calendar-title">Titan Robotics Calendar</h2>
              <div
                className="embed-responsive embed-responsive-16by9"
                style={{
                  padding: "3px",
                  borderRadius: "12px",
                  background:
                    "linear-gradient(135deg, #02204E 0%, #2B0250 25%, #8B1FEA 75%, #1DAFEA 100%)",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.15)",
                  width: "80vw",
                  height: "80vh",
                }}
              >
                <iframe
                  className="embed-responsive-item"
                  src={calendarSrc}
                  style={{
                    border: 0,
                    width: "100%",
                    height: "100%",
                    borderRadius: "9px",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                  }}
                  width="800"
                  height="600"
                  title="Titan Robotics Calendar"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section-container-events"
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <div>
          <h2 className="calendar-title">Plano Balloon Festival</h2>
          <div className="balloon-container">
            <img
              src={BalloonFestival}
              alt="Plano Balloon Festival"
              className="balloon-img"
            />
          </div>
          <div>
            <p className="balloon-text">
              Join us for the annual Plano Balloon Festival!
            </p>
          </div>
        </div>
        <div>
          <h2 className="calendar-title">NTX Stem Gals</h2>
          <div className="balloon-container">
            <img src={stemGals} alt="NTX Stem Gals" className="balloon-img" />
          </div>
          <div>
            <p className="balloon-text">
              <a target="_blank" href="https://www.ntxrobotics.com/">
                NTX
              </a>{" "}
              is an annual event, that supports women in STEM.
            </p>
          </div>
        </div>
      </section>
      <section className="section-container-arrows">
        <div>
          <h2 className="calendar-title">Event Gallery</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "2rem 0",
            }}
          >
            <Carousel data={carouselItems} />
          </div>
        </div>
      </section>

      {/* TODO GET FOOTER TO WORK HERE */}
      <Footer />
    </main>
  );
};

export default Events;
