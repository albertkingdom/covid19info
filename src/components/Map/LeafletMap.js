import React, { useRef, useState, useEffect } from "react";
import { Map, TileLayer, GeoJSON, Marker } from "react-leaflet";
import mapData from "./custom.geo.json";

//color:邊線顏色,dashArray:邊線的虛線類型
const countryStyle = {
  fillColor: "red",
  fillOpacity: 0.3,
  color: "white",
  dashArray: "3",
};

const LeafletMap = ({ location, countrySelect }) => {
  const [clickCountryName, setClickCountryName] = useState("");
  //   let center = [37.8, -96];
  let center = location ? [location.lat, location.long] : [37.8, -96]; //設置地圖中心點座標

  const mapRef = useRef(null);
  const onEachCountry = (country, layer, countrySelect) => {
    const countryName = country.properties.name;
    // console.log("countryName includes?", countryName.includes(countrySelect));

    layer.bindPopup(countryName); //觸發顯示國家名

    // layer.options.fillColor = "green";

    // layer.options.fillColor = countryName.includes(countrySelect)
    //   ? "red"
    //   : "green"; //改背景顏色

    layer.on({
      click: (event) => {
        // console.log("click", event.target);

        const map = mapRef.current.leafletElement;
        // console.log(mapRef);
        map.fitBounds(event.target.getBounds()); //將click到的地區擺到正中央

        setClickCountryName(event.target.feature.properties.name);
      },
      mouseleave: (event) => {
        event.target.resetStyle(); //no effect?
      },
    });
  };

  return (
    <div className="container">
      <h5 style={{ marginTop: "25px" }}>WHERE IS THE COUNTRY?</h5>
      <Map
        center={center}
        zoom={3}
        style={{ width: "100%", height: "300px", margin: "10px" }}
        ref={mapRef}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON
          style={countryStyle}
          data={mapData}
          onEachFeature={onEachCountry}
        />
        <Marker position={center} />
      </Map>
    </div>
  );
};

export default LeafletMap;
