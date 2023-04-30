import React, { useEffect, useRef } from "react";
import cssHeader from "./style.module.css";
import Lottie from "lottie-web";
import AOS from "aos";
import Testimonial from "../testimonial/Testimonial";
import Navbar from "../../navbar/Navbar";

export default function Header() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  const el = useRef(null);

  useEffect(() => {
    document.querySelector(".box").innerHTML = null;
    Lottie.loadAnimation({
      container: el.current, // the dom element that will contain the animation
      renderer: "svg",
      loop: false,
      autoplay: true,
      path: "https://assets2.lottiefiles.com/private_files/lf30_bgtrs3yr.json", // the path to the animation json
    });
  }, []);

  return (
    <div className="container-fluid header" id={cssHeader.header}>
      <Navbar />

      <div id={cssHeader.row}>
        <div ref={el} className="mt-5 box" id={cssHeader.boxImage}></div>

        <div className={cssHeader.article}>
          <p id={cssHeader.p1}>Be professional get a second phone number</p>
          <h1 className="text-white text-wrap">
            WhatsApp Business
            <br />
            without
            <br />
            The 2nd SIM
          </h1>
          <p className="text-white" id={cssHeader.p2}>
            Pay 80% less for a second number, and sign up for digital services
            using TooWires
          </p>
          <div className={cssHeader.btnContainer}>
            <a
              href="#register"
              className="btn btn-primary m-2 btnSignUp"
              id={cssHeader.btnSignUp}
            >
              GET YOUR NUMBER
            </a>
          </div>
        </div>
      </div>
      <Testimonial />
    </div>
  );
}
