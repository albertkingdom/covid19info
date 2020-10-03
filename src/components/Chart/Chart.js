import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import Container from "react-bootstrap/Container";

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailydata, setDailyData] = useState();
  useEffect(() => {
    const dailyrate = async () => {
      setDailyData(await fetchDailyData());
    };
    
    dailyrate();
   
    

  }, []);

  const linechart =
    dailydata ? (
      <Line
        data={{
          // labels: dailydata.map((item) => item.date),
          labels: Object.keys(dailydata.confirmed),
          datasets: [
            {
              // data: dailydata.map((item) => item.confirmed),
              data: Object.values(dailydata.confirmed),

              label: "Infected",
              borderColor: "grey",
              fill: true,
              pointBackgroundColor: "grey",
            },
            {
              // data: dailydata.map((item) => item.deaths),
              data: Object.values(dailydata.deaths),

              label: "death",
              borderColor: "red",
              fill: true,
              pointBackgroundColor: "red",
              backgroundColor: "#fc7272",
            },
          ],
        }}
      />
    ) : null;
  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        // title: { display: true, text: `Current state in ${country}` }
      }}
    />
  ) : null;
  return <Container>{country !== "Global" ? barChart : linechart}</Container>;
};

export default Chart;
