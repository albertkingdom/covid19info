import Enzyme from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import "@testing-library/jest-dom";
import "jest-canvas-mock";
import React from 'react'

Enzyme.configure({
  adapter: new EnzymeAdapter(),
  // disableLifecycleMethods: true,
});

jest.mock("react-chartjs-2", () => ({
  Bar: () => null, // add any additional chart types here
  Line: () => null,
  Doughnut: () => null,
}));