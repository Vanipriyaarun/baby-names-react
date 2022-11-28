import React from "react";

function Favourites(props) {
  return (
    <div className="favourite">
      <p>
        <strong>Favourites :</strong> Click some names below to add to your
        shortlist...
      </p>
      <ul>
        {props.favourites.map((babyName, index) =>
          babyName.sex === "f" ? (
            <li
              onClick={() => {
                props.removeFavourite(babyName.id);
              }}
              className="babyName"
              key={index}
            >
              {babyName.name}
            </li>
          ) : (
            <li
              onClick={() => {
                props.removeFavourite(babyName.id);
              }}
              className="boyBabyName"
              key={index}
            >
              {babyName.name}
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default Favourites;
