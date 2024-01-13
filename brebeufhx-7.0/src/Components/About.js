import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.jpg";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Tailor
        </h1>
        <p className="primary-text">
        Tailor is a service that streamlines application processes with fast and impactful AI-assisted resume writing, optimizing keyword alignment and requirements matching.
        </p>
        <p className="primary-text">
        Gain a competitive edge with industry insights, providing a comprehensive understanding of the job, company, teams, industry trends, recruiter perspectives, and networking opportunities. Tailor ensures you stand out and stay well-informed throughout your job search journey.
        </p>
        <div className="about-buttons-container">
        <a href='https://www.tailorapply.com/' className="secondary-button" target="_blank" rel="noopener noreferrer">Learn More</a>

          
          
        </div>
      </div>
    </div>
  );
};

export default About;
