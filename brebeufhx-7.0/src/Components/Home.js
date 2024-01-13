import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  const scrollToAbout = () => {
    const scrollAmount = 2600; // Adjust this value based on how much you want to scroll down
    window.scrollBy({ top: scrollAmount, behavior: 'smooth' });
  };
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            CV ‎ ‎  Central
          </h1>
          <p className="primary-text">
            Leverage Generative AI to craft your personalized résumé. <br />
            Share and discuss your CV with others!
          </p>
          <button onClick={() => scrollToAbout('aboutSection')} className="secondary-button">
            Try it Now! <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};


export default Home;
