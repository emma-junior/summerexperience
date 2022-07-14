import React from "react";
import baking from "../images/baking.jpg";
import coding from "../images/kidcoding.jpg";
import mic from "../images/microphone.jpg";

const cards = [
  {
    id: 1,
    image: baking,
    skill: "Baking",
  },
  {
    id: 2,
    image: coding,
    skill: "Coding",
  },
  {
    id: 3,
    image: mic,
    skill: "Public speaking",
  },
];

const Cards = () => {
  return (
    <div>
      <div className="card-wrapper">
        {cards.map((card) => {
          return (
            <div className="card-container">
              <div key={card.id} className="card">
                <img className="card-image" src={card.image} alt="pic" />
                <p>{card.skill}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <button className="register-btn">
          <a href="https://selar.co/SummerExperience">Register Now!</a>
        </button>
      </div>
    </div>
  );
};

export default Cards;
