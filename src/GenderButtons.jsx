import React from "react";

function GenderButtons(props) {
  return (
    <div className="genderBtn">
      <button className="allBtn" onClick={() => props.allClick()}>
        All
      </button>
      <button className="girlBtn" onClick={() => props.girlClick()}>
        <i className="bi-gender-female"></i>
      </button>
      <button className="boyBtn" onClick={() => props.boyClick()}>
        <i className="bi-gender-male"></i>
      </button>
    </div>
  );
}

export default GenderButtons;
