import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl, InputLabel } from "@material-ui/core";
import { fetchcountries } from "../../api";

const CountryPicker = ({ changeCountry }) => {
  // console.log(changeCountry);
  const [fetchCountries, setFetchCountries] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchCountries(await fetchcountries());
    };
    fetchAPI();
  }, []);
  return (
    <>
      <FormControl style={{ margin: "250px 0 10px" }}>
        <InputLabel htmlFor="my-input">Select the country</InputLabel>
        <NativeSelect
          onChange={(e) => {
            changeCountry(e.target.value.replace("*", ""));
            // console.log("country selected is", e.target.value);
          }}
        >
          <>
            {fetchCountries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
            <option>Global</option>
          </>
        </NativeSelect>
      </FormControl>
    </>
  );
};

export default CountryPicker;
