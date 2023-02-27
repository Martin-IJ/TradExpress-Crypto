import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";

const Coin = () => {
  const [data, setData] = useState(null);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {});
  }, []);

  console.log(data);

  if (!data) return null;
  return (
    <div className="container-fluid crypto">
      <div className="row coinCard d-flex justify-content-center">
        <div className="col-12 col-sm-6 coinCont">
          <div className="coinName d-flex justify-content-between">
            <p className="fw-bold">{data[0].symbol.toUpperCase()}/NGN</p>
            {data[0].price_change_percentage_24h < 0 ? (
              <p className="d-flex align-items-center">
                {data[0].price_change_percentage_24h.toFixed(2)}%{" "}
                <span className="red">
                  <FiArrowDown />
                </span>
              </p>
            ) : (
              <p className="d-flex align-items-center">
                {data[0].price_change_percentage_24h.toFixed(2)}%{" "}
                <span className="green">
                  <FiArrowUp />
                </span>
              </p>
            )}
          </div>
          <p className="m-0">{data[0].current_price * 750} NGN</p>
        </div>
        <div className="col-12 col-sm-6 coinCont">
          <div className="coinName d-flex justify-content-between">
            <p className="fw-bold">{data[1].symbol.toUpperCase()}/NGN</p>
            {data[1].price_change_percentage_24h < 0 ? (
              <p className="d-flex align-items-center">
                {data[1].price_change_percentage_24h.toFixed(2)}%{" "}
                <span className="red">
                  <FiArrowDown />
                </span>
              </p>
            ) : (
              <p className="d-flex align-items-center">
                {data[1].price_change_percentage_24h.toFixed(2)}%{" "}
                <span className="green">
                  <FiArrowUp />
                </span>
              </p>
            )}
          </div>
          <p className="m-0">{data[1].current_price * 750} NGN</p>
        </div>
        <div className="col-12 col-sm-6 coinCont">
          <div className="coinName d-flex justify-content-between">
            <p className="fw-bold">{data[2].symbol.toUpperCase()}/NGN</p>
            {data[2].price_change_percentage_24h < 0 ? (
              <p className="d-flex align-items-center">
                {data[2].price_change_percentage_24h.toFixed(2)}%{" "}
                <span className="red">
                  <FiArrowDown />
                </span>
              </p>
            ) : (
              <p className="d-flex align-items-center">
                {data[2].price_change_percentage_24h.toFixed(2)}%{" "}
                <span className="green">
                  <FiArrowUp />
                </span>
              </p>
            )}
          </div>
          <p className="m-0">{data[2].current_price * 750} NGN</p>
        </div>
        <div className="col-12 col-sm-6 coinCont">
          <div className="coinName d-flex justify-content-between">
            <p className="fw-bold">{data[3].symbol.toUpperCase()}/NGN</p>
            {data[3].price_change_percentage_24h < 0 ? (
              <p className="d-flex align-items-center">
                {data[3].price_change_percentage_24h.toFixed(2)}%{" "}
                <span className="red">
                  <FiArrowDown />
                </span>
              </p>
            ) : (
              <p className="d-flex align-items-center">
                {data[3].price_change_percentage_24h.toFixed(2)}%{" "}
                <span className="green">
                  <FiArrowUp />
                </span>
              </p>
            )}
          </div>
          <p className="m-0">{data[3].current_price * 750} NGN</p>
        </div>
        <div className="col-12 col-sm-6 coinCont">
          <div className="coinName d-flex justify-content-between">
            <p className="fw-bold">{data[4].symbol.toUpperCase()}/NGN</p>
            {data[4].price_change_percentage_24h < 0 ? (
              <p className="d-flex align-items-center">
                {data[4].price_change_percentage_24h.toFixed(2)}%{" "}
                <span className="red">
                  <FiArrowDown />
                </span>
              </p>
            ) : (
              <p className="d-flex align-items-center">
                {data[4].price_change_percentage_24h.toFixed(2)}%{" "}
                <span className="green">
                  <FiArrowUp />
                </span>
              </p>
            )}
          </div>
          <p className="m-0">{data[4].current_price * 750} NGN</p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
