import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async country => {
  try {
    // const response = await axios.get(url);
    let url_real = url; //如果有選country則改變url
    console.log("fetchdata country", country);

    if (country && country !== "Global") {
      url_real = `${url}/countries/${country}`;
    }
    const { data } = await axios.get(url_real);
    // const data = response.json();

    const modifiedData = {
      confirmed: data.confirmed,
      recovered: data.recovered,
      deaths: data.deaths,
      lastUpdate: data.lastUpdate
    };
    console.log("fetchData", modifiedData);
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    // const response = await axios.get(url);
    const { data } = await axios.get(`${url}/daily`);

    console.log("data_daily", data);

    const modifiedData = data.map(daily => ({
      confirmed: daily.confirmed.total,
      deaths: daily.deaths.total,
      date: daily.reportDate
    }));
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchcountries = async () => {
  try {
    const {
      data: { countries }
    } = await axios.get(`${url}/countries`);
    console.log(countries);
    return countries.map(country => country.name);
  } catch (error) {
    console.log(error);
  }
};
