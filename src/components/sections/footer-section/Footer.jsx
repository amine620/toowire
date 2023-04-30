import React from "react";
import cssFooter from "./style.module.css";

function Footer() {
  return (
    <>
      <div className="container-fluid" id={cssFooter.footer}>
        <div id={cssFooter.text3}>
          <a href="/#">Support</a>
          <a href="/#">Privacy Policy</a>
          <a href="/#">Terms of Use</a>
          <a href="/#">About Us</a>
        </div>
      </div>
    </>
  );
}

export default Footer;
