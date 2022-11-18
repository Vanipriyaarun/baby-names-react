import React from "react";
import "./App.css";

const App = (props) => {
  return (
    <div className="babyNameCollections">
      <ul className="nameList">
        {props.babyNames.sort((a,b)=>(a.name.toUpperCase() < b.name.toUpperCase() ? -1 : a.name.toUpperCase() > b.name.toUpperCase() ? 1 : 0))
        .map((babyName,index)=>(
          babyName.sex==="f" ? <li className="babyName" key={index}>{babyName.name}</li> : <li className="boyBabyName" key={index}>{babyName.name}</li>
        ))};
      </ul>
    </div>
  );
};

export default App;





