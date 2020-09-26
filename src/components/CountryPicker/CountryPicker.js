import React, { useState, useEffect } from "react";
// import { NativeSelect, FormControl, InputLabel } from "@material-ui/core";
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
      <form>
        <div class="form-row justify-content-center my-4">
          {/* <label for="">123</label> */}
          <div className="col-10 col-lg-2">
            <select
              class="form-control"
              name=""
              id=""
              onChange={(e) => changeCountry(e.target.value)}
            >
              <option selected>Global</option>
              {fetchCountries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
        </div>
      </form>
    </>
  );
};

export default CountryPicker;
