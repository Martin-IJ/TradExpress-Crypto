import React from "react";
import Logo from "../Assets/TradExpress.svg";

const NavbarPage = () => {
  return (
    <nav class="navCont navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid navUp mx-5">
        <img src={Logo} alt="Logo" className="pageLogo" />
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 navbarrr gap-4">
            <li class="nav-item">
              <a
                class="nav-link active text-light"
                aria-current="page"
                href="#"
              >
                Instant Buy/Sell
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="#">
                Learn
              </a>
            </li>
            <button className="btn navBtn1">Login</button>
            <button className="btn navBtn2">Get Started</button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarPage;
