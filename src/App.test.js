import React from "react";
import { shallow } from "enzyme";
import App from "./App";

//test: how many target you want to test is rendered in the App component
// you  have to give required props to the App component

//refactor
const findByTestAttr = (component, attr) => {
  return component.find(`[data-test='${attr}']`);
};
describe("App component", () => {
  it("render App test", () => {
    const component = shallow(<App />);
    // const wrapper = component.find(`[data-test='appCustom']`);
    const wrapper = findByTestAttr(component, "appCustom");
    expect(wrapper.length).toBe(1);
  });
  it("render App test 2", () => {
    const component = shallow(<App />);
    const wrapper2 = component.find(".appBackground");
    expect(wrapper2.length).toBe(1);
  });
});
