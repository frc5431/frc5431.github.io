import React, {} from "react";


const Events: React.FC = () => {
  

  return (
    <>
      {/* Navigation bar - assuming you'll load this component separately */}
      <main>
        {/* Top banner */}
        <section id="events-banner">
          <div className="rellax" id="events-banner-image"></div>

          <div id="banner-text">
            <h1>Events</h1>
            <h3>Be on time!</h3>
          </div>
        </section>

        <section className="page-content" id="events-content">
          <div className="container-fluid py-xs-0 py-md-4 px-lg-5 px-xs-0" id="calendar">
            <div className="row p-4">
              <div className="col" style={{display: 'flex', justifyContent: 'center'}}>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe 
                    className="embed-responsive-item" 
                    src="https://calendar.google.com/calendar/embed?src=pisd.edu_57n5cfp52bltnua0aegb3mnr18%40group.calendar.google.com&ctz=America%2FChicago" 
                    style={{ border: 0 }} 
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