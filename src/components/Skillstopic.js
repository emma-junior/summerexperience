import React from "react";
import logotwo from "../images/logo-two.png";

const Skillstopic = () => {
  return (
    <div className="skills-topic">
      <img className="logo-two" src={logotwo} alt="" />
      <div className="skillstopic-wrapper">
        <p>Have your kids learn any of these skills below</p>
        <p>A ticket admits a child to learn one.</p>
      </div>
    </div>
  );
};

export default Skillstopic;
