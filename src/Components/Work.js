import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Meals that adapt to your cravings, health goals, and mood.",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Set your schedule — daily, weekly, or whenever you want. ",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "On-time, every time — no waiting, no worrying.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Choose meals you love.<br/>
          Customize to your taste.<br/>
          Delivered fresh, right on time.<br/>
          Enjoy without the hassle.
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
