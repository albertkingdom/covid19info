import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchcountries } from "../../api";

const CountryPicker = ({ changeCountry }) => {
  console.log(changeCountry);
  const [fetchCountries, setFetchCountries] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchCountries(await fetchcountries());
    };
    fetchAPI();
  }, []);
  return (
    <FormControl style={{ marginTop: "200px" }}>
      <NativeSelect onChange={e => changeCountry(e.target.value)}>
        {fetchCountries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
        <option value="global">Global</option>
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
