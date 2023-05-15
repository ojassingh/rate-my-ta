import React from "react";
import "./HomeSearch.css";

const HomeSearch = (props) => {
  return (
    <div>
      <div className="campus-subtitle">
        Search TAs at {props.campus.toUpperCase()}
      </div>
      <input className="home-search" type="text" />
      <div className="home-back" onClick={() => props.handleChecked()}>
        I'd like to change the campus
      </div>
    </div>
  );
};

export default HomeSearch;
