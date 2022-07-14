import React from "react";
import learn from "../images/learn.jpg";

const Higherfeat = () => {
  return (
    <div className="higher-feat">
      <img className="learn-img" src={learn} alt="pic" />
      <div className="about">
        <h1>About Higherfeats NG</h1>
        <p>
          HigherFeats Nigeria is a limited liability company registered under
          the corporate affairs commission of Nigeria.
        </p>
        <p>
          We seek to bring professionalism into the nigeria educational system
          through professional private tutoring from our experienced tutors, we
          offer counselling as well as consultancy services for parents, schools
          and educational bodies.
        </p>
        <div className="enquire">
          <p>For Enquiries</p>
          <p>09031190694</p>
        </div>
      </div>
    </div>
  );
};

export default Higherfeat;
