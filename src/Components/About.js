import React from 'react'
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from 'react-icons/bs';

export const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt=""/>
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt=""/>
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading ">About</p>
        <h1 className="primary-heading">
          Food Is An Important Part of  A Balanced Diet.
        </h1>
        <p className="primary-text">
          Food is not just about taste, it’s the fuel that powers our body, and a balanced diet ensures we stay strong, energetic, and healthy every day.
        </p>
        <p className="primary-text"> What we eat shapes how we live — choosing balanced meals is the first step toward a healthier, happier future.</p>
         <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button"> < BsFillPlayCircleFill />Watch Video</button>
         </div>
      </div>
    </div>
  )
}
export default About;