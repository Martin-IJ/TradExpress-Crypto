import React from "react";
import Quotee from "../Assets/Group 8699.svg";
import Tunde from '../Assets/Tunde.jpg'
import Abiodun from '../Assets/Abiodun.jpg'
import Me from '../Assets/Nftt.jpg'

const Customers = () => {
  return (
    <div className="container-fluid cusColor text-center">
      <h2 className="fw-bold mb-5">Customer's Review</h2>
      <div className="row customersCont text-light">
        <div className="col quoteBox customer1 px-0 px-md-3">
          <div className="style-quote">
            <div className="quote-box">
              <img src={Quotee} className="changeQuote" />
            </div>
            <p className="quoteText">
              Trading on TradExpress mobile & web <br /> platforms has been a
              smooth <br /> experience for me quite easy to <br /> navigate.
            </p>
          </div>
          <div className="customerPic d-flex align-items-center mt-3">
            <img src={Me} alt="" />
            <p className="text-black text-start m-0 ms-4">
              <span className="fw-bold">Martins</span> <br /> Nigeria
            </p>
          </div>
        </div>
        <div className="col quoteBox customer2 px-0 px-md-3">
          <div className="style-quote">
            <div className="quote-box">
              <img src={Quotee} className="changeQuote" />
            </div>
            <p className="quoteText">
              They have the best rate compared to <br /> other platforms with
              fast payout.
            </p>
          </div>
          <div className="customerPic d-flex align-items-center mt-3">
            <img src={Abiodun} alt="" />
            <p className="text-black text-start m-0 ms-4">
              <span className="fw-bold">Abiodun</span> <br /> Egypt
            </p>
          </div>
        </div>
        <div className="col quoteBox customer3 px-0 px-md-3">
          <div className="style-quote">
            <div className="quote-box">
              <img src={Quotee} className="changeQuote" />
            </div>
            <p className="quoteText">
              Easy to fund and withdraw coins or cash <br /> on their platform,{" "}
              <br /> I will definitely trade with them again.
            </p>
          </div>
          <div className="customerPic d-flex align-items-center mt-3">
            <img src={Tunde} alt="" />
            <p className="text-black text-start m-0 ms-4">
              <span className="fw-bold">Tunde</span> <br /> Kenya
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
