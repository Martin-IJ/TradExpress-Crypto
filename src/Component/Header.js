import React from "react";
import AppStore from "../Assets/Group 68.svg";
import PlayStore from "../Assets/Group 69.svg";

const Header = () => {
  return (
    <div id="Header" className="d-flex align-items-center">
      <div className="circlee"></div>
      <div className="circlee1"></div>
      <div className="headerText">
        <h1>Buy, sell and manage your Crypto on TradExpress.</h1>
        <p>
          Easily Trade Cryptocurrencies like BTC, USDT, ETH, LTC & XRP with NGN.
        </p>
        <button className="btn">Get Started</button>
        <div className="play-Store d-flex gap-3">
          <img src={AppStore} alt="App Store" />
          <img src={PlayStore} alt="Play Store" />
        </div>
      </div>
    </div>
  );
};

export default Header;
