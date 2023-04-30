import React, { useEffect } from "react";
import image2 from "../../../assets/image2,0.png";
import section2 from "./secondArticle.module.css";
import AOS from "aos";

function SecondArticle() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <div id={section2.row}>
      {/* <div className="">
        <img
          data-aos="fade-right"
          src={image2}
          alt=""
          className={section2.image}
        />
      </div> */}

      <div data-aos="fade-left" className={section2.texts}>
        <p id={section2.p1}>Taking Control</p>
        <h1 className="text-wrap" id={section2.title}>
          Get a second mobile phone number
        </h1>
        <ul>
          <li>
            <p>Separate your work and personal life</p>
          </li>
          <li>
            <p>No contract or SIM card required</p>
          </li>
          <li>
            <p>80% cheaper than the alternative</p>
          </li>
          <li>
            <p>No second hand set</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SecondArticle;
