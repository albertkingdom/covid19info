import axios from "axios";

// const url = "https://covid19.mathdro.id/api";


export const fetchData = async (country) => {
  const url = "https://corona.lmao.ninja/v2/all?yesterday";

  try {
    // const response = await axios.get(url);
    let url_real = url; //如果有選country則改變url
    // console.log("fetchdata country", country);

    if (country && country !== "Global") {
      url_real = `${url}/countries/${country}`;
    }
    const { data } = await axios.get(url_real);
    // const data = await axios.get(url_real)
    // console.log('fetchData',data)
    // const data = response.json();

    const modifiedData = {
      confirmed: {value:data.cases},
      recovered: {value:data.recovered},
      deaths: {value:data.deaths},
      lastUpdate: data.lastUpdate,
    };
    // console.log("fetchData", modifiedData);
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  const url = 'https://corona.lmao.ninja/v2/historical/all'
  try {
    // const response = await axios.get(url);
    // const { data } = await axios.get(`${url}/daily`);
    const { data } = await axios.get(url)

    // console.log("data_daily", data);

    // const modifiedData = data.map((daily) => ({
    //   confirmed: daily.confirmed.total,
    //   deaths: daily.deaths.total,
    //   recovered: daily.recovered.total,
    //   date: daily.reportDate,
    // }));
    const modifiedData = {
      confirmed: data.cases,
      deaths: data.deaths,
      recovered: data.recovered
    }
    // console.log("data_daily_modify", modifiedData);

    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchcountries = async () => {
  const url = 'https://corona.lmao.ninja/v2/countries?yesterday&sort'
  try {
    // const {
    //   data: { countries },
    // } = await axios.get(`${url}/countries`);
    const { data } = await axios.get(url)
    // console.log('data',data);
    return data.map((item) => item.country);
  } catch (error) {
    console.log(error);
  }
};
