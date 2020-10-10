import axios from "axios";

import {
  fetchIndividualCountriesData,
  fetchCountriesName,
  fetchHistoryData,
  fetchData,
} from "./index";
// jest.mock("axios");
describe("test apis", () => {
  it("call api to get country data", () => {
    return fetchIndividualCountriesData().then((data) => {
      //   console.log(data);
      expect(data.length).toBeGreaterThan(20);
    });
  });

  it("call api to get country names", () => {
    return fetchCountriesName().then((res) => {
      //   console.log(res);
      expect(res.length).toBeGreaterThan(20);
    });
  });

  //   it("call mock api to get country names", async () => {
  //     jest.mock("axios");
  //     axios.get.mockResolvedValue({
  //           data: ["1", "2", "3", "4"],
  //         });
  //     // let mockFetch = jest.fn().mockResolvedValue({
  //     //   data: ["1", "2", "3", "4"],
  //     // });
  //     // const actualdata = await fetchCountriesName();
  //     // const { data } = axios.get(mockFetch);
  //     // expect(data).toEqual(["1", "2", "3", "4"]);
  //     // expect(actualdata).toEqual(["1", "2", "3", "4"]);

  //     //   const data = ['1','2','3','4']
  //     // axios.get.mockResolvedValue({ data: ["1", "2", "3", "4"] });
  //     return fetchCountriesName().then((res) => {
  //       console.log(res);
  //       expect(res).toEqual(["1", "2", "3", "4"]);
  //     });
  //   });
  it("call api to get histroy data", () => {
    return fetchHistoryData().then((res) => {
      //   console.log(res);
      expect(Object.keys(res.confirmed).length).toEqual(30); //前30天資料
    });
  });
  it("call api to get current data", () => {
    return fetchData().then((res) => {
      console.log(res);
      expect(res.confirmed.value).not.toEqual(0);
      expect(res.recovered.value).not.toEqual(0);
    });
  });
});
