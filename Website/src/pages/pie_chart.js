import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Navbar from "../component/Navbar/Navbar";
import { Link, useParams } from "react-router-dom";
import { Pie } from "react-chartjs-2";
import Calcul from "../component/clacul";
import "./chart.css";
const Pie_chart = ({ trump_data }) => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  let d = Calcul(trump_data);
  const data = {
    labels: ["Netural", "Positive", "Negative"],
    datasets: [
      {
        label: "# of Comments",
        data: d,
        backgroundColor: [
          "rgb(83, 127, 231)",
          "rgb(3, 201, 136)",
          "rgb(235, 69, 95)",
        ],
        borderColor: [
          "rgb(83, 127, 231)",
          "rgb(3, 201, 136)",
          "rgb(235, 69, 95)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="pie_chart">
      <Pie data={data} />
    </div>
  );
};
export default Pie_chart;
