import React from "react";
import {  render, screen } from "@testing-library/react";

import Cards from "./Cards";
import checkPropTypes from "check-prop-types";

//test: how many target you want to test is rendered in the Cards component
// you  have to give required props to the Cards component
describe("Card component", () => {
 

  it("should render 3 cards", () => {
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

    render(<Cards {...props}/>)
    // screen.debug()
    //getAllByText return []
    expect(screen.getAllByText(/人數/)).toHaveLength(3)
  });


  // test for 型別檢查
  describe("checking PropTypes", () => {
    it("should not throwing a warning", () => {
      //測試用的型別
      const expectedProps = {
        country: "test country",
        data: {
          confirmed: { value: 200 },
          deaths: { value: 200 },
          recovered: { value: 200 },
        },
      };
      //利用checkproptypes來測試
      const result = checkPropTypes(
        Cards.PropTypes,
        expectedProps,
        "props",
        Cards.name
      );
      // toBeUndefined表示測試沒有錯誤發生
      expect(result).toBeUndefined();
    });
  });
});
