import React from "react";

const Maker = () => {
  const [value, setInputValue] = React.useState('');
  const [experience1, setExperience1] = React.useState('');
  const [experience2, setExperience2] = React.useState('');
  const [experience3, setExperience3] = React.useState('');

  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
  };
  const TextGenerate = (value) => {
    console.log('Generating Text...',{ value });
    // You can use experience1, experience2, experience3 as needed
  };

  const handleFormSubmit = () => {
    // Call a function or perform actions with the experience values
    TextGenerate({value});
  };

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
        <input type="text" value={experience1} onChange={handleInputChange(setExperience1)} placeholder="Job Experience 1" />
        <button className="secondary-button" onClick={handleFormSubmit}>Submit</button>
      </div>
      <div className="experience-form-container">
      <input type="text" value={experience2} onChange={handleInputChange(setExperience2)} placeholder="Job Experience 2" />
        <button className="secondary-button" onClick={handleFormSubmit}>Submit</button>
      </div>
      
      <div className="experience-form-container">
        <input type="text" value={experience3} onChange={handleInputChange(setExperience3)} placeholder="Job Experience 3" />
        <button className="secondary-button" onClick={handleFormSubmit}>Submit</button>
      </div>
      
    </div>
  );
};

export default Maker;

