import React, { useState } from "react";
import "./Homepage.css";
import HomeSearch from "../components/HomeSearch";

const Homepage = () => {
  const [checked, setChecked] = useState(false);
  const [campus, setCampus] = useState("");

  const handleCheckbox = (e) => {
    setCampus(e.target.value);
    setChecked(!checked);
  };

  const handleChecked = () => {
    setChecked(false);
  };

  return (
    <div className="main-container">
      <div className="home-title">Rate my TA.</div>

      {!checked && (
        <div>
          <div className="home-subtitle">Select your campus to get started</div>
          <div className="campus-container">
            <div>
              <input
                type="checkbox"
                id="utm"
                name="utm"
                value="utm"
                onChange={handleCheckbox}
              />{" "}
              UTM
            </div>
            <div>
              <input
                type="checkbox"
                id="utsg"
                name="utsg"
                value="utsg"
                onChange={handleCheckbox}
              />{" "}
              UTSG
            </div>
            <div>
              <input
                type="checkbox"
                id="utsc"
                name="utsc"
                value="utsc"
                onChange={handleCheckbox}
              />{" "}
              UTSC
            </div>
          </div>
        </div>
      )}
      {checked && (
        <div>
          <HomeSearch campus={campus} handleChecked={handleChecked} />
        </div>
      )}
    </div>
  );
};

export default Homepage;
