import React from "react";
import form from "./style.module.css";
import photo from "../../../assets/girlset.svg";
import amdx from "../../../assets/payment icons/amdx.png";
import google from "../../../assets/payment icons/g-pay.png";
import visa from "../../../assets/payment icons/visa.png";
import stripe from "../../../assets/payment icons/stripe.png";
import discover from "../../../assets/payment icons/discover.png";
import apple from "../../../assets/payment icons/apple.png";
function Register() {
  return (
    <>
      <div className={form.formContainer} id="form">
        <h3 className="text-white text-center">
          With TooWires You Can Get A Second Virtual Number
        </h3>
        <div className={form.register} id="register">
          <div className={form.container1}>
            <div className="form-group">
              <input
                type="text"
                className="form-control mt-2"
                placeholder="Name"
              />
              <input
                type="text"
                className="form-control mt-2"
                placeholder="Phone Number"
              />
              <button className="btn btn-primary mt-2 form-control btnSignUp">
                GET YOUR NUMBER
              </button>
      <p className="text-center text-white mt-2">we need your phone number to send you the code to unlock your TooWires number! We will never store it. no</p>

            </div>
          </div>
          <div className={form.container2}>
            <img src={photo} alt="" />
          </div>
        </div>
      </div>
      <div id={form.payment}>
        <img src={amdx} alt="" />
        <img src={google} alt="" />
        <img src={visa} alt="" />
        <img src={stripe} alt="" />
        <img src={discover} alt="" />
        <img src={apple} alt="" />
      </div>
    </>
  );
}

export default Register;
