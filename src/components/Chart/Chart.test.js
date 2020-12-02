import { render, screen } from '@testing-library/react'
import React from "react";
import Chart from "./Chart";

describe("Chart component testing", () => {
  it("render a Chart component", () => {
    const props = {
      country: "test country",
      data: {
        lastUpdate: "2020-10-10",
        confirmed: {
          value: 0,
        },
        recovered: {
          value: 20,
        },
        deaths: {
          value: 0,
        },
      },
    };
  
    render(<Chart {...props} />)
 
    // screen.debug()
  });

  it("render a Line plot in Chart component", () => {
    const props = {
      country: "123Global",
      data: {
        lastUpdate: "2020-10-10",
        confirmed: {
          value: 0,
        },
        recovered: {
          value: 20,
        },
        deaths: {
          value: 0,
        },
      },
    };


    render(<Chart {...props} />)

  });
});
