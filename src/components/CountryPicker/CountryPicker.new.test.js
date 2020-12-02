import { queryByText, render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import CountryPicker from "./CountryPicker";

test("render a list of countries", () => {
  const fakecountrynames = ["aaa", "bbb", "ccc"];
  const mockfunction = jest.fn();

  render(
    <CountryPicker
      countryNames={fakecountrynames}
      changeCountry={mockfunction}
    />
  );
  // screen.debug()
  expect(screen.queryByText("aaa")).toBeInTheDocument();
  expect(screen.queryByText("bbb")).toBeInTheDocument();
  expect(screen.queryByText("ccc")).toBeInTheDocument();
  // expect(screen.queryByText('taiwan')).toBeInTheDocument()

  
});

test('on change select option, the callback function will be called',()=>{
    const fakecountrynames = ["aaa", "bbb", "ccc"];
    const mockfunction = jest.fn();
  
    render(
      <CountryPicker
        countryNames={fakecountrynames}
        changeCountry={mockfunction}
      />
    );
    fireEvent.change(screen.getByRole("combobox"), {
        target: { value: "aaa" },
      });
      // expect(screen.findByText('aaa')).toBeInTheDocument()
      expect(mockfunction).toHaveBeenCalledTimes(1);
      // screen.debug()
})