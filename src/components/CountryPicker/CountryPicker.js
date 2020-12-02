import React, { useState, useEffect } from "react";
// import { NativeSelect, FormControl, InputLabel } from "@material-ui/core";
// import { fetchCountriesName } from "../../api";

const CountryPicker = ({ changeCountry, countryNames, country }) => {
  return (
    <>
      <form>
        <div className="form-row justify-content-center my-4">
          {/* <label for="">123</label> */}
          <div className="col-10 col-lg-2">
            <select
              className="form-control"
              name=""
              id=""
              onChange={(e) => changeCountry(e.target.value)}
              value={country}
            >
              <option defaultValue>Global</option>
              {countryNames
                ? countryNames.map((country, index) => (
                    <option key={index} value={country}>
                      {country}
                    </option>
                  ))
                : ""}
            </select>
          </div>
        </div>
      </form>
    </>
  );
};

export default CountryPicker;
