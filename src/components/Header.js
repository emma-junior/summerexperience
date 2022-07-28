import React from "react";
import summer from "../images/summer-pic.jpg";
// import deco from "../images/1618916.svg";
// import shape from "../images/shape.png";

const Header = () => {
  return (
    <div className="summer-wrapper">
      <div className="summer-writeup">
        <h1>SUMMER EXPERIENCE 2022!!</h1>
        <p>
          It's that time of summer again and HigherFeats NG is here with
          something big! Summer is a time for the children to relax, have fun
          and also learn something new. What better things to learn than fun
          skills that would fetch them high income tomorrow. The future starts
          today and you as a parent have the responsibility to push them there.
        </p>
      </div>
      <div className="summerimage-wrapper">
        <img className="summer-image" src={summer} alt="summer" />
        {/* <img className="summer-deco" src={deco} alt="summer" /> */}
        {/* <img className="shape" src={shape} alt="summer" /> */}
      </div>
    </div>
  );
};

export default Header;
