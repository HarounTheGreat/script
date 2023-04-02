import React from "react";
import Navbar from "../component/Navbar/Navbar";

import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bubble } from "react-chartjs-2";
const Bubble_chart = () => {
  ChartJS.register(LinearScale, PointElement, Tooltip, Legend);
  const options = {
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  };
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const data = {
    datasets: [
      labels,
      {
        label: "Data",
        data: [
          {
            x: 20,
            y: 30,
            r: 15,
          },
          {
            x: 40,
            y: 10,
            r: 10,
          },
        ],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgb(255, 99, 132)",
        yAxisID: "y1",
      },
      {
        label: "Obama",
        data: [
          {
            x: 15,
            y: 20,
            r: 25,
          },
          {
            x: 30,
            y: 35,
            r: 40,
          },
        ],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return (
    <div className="bubble_chart">
      <h1>Bouriga</h1>
      <Bubble options={options} data={data} />
    </div>
  );
};
export default Bubble_chart;
