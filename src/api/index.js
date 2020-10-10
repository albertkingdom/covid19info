import axios from "axios";

// const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  const url = "https://corona.lmao.ninja/v2/all?yesterday";

  try {
    const { data } = await axios.get(url);

    const modifiedData = {
      confirmed: { value: data.cases },
      recovered: { value: data.recovered },
      deaths: { value: data.deaths },
      lastUpdate: data.lastUpdate,
    };
    // console.log("fetchData", modifiedData);
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchHistoryData = async () => {
  const url = "https://corona.lmao.ninja/v2/historical/all";
  try {
    // const response = await axios.get(url);
    // const { data } = await axios.get(`${url}/daily`);
    const { data } = await axios.get(url);

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
      recovered: data.recovered,
    };
    // console.log("data_daily_modify", modifiedData);

    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

//country name
export const fetchCountriesName = async () => {
  const url = "https://corona.lmao.ninja/v2/countries?yesterday&sort";
  try {
    const { data } = await axios.get(url);
    // console.log('data',data);
    return data.map((item) => item.country);
  } catch (error) {
    console.log(error);
  }
};
//individual country data
export const fetchIndividualCountriesData = async () => {
  const url = "https://corona.lmao.ninja/v2/countries?yesterday&sort";
  try {
    const { data } = await axios.get(url);
    // console.log('data',data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
