import React, { useState } from 'react';
import './contactus.css'

const contactus: React.FC = () => {


  return (<>
  
  </>);

  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   teamNumber: '',
  //   subject: '',
  //   message: ''
  // });
  
  // const [formStatus, setFormStatus] = useState({
  //   loading: false,
  //   error: false,
  //   sent: false
  // });

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const { name, value } = e.target;
  //   setFormData(prevState => ({
  //     ...prevState,
  //     [name]: value
  //   }));
  // };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setFormStatus({ loading: true, error: false, sent: false });
    
  //   // Simulate form submission
  //   setTimeout(() => {
  //     // Here you would normally send the data to a server
  //     console.log('Form data submitted:', formData);
  //     setFormStatus({ loading: false, error: false, sent: true });
      
  //     // Reset form after successful submission
  //     setFormData({
  //       name: '',
  //       email: '',
  //       teamNumber: '',
  //       subject: '',
  //       message: ''
  //     });
  //   }, 1500);
  // };

  // return (
  //   <main>
  //     {/* Top banner */}
  //     <section id="contactus-banner">
  //       <div className="rellax" id="contactus-banner-image"></div>
  //       <div id="banner-text">
  //         <h1>Contact Us</h1>
  //         <h3>Any questions? Email frc5431@gmail.com or fill out the form below!</h3>
  //       </div>
  //     </section>

  //     <section className="page-content" id="contactus-content">
  //       <div className="container-fluid py-xs-0 py-md-4 px-lg-5 px-xs-0" id="contact-info">
  //         <div className="row p-4">
  //           <div className="col">
  //             <h2>FRC 5431 - Titan Robotics</h2>
  //             <div className="embed-responsive">
  //               <div className="mapouter my-3">
  //                 <div className="gmap_canvas">
  //                   <iframe 
  //                     className="embed-responsive-item" 
  //                     id="gmap_canvas" 
  //                     src="https://maps.google.com/maps?q=plano%20isd%20academy&t=&z=13&ie=UTF8&iwloc=&output=embed" 
  //                     frameBorder="0" 
  //                     scrolling="no"
  //                     title="Google Maps - Plano ISD Academy"
  //                   ></iframe>
  //                 </div>
  //               </div>
  //             </div>
  //             <address>
  //               <p className="mb-1">1701 Alma Dr, Plano, TX 75075</p>
  //               <a href="mailto:frc5431@gmail.com"><p>Email Us</p></a>
  //             </address>
  //           </div>

  //           <div className="col">
  //             <h2>How Can We Help?</h2>
  //             <form className="email-form" id="contact-form" onSubmit={handleSubmit}>
  //               <div className="form-group">
  //                 <label htmlFor="name">Name<span className="required">*</span></label>
  //                 <input 
  //                   type="text" 
  //                   id="name" 
  //                   name="name" 
  //                   className="form-control" 
  //                   placeholder="Please enter your Name *" 
  //                   required 
  //                   value={formData.name}
  //                   onChange={handleChange}
  //                 />
  //               </div>
  //               <div className="form-group">
  //                 <label htmlFor="email">Email<span className="required">*</span></label>
  //                 <input 
  //                   type="email" 
  //                   id="email" 
  //                   name="email" 
  //                   className="form-control" 
  //                   placeholder="Please enter your Email *" 
  //                   required 
  //                   value={formData.email}
  //                   onChange={handleChange}
  //                 />
  //               </div>
  //               <div className="form-group">
  //                 <label htmlFor="teamNumber">FRC Team Number</label>
  //                 <input 
  //                   type="number" 
  //                   id="teamNumber" 
  //                   name="teamNumber" 
  //                   className="form-control" 
  //                   placeholder="####"
  //                   value={formData.teamNumber}
  //                   onChange={handleChange}
  //                 />
  //               </div>
  //               <div className="form-group">
  //                 <label htmlFor="subject">Subject<span className="required">*</span></label>
  //                 <input 
  //                   type="text" 
  //                   id="subject" 
  //                   name="subject" 
  //                   className="form-control" 
  //                   placeholder="Subject *" 
  //                   required
  //                   value={formData.subject}
  //                   onChange={handleChange}
  //                 />
  //               </div>
  //               <div className="form-group">
  //                 <label htmlFor="message">Message<span className="required">*</span></label>
  //                 <textarea 
  //                   id="message" 
  //                   name="message" 
  //                   rows={3} 
  //                   className="form-control" 
  //                   placeholder="Message" 
  //                   required
  //                   value={formData.message}
  //                   onChange={handleChange}
  //                 ></textarea>
  //               </div>
  //               <div className="g-recaptcha" data-sitekey="6Le1hTMpAAAAAKuB5C8Q7Vsy9Ymw1sIk0VtRs6K8"></div>
  //               <div className="my-3">
  //                 {formStatus.loading && <div className="loading">Loading</div>}
  //                 {formStatus.error && <div className="error-message">There was an error submitting your message. Please try and resubmit. Thank you!</div>}
  //                 {formStatus.sent && <div className="sent-message">Your message has been sent. Thank you!</div>}
  //               </div>
  //               <button className="btn btn-primary" type="submit">Send Message</button>
  //             </form>
  //           </div>
  //         </div>
  //       </div>
  //       <div id="footer"></div>
  //     </section>
  //   </main>
  // );
};

export default contactus;