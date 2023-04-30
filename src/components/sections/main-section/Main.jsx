import React, { useEffect, useRef } from "react";
import cssMain from "./style.module.css";
import Lottie from "lottie-web";
import iphone from "../../../assets/phone3.png";
import whatsapp from "../../../assets/whatsapp-business-96.png";

function Main() {
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
    <div className="container-fluid main" id={cssMain.main}>
      <div className="" id={cssMain.row}>
        <div className="" id={cssMain.boxText}>
          <p id={cssMain.p1}>How it works</p>
          <h1 className="text-white text-wrap">
            Get a new mobile
            <br />
            number for your
            <br />
            business
          </h1>
          <p id={cssMain.p2} className="text-white">
            Separate your business and personal contacts with a TooWires number,
            sign up to WhatsApp Business and other digital services
          </p>
          <ul id={cssMain.ul} className="list-unstyled text-white">
            <li>
              <i className="fa fa-phone fa-2x" id={cssMain.faPhone}></i>
              <p>No need for a second phone</p>
            </li>
            <li>
              <i className="fa fa-shield fa-2x" id={cssMain.faSheild}></i>
              <p>No more giving out your personal number for work</p>
            </li>
            <li>
              <i
                className="fa fa-dollar fa-2x"
                aria-hidden="true"
                id={cssMain.faDollar}
              ></i>
              <p>Save money and don’t get another mobile contract</p>
            </li>
            <li>
              <img src={whatsapp} alt="" id={cssMain.whatsapp} />
              <p>
                Get access to WhatsApp Business so you can communicate easily
                with clients and contacts
              </p>
            </li>
          </ul>
        </div>
        <div className="" id={cssMain.image}>
          <img
            data-aos="fade-lefts"
            src={iphone}
            alt=""
            className={cssMain.image}
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
