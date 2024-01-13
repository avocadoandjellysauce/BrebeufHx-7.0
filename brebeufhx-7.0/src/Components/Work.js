import React from "react";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";
import pencil3 from "../Assets/pencil3.png";

const Work = () => {
  const workInfoData = [
    {
      image: pencil3,
      title: "Input info",
      text: "Input some general info about your education and work experience",
    },
    {
      image: ChooseMeals,
      title: "AI-Assist",
      text: "With the help of AI, generates strong bullet points to show your experience",
    },
    {
      image: DeliveryMeals,
      title: "Finalize",
      text: "Reprompt as required and download your new CV!",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          3 simple steps:
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
