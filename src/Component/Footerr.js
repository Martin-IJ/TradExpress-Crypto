import React from "react";
import Facebook from "../Assets/Icon awesome-facebook.svg";
import Whatsapp from "../Assets/Icon ionic-logo-whatsapp.svg";
import Twitter from "../Assets/Icon awesome-twitter.svg";
import Telegram from "../Assets/Icon awesome-telegram.svg";

const Footerr = () => {
  return (
    <div className=" px-0 ">
      <footer className="footerWrap d-flex py-5">
        <ul className='col px-5'>
          <p className="fw-bold fs-5 m-0">Products</p>
          <li>Bitcoin</li>
          <li>Alt</li>
          <li>Flat</li>
          <li>Refill</li>
          <li>P2P</li>
        </ul>
        <ul className='col px-5'>
          <p className="fw-bold fs-5 m-0">Learn</p>
          <li>Blog</li>
          <li>Help Center</li>
        </ul>
        <ul className='col px-5'>
          <p className="fw-bold fs-5 m-0">Contact</p>
          <li>hello@tradeexpress.com</li>
          <li>support@tradeexpress.com</li>
          <div className="d-flex gap-4">
            <img src={Twitter} className="p-2" />
            <img src={Telegram} className="p-2" />
            <img src={Whatsapp} className="p-2" />
            <img src={Facebook} className="p-2" />
          </div>
        </ul>
        <ul className='col px-5'>
          <p className="fw-bold fs-5 m-0">Company</p>
          <li>About Us</li>
          <li>Careers</li>
          <li>Rates</li>
          <li>Mobile</li>
        </ul>
        <ul className='col px-5'>
          <p className="fw-bold fs-5 m-0">Legal</p>
          <li>Privacy Policy</li>
          <li>Anti-Money Laundering</li>
          <li>Terms and Conditions</li>
        </ul>
      </footer>
      <div className="py-2 align-items-center d-flex justify-content-center copyCont">
        <p className="m-0 text-black px-3 text-center">©️ 2023 TradeExpress Technologies All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footerr;
