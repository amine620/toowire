import React from "react";
import navCss from "./style.module.css";
import logo from "../../assets/logo/TooWires-White.png"
import {Link} from "react-router-dom"
function Navbar() {
  return (
    <div className={navCss.navbar}>
       <img src={logo} alt="" className={navCss.logo} />
      <h5>
        <Link className={navCss.h5} to="/dashboard">My Account</Link>
      </h5>
    </div>
  );
}

export default Navbar;
