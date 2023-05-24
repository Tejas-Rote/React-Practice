import React from "react";
import "./mainCard.css";
import women from "../assets/women.svg";
import box from "../assets/box.svg";
import CustomAcc from "./CustomAcc";
// import {questions} from "./data.js";

export const questions = [
  {
    id: 1,
    title: "Do I have to allow the use of cookies?",
    info: "Finding the truth wouldn't be easy, that's for sure. Then there was the question of whether or not Jane really wanted to know the truth. That's the thing that bothered her most. It wasn't the difficulty of actually finding out what happened that was the obstacle, but having to live with that information once it was found.",
  },
  {
    id: 2,
    title: "How do I change my My Page password?",
    info: "The amber droplet hung from the branch, reaching fullness and ready to drop. It waited. While many of the other droplets were satisfied to form as big as they could and release, this droplet had other plans. It wanted to be part of history. It wanted to be remembered long after all the other droplets had dissolved into history. So it waited for the perfect specimen to fly by to trap and capture that it hoped would eventually be discovered hundreds of years in the future.",
  },
  {
    id: 3,
    title: "What is BankID?",
    info: "He wandered down the stairs and into the basement. The damp, musty smell of unuse hung in the air. A single, small window let in a glimmer of light, but this simply made the shadows in the basement deeper. He inhaled deeply and looked around at a mess that had been accumulating for over 25 years. He was positive that this was the place he wanted to live.",
  },
  {
    id: 4,
    title: "Whose birth number can I use?",
    info: "Balloons are pretty and come in different colors, different shapes, different sizes, and they can even adjust sizes as needed. But don't make them too big or they might just pop, and then bye-bye balloon. It'll be gone and lost for the rest of mankind. They can serve a variety of purposes, from decorating to water balloon wars. You just have to use your head to think a little bit about what to do with them.",
  },
  {
    id: 5,
    title: "When do I recieve a password ordered by letter?",
    info: "He knew what he was supposed to do. That had been apparent from the beginning. That was what made the choice so difficult. What he was supposed to do and what he would do were not the same. This would have been fine if he were willing to face the inevitable consequences, but he wasn't. ",
  },
];
const MainCard = () => {
  return (
    <div className="card">
      <div className="card__left">
        <div className="card__image">
          <img src={women} alt="women" className="image1" />
          <img src={box} alt="box" className="image2" />

          {/* women */}
        </div>
      </div>
      <div className="card__faq">
        <div className="card__faq-heading">FAQ</div>
        <div className="card__faq-content">
          {questions.map((item, index) => (
            <CustomAcc key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainCard;
