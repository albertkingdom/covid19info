import React from "react";
import { shallow } from "enzyme";
import Cards from "./Cards";
import { ExpansionPanelActions } from "@material-ui/core";
const findByTestAttr = (component, attr) => {
  return component.find(`[data-test='${attr}']`);
};
//test: how many target you want to test is rendered in the Cards component
// you  have to give required props to the Cards component
describe("Card component", () => {
  // let component
  // beforeEach(()=>{
  //     const props = {
  //         country:'test country'
  //     }
  // })

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
    const component = shallow(<Cards {...props} />);
    const namecard = findByTestAttr(component, "casesCount");
    expect(namecard.length).toBe(3);
  });
});
