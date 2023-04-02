import React from "react";
import "./chart.css";
import Navbar from "../component/Navbar/Navbar";

import {
  Languages_used,
  Comment_by_language,
} from "../component/filtring_function";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

const Line_chart = ({ trump_data, obama_data }) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Trump",
      },
    },
  };
  const labels = Languages_used(trump_data);
  const dataset1 = Comment_by_language(trump_data, labels);
  const data = {
    labels,
    datasets: [
      {
        label: "Trump",
        data: dataset1,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <div className="line_chart">
      <Bar options={options} data={data} />
    </div>
  );
};
export default Line_chart;

const months = (X) => {
  let p = "";
  let a = 0;
  let res = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < X.length; i++) {
    p = X[i].Year.substring(5, 7);
    a = parseInt(p);
    switch (a) {
      case 1:
        res[0] = res[0] + 1;
        break;
      case 2:
        res[1] = res[1] + 1;
        break;
      case 3:
        res[2] = res[2] + 1;
        break;
      case 4:
        res[3] = res[3] + 1;
        break;
      case 5:
        res[4] = res[4] + 1;
        break;
      case 6:
        res[5] = res[5] + 1;
        break;
      case 7:
        res[6] = res[6] + 1;
        break;
      case 8:
        res[7] = res[7] + 1;
        break;
      case 9:
        res[8] = res[8] + 1;
        break;
      case 10:
        res[9] = res[9] + 1;
        break;
      case 11:
        res[10] = res[10] + 1;
        break;
      case 12:
        res[11] = res[11] + 1;
        break;
      default:
    }
  }
  return res;
};
