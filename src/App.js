import React, { useState } from "react";
import "./App.css";
import Favourites from "./Favourites";
import GenderButtons from "./GenderButtons";

const App = (props) => {
  const [query, setQuery] = useState("");
  const [filteredBabyName, setFilteredBabyName] = useState(props.babyNames);
  const [favourites, setFavourites] = useState([]);

  function handleClick(id) {
    setFilteredBabyName(filteredBabyName.filter((name) => name.id !== id));
    setFavourites(
      favourites.concat(props.babyNames.filter((name) => name.id === id))
    );
  }
  function handleFavouriteClick(id) {
    setFavourites(favourites.filter((name) => name.id !== id));
    setFilteredBabyName(
      filteredBabyName.concat(props.babyNames.filter((name) => name.id === id))
    );
  }
  function handleGirlNameClick() {
    setFilteredBabyName(props.babyNames.filter((name) => name.sex === "f"));
  }
  function handleBoyNameClick() {
    setFilteredBabyName(props.babyNames.filter((name) => name.sex === "m"));
  }
  function handleAllNameClick() {
    setFilteredBabyName(props.babyNames);
  }
  return (
    <div>
      <div className="navbar">
        <input
          type="text"
          placeholder="Search for a name..."
          className="search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <GenderButtons
          boyClick={() => handleBoyNameClick()}
          girlClick={() => handleGirlNameClick()}
          allClick={() => handleAllNameClick()}
        />
      </div>
      <Favourites
        favourites={favourites}
        removeFavourite={(id) => handleFavouriteClick(id)}
      />
      <div className="babyNameCollections">
        <ul className="nameList">
          {filteredBabyName
            .sort((a, b) =>
              a.name.toUpperCase() < b.name.toUpperCase()
                ? -1
                : a.name.toUpperCase() > b.name.toUpperCase()
                ? 1
                : 0
            )
            .filter((babyName) => babyName.name.toLowerCase().includes(query))
            .map((babyName, index) =>
              babyName.sex === "f" ? (
                <li
                  onClick={() => {
                    handleClick(babyName.id);
                  }}
                  className="babyName"
                  key={index}
                >
                  {babyName.name}
                </li>
              ) : (
                <li
                  onClick={() => {
                    handleClick(babyName.id);
                  }}
                  className="boyBabyName"
                  key={index}
                >
                  {babyName.name}
                </li>
              )
            )}
          ;
        </ul>
      </div>
    </div>
  );
};

export default App;
