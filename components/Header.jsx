import React from "react";
import '../src/Header.css'
const Header = () => {
  return (
    <div className="above-section">
      <div className="main-logo">
        <img src="https://msit.in/static/img/msit.png" alt="MSIT Logo" />
      </div>
          <div className="content">
              <h1>Maharaja Surajmal Institue of Technology</h1>
              <span className="sub-heading">Affiliated to GGSIPU | NAAC Accredited 'A' Grade | NBA (CSE, IT, ECE,EEE) | Approved by AICTE | ISO 9001:2015 Certified</span>
      </div>
      {/* <div className="back-logo">
        <img className="g20" src="/images/g20.jpg" alt="G20 Logo" />
        <img className="wit" src="/images/witLogo.png" alt="WIT Logo" />
        <img
          className="springer"
          src="/images/springer-logo.svg"
          alt="Springer Logo"
        />
      </div> */}
    </div>
  );
};

export default Header;
