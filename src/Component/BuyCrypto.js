import React from "react";
import Create from "../Assets/create.png";
import Purse from "../Assets/Group 52.svg";
import viewImg from "../Assets/Group 28.svg";

const BuyCrypto = () => {
  return (
    <div className="buyCont">
      <div className="container-fluid pageCont justify-content-md-center p-4">
        <h2 className="fw-bold mb-5 text-center">
          Buy and Sell your Cryptocurrency in 3 simple steps
        </h2>
        <div className="row d-flex mt-5 align-items-center justify-content-lg-between justify-content-center">
          <div className="col-12 col-md-7 d-flex gap-5">
            <p className="one">1</p>
            <div>
              <h3 className="fw-bold">Create a free Account</h3>
              <p>
                Sign up for your free TradExpress Wallet on web, iOS, or Android
                devices and follow our easy process to set up your profile.
              </p>
            </div>
          </div>
          <img
            src={Create}
            className="col-12 col-md-4"
            alt="Person with phone"
          />
        </div>
        <div className="row d-flex justify-content-lg-between changeFlex align-items-center justify-content-center">
          <img src={Purse} alt="" />
          <div className="col-12 col-md-7 d-flex gap-5">
            <p className="one">2</p>
            <div>
              <h3 className="fw-bold">Deposit</h3>
              <p>
                Choose your preferred deposit option like bank transfer,
                credit/debit card or send digital asset directly to your wallet
                for easy funding/withdrawal.
              </p>
            </div>
          </div>
        </div>
        <div className="row d-flex mt-5 align-items-center justify-content-lg-between justify-content-center">
          <div className="col-12 col-md-7 d-flex gap-5">
            <p className="one">3</p>
            <div>
              <h3 className="fw-bold">Buy/ Sell Crypto</h3>
              <p>
                Buy BTC, USDT, ETH, LTC, XRP, DOGE and securely store it in your
                wallet or send it easily to friends and family.
              </p>
            </div>
          </div>
          <img
            src={viewImg}
            className="col-12 col-md-4"
            alt="Person with phone"
          />
        </div>
      </div>
    </div>
  );
};

export default BuyCrypto;
