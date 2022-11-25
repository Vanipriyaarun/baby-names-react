import React,{ useState } from "react";
import "./App.css";

const App = (props) => {
  const [query, setQuery]=useState("");

  return (
    <div>
      <input type="text" placeholder="Search for a name..." className="search" onChange={(e)=> setQuery(e.target.value)}/>
      <div className="babyNameCollections">
        <ul className="nameList">
          {props.babyNames.sort((a,b)=>(a.name.toUpperCase() < b.name.toUpperCase() ? -1 : a.name.toUpperCase() > b.name.toUpperCase() ? 1 : 0))
          .filter((babyName)=>babyName.name.toLowerCase().includes(query)).map((babyName,index)=>(
            babyName.sex==="f" ? <li className="babyName" key={index}>{babyName.name}</li> : <li className="boyBabyName" key={index}>{babyName.name}</li>
          ))};
        </ul>
      </div>
    </div>
  );
};

export default App;





