import { shallow, mount } from "enzyme";
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
    const wrapper = shallow(<Chart {...props} />);
    expect(wrapper.length).toBe(1);
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

    const chartcomponent = shallow(<Chart {...props} />);
    console.log(chartcomponent.debug()); //show html

    const linePlot = chartcomponent.find('[data-test="linePlot"]');
    expect(linePlot.length).toBe(1);
  });
});
