import { useEffect } from "react";
import image1 from "../../../assets/image1.2.png";
import section1 from "./firstArticle.module.css";
import AOS from "aos";

function FirstArticle() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <div id={section1.row} className="mt-5">
      <div data-aos="fade-right" className={section1.texts}>
        <p id={section1.p1}>Easy Setup</p>
        <h1 className="text-wrap" id={section1.title}>
          Get a virtual number for your business
        </h1>


        <ul id={section1.p2}>
          <li>Separate your personal from work life, get a second number!</li>

          <li>No need to get a second handset, keep it all on one phone with a second number</li>
          <li>Use WhatsApp Business and other professional applications easily with a TooWires virtual number!</li>
          <li>No long term contract pay 80% less!</li>
        </ul>
      </div>
      <div className="">
        <img
          data-aos="fade-left"
          src={image1}
          alt=""
          className={section1.image}
        />
      </div>
    </div>
  );
}

export default FirstArticle;
