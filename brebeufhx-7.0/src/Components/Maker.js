import React from "react";



const Maker = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">CV Maker</h1>
      
      <h3 className="secondary-heading">Start by giving some general info about yourself</h3>
      <br /> <br />
      <h4 className="secondary-heading">Fill in at least 1 Job Experience field by giving a job title</h4>
      <h4 className="secondary-heading">and some details about your experience</h4>
      <h4 className="secondary-heading">It can be job experience, internships or even volunteering!</h4>

      <div className="contact-form-container">
        <input type="text" placeholder="yourmail@gmail.com" />
        
      </div>
      <div className="contact-form-container">
        <input type="text" placeholder="Your Name" />
        
      </div>
      <div className="contact-form-container">
        <input type="text" placeholder="Phone number" />
        
      </div>
      <div className="contact-form-container">
        <input type="text" placeholder="Education: Year - Degree - College" />
        
      </div>
      <div className="experience-form-container">
        <input type="text" placeholder="Job Experience 1" />
        <button className="secondary-button">Submit</button>
      </div>
      <div className="experience-form-container">
        <input type="text" placeholder="Job Experience 2" />
        <button className="secondary-button">Submit</button>
      </div>
      
      <div className="experience-form-container">
        <input type="text" placeholder="Job Experience 3" />
        <button className="secondary-button">Submit</button>
      </div>
    </div>
  );
};

export default Maker;
