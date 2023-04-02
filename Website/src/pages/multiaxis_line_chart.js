import React, { useState } from "react";
import Select from "react-select";
import Navbar from "../component/Navbar/Navbar";
import PersonSelection from "../component/person_selection/person_selection";
import { Link, useParams } from "react-router-dom";
import {
  calculate_data_by_type_and_month,
  Choose_person,
  months,
} from "../component/filtring_function";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "../style/multiaxis_line_chart.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const Multiaxis_line_chart = () => {
  let twoPersons = false;
  let { personId } = useParams();
  let person1 = Choose_person(personId);
  const [state, setState] = useState({
    p1n: person1.Fullname,
    p1d: person1.person_data,
    p2n: undefined,
    p2d: undefined,
  });
  const changeState = (p1n, p1d, p2n, p2d) => {
    setState({
      p1n: p1n,
      p1d: p1d,
      p2n: p2n,
      p2d: p2d,
    });
  };
  let final_data1 = calculate_data_by_type_and_month(
    state.p1d,
    "2019-07-01",
    "2024-07-01"
  );
  let final_data2 = undefined;
  twoPersons = state.p2n !== undefined;
  if (twoPersons) {
    final_data2 = calculate_data_by_type_and_month(
      state.p2d,
      "2019-07-01",
      "2024-07-01"
    );
  }
  const options = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: "first vs second",
      },
    },
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left",
      },
      y1: {
        type: "linear",
        display: true,
        position: "right",
        grid: {
          drawOnChartArea: false,
        },
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
    labels,
    datasets: [
      {
        label: state.p1n,
        data: final_data1,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgb(255, 99, 132)",
        yAxisID: "y1",
      },
      {
        label: state.p2n,
        data: final_data2,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <>
      <h1>Multiaxis Line Chart</h1>
      <PersonSelection
        changeState={changeState}
        state={state}
        twoPersons={twoPersons}
      />
      <div className="multiaxis_line_chart">
        <Line options={options} data={data} />
      </div>
    </>
  );
};
export default Multiaxis_line_chart;
