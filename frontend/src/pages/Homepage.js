import React from "react";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="main-container">
      <div className="home-title">Rate my TA.</div>
      <div className="home-subtitle">Select your campus to get started</div>
      <div className="campus-container">
        <div>
          <input type="checkbox" id="utm" name="utm" value="utm" /> UTM
        </div>
        <div>
          <input type="checkbox" id="utsg" name="utsg" value="utsg" /> UTSG
        </div>
        <div>
          <input type="checkbox" id="utsc" name="utsc" value="utsc" /> UTSC
        </div>
      </div>
      <div className="home-ta-select">I'd like to look up the TA by name</div>
    </div>
  );
};

export default Homepage;
