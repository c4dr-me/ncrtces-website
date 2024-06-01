import React from "react";
import '../src/Header.css'
const Header = () => {
  return (
    <div className="above-section">
      <div className="main-logo">
        <img src="https://msit.in/static/img/msit.png" alt="MSIT Logo" />
      </div>
      <div className="content">
        <h3>
          2nd International Conference on Artificial Intelligence and
          Applications (ICAIA 2024)
        </h3>
        <p>
          In association with Wentworth Institute of Technology, Boston-USA &
          Springer
        </p>
        <p>19-20 March 2024</p>
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
