import React, { useEffect, useState } from "react";
import "./styles.css";

import { Cards, Chart, CountryPicker, World } from "./components";
import { fetchData } from "./api";
export default function App() {
  const [data, setData] = useState({});
  const [isloading, setIsloading] = useState(true);
  const [country, setCountry] = useState();

  useEffect(() => {
    // const data = fetchData();
    async function getdata() {
      const fetcheddata = await fetchData();
      console.log("fetcheddata", fetcheddata);
      setData(fetcheddata);
      setIsloading(false);
      // return data;
      // console.log("app.js", data);
    }

    getdata();
    console.log("data_out", data);
  }, []);
  // console.log("app.js", data);
  //處理country選擇
  const handleCountryChange = async country => {
    console.log(country);
    const fetcheddata = await fetchData(country);
    // console.log(fetcheddata);
    setData(fetcheddata);
    setCountry(country);
  };
  return (
    <div className="App appCustom">
      <h2 className="text-uppercase my-4 text-white">Covid19 live info demo</h2>
      <h6 className="text-white">
        The COVID-19 API is from
        <a className="text-white" href="https://covid19.mathdro.id/api">
          {" "}
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
      <World country={country} />
    </div>
  );
}
