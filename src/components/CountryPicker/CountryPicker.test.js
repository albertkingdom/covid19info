import React from "react";
import { shallow, mount } from "enzyme";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import CountryPicker from "./CountryPicker";

let wrapper;
let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);

  //   wrapper = mount(<CountryPicker {...mockProps} />);
});
afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});
it("render country options", async () => {
  const fakeCountryName = ["asd", "qwe"];
  const mockProps = {
    changeCountry: jest.fn(),
  };
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      array: () => Promise.resolve(fakeCountryName),
    })
  );
  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<CountryPicker {...mockProps} />, container);
  });
  //   console.log(wrapper.debug());
  //   const options = wrapper.find("option");
  //   console.log(container.querySelector("option"));
  expect(container.querySelectorAll("option")).toHaveLength(100);
  // remove the mock to ensure tests are completely isolated
  global.fetch.mockRestore();
});
