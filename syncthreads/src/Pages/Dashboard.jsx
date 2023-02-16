import React, { useState } from "react";
import styled from "styled-components";
import Map from "../Components/Map";
import PopUpMenu from "../Components/PopUpMenu";

const locationMap = [
  "Agartala",
  "Delhi",
  "Mumbai",
  "Bengalore",
  "Chennai",
  "Kolkata",
  "Dehradhun",
  "Chandigarh",
  "Guwahati",
];

const Dashboard = () => {
  const [mapView, setMapView] = useState("");
  const [popup, setPopup] = useState(false);
  const selectedMap = (value) => {
    console.log(value);
    setMapView(value);
    setPopup(true);
  };
  return (
    <div>
      <h3>Dashboard</h3>
      <GridBox>
        {locationMap.map((place, id) => {
          return (
            <div
              key={id}
              onClick={() => selectedMap(place.toLocaleLowerCase())}
            >
              {place}
            </div>
          );
        })}
      </GridBox>
      {popup && (
        <PopUpMenu setPopup={setPopup}>
          <Map mapView={mapView} />
        </PopUpMenu>
      )}
    </div>
  );
};

const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  width: 95%;
  margin: 30px auto;
  & > div {
    border: 1px solid grey;
    background-color: #86a3b8;
    height: 100px;
    font-size: 22px;
    font-weight: bold;
    border-radius: 7px;
    transition: 300ms;
    cursor: pointer;
    &:hover {
      scale: 1.1;
      background-color: #e8d2a6;
    }
  }
`;

export default Dashboard;
