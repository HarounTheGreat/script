import "./chart.css";
import React from "react";
import Navbar from "../component/Navbar/Navbar";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const Numbers = (X) => {
  let a = 0;
  let b = 0;
  let c = 0;
  let R = [];
  for (let i = 0; i < X.length; i++) {
    if (X[i].an === "O") {
      a = a + 1;
    } else if (X[i].an === "P") {
      b = b + 1;
    } else {
      c = c + 1;
    }
  }
  R.push(a);
  R.push(b);
  R.push(c);
  return R;
};

const Area_chart = () => {
  let array;
  array = Numbers(state.p1d);
  const data = {
    labels: ["Netural", "Positive", "Negative"],
    datasets: [
      {
        label: "# of Votes",
        data: array,
        backgroundColor: [
          "rgb(83, 127, 231)",
          "rgb(3, 201, 136)",
          "rgb(235, 69, 95)",
        ],
        borderColor: [
          "rgb(83, 127, 231,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      <h1>Area Chart</h1>
      <div className="area_chart">
        <Pie data={data} />
      </div>
    </>
  );
};
export default Area_chart;
