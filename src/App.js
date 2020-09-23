import React, { useEffect, useState } from "react";
import "./styles.css";

import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api";
import LeafletMap from "./components/Map/LeafletMap";
export default function App() {
  const [data, setData] = useState({}); //傳給子元件的資料
  const [isloading, setIsloading] = useState(true);
  const [country, setCountry] = useState();
  const [location, setLocation] = useState(null); //經緯度
  const [allCountryData, setAllCountryData] = useState(); //存所有國家資料
  const [globalData, setGlobalData] = useState(); //存全球資料
  async function getGlobalData() {
    const fetcheddata = await fetchData();

    setGlobalData(fetcheddata);
    setData(fetcheddata);
    setIsloading(false);
  }
  const fetchAllCountryData = () => {
    //所有國家資料
    let url = "https://corona.lmao.ninja/v2/countries?yesterday=false&sort";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log("all country", data);

        setAllCountryData(data);
      });
  };
  const handleIfSelectCountry = (country) => {
    const filteredCountryData = allCountryData.filter(
      (item) => item.country === country || item.country.includes(country)
    );
    setData({
      confirmed: { value: filteredCountryData[0].cases },
      recovered: { value: filteredCountryData[0].recovered },
      deaths: { value: filteredCountryData[0].deaths },
      lastUpdate: filteredCountryData[0].updated,
    });
    setLocation({
      lat: filteredCountryData[0].countryInfo.lat,
      long: filteredCountryData[0].countryInfo.long,
    });
  };
  const handleIfSelectGlobal = () => {
    setData(globalData);
    setLocation(null);
  };
  useEffect(() => {
    setCountry("Global");
    getGlobalData();
    fetchAllCountryData();
  }, []);

  //處理country選擇
  const handleCountryChange = (country) => {
    setCountry(country);
    country === "Global"
      ? handleIfSelectGlobal()
      : handleIfSelectCountry(country);
  };
  return (
    <div className="App appCustom">
      <h2 className="text-uppercase my-4 text-white">Covid19 live info demo</h2>
      <h6 className="text-white">
        The COVID-19 API is from<span> </span>
        <a className="text-white" href="https://covid19.mathdro.id/api">
          https://covid19.mathdro.id/api
        </a>
      </h6>
      {isloading ? (
        <div>Loading...</div>
      ) : (
        <Cards data={data} country={country} />
      )}
      <CountryPicker changeCountry={handleCountryChange} />
      <Chart data={data} country={country} />
      {/* <World country={country} /> */}

      <LeafletMap countrySelect={country} location={location} />
    </div>
  );
}
