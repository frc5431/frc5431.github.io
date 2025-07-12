import React, {} from "react";
import "./Events.css";


const Events: React.FC = () => {
  

  return (
    <>
      {/* Navigation bar - assuming you'll load this component separately */}
      <main>
        {/* Top banner */}
        <section id="events-banner">
          <div className="rellax" id="events-banner-image"></div>

          <div id="banner-text">
            <h1 className="events-main-text">Events</h1>
            <h3 className="events-subtext">Be on time!</h3>
          </div>
        </section>

        <section className="page-content" id="events-content" style={{height: 'auto'}}>
          <div className="container-fluid py-xs-0 py-md-4 px-lg-5 px-xs-0" id="calendar">
            <div className="row p-4">
              <div className="col" style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                <h2 className="calendar-title">Titan Robotics Calendar</h2>
                <div className="embed-responsive embed-responsive-16by9" style={{
                  padding: '3px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #02204E 0%, #2B0250 25%, #8B1FEA 75%, #1DAFEA 100%)',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
                  width: '80vw',
                  height: '80vh'
                }}>
                  <iframe 
                    className="embed-responsive-item" 
                    src="https://calendar.google.com/calendar/embed?src=pisd.edu_57n5cfp52bltnua0aegb3mnr18%40group.calendar.google.com&ctz=America%2FChicago" 
                    style={{ 
                      border: 0, 
                      width: '100%', 
                      height: '100%', 
                      borderRadius: '9px',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                    }} 
                    width="800" 
                    height="600" 
                    frameBorder="0" 
                    scrolling="no"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <div id="footer"></div>
        </section>
      </main>

      {/* Script for jQuery and Bootstrap can be added to your _app.tsx or index.html */}
    </>
  );
};

export default Events;