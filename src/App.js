import React, { useEffect, useState } from "react";
import "./styles.css";

import { Cards, Chart, CountryPicker } from "./components";
import {
  fetchData,
  fetchHistoryData,
  fetchIndividualCountriesData,
} from "./api";
import LeafletMap from "./components/Map/LeafletMap";
export default function App() {
  const [data, setData] = useState({}); //傳給子元件的資料
  const [isloading, setIsloading] = useState(true);
  const [country, setCountry] = useState();
  const [location, setLocation] = useState(null); //經緯度
  const [allCountryData, setAllCountryData] = useState(); //存所有國家資料
  const [globalData, setGlobalData] = useState(); //存全球資料
  const [historyData, setHistoryData] = useState();
  async function getGlobalData() {
    const fetcheddata = await fetchData();
    const globalHistoryData = await fetchHistoryData(); //歷史資料
    const individualcountrydata = await fetchIndividualCountriesData(); //individual country data
    setGlobalData(fetcheddata);
    setData(fetcheddata);
    setHistoryData(globalHistoryData);
    setAllCountryData(individualcountrydata);
    setIsloading(false);
  }

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
  }, []);

  //處理country選擇
  const handleCountryChange = (country) => {
    setCountry(country);
    country === "Global"
      ? handleIfSelectGlobal()
      : handleIfSelectCountry(country);
  };

  return (
    <div className="App appCustom" data-test="appCustom">
      <div className="appBackground" />
      <h2 className="text-uppercase mb-4 py-4 text-white">
        Covid19 live info demo
      </h2>
      <h6 className="text-white">
        The COVID-19 info API is from<span> </span>
        <a className="text-white" href="https://github.com/disease-sh/API">
          github.com/NovelCOVID/API
        </a>
      </h6>
      <CountryPicker changeCountry={handleCountryChange} />
      {isloading ? (
        <div>Loading...</div>
      ) : (
        <Cards data={data} country={country} />
      )}

      <Chart data={data} country={country} historyData={historyData} />
      {/* <World country={country} /> */}

      <LeafletMap countrySelect={country} location={location} />
    </div>
  );
}
