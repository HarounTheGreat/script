import React, { useState } from "react";
import "./chart.css";
import Navbar from "../component/Navbar/Navbar";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Choose_person, months } from "../component/filtring_function";
import { Link, useParams } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import PersonSelection from "../component/person_selection/person_selection";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const Bar_chart = () => {
  let { personId } = useParams();
  let person1 = Choose_person(personId);
  let twoPersons = false;
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
  twoPersons = state.p2n !== undefined;
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  const dataset1 = months(state.p1d);
  const dataset2 = months(state.p2d);
  // console.log("dataset1=\n", dataset1);
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
        data: dataset1,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: state.p2n,
        data: dataset2,
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return (
    <>
      <h1>Bar chart</h1>
      <PersonSelection
        changeState={changeState}
        state={state}
        twoPersons={twoPersons}
      />
      <div className="bar_chart">
        <Bar options={options} data={data} />
      </div>
    </>
  );
};
export default Bar_chart;
