import React, { useState } from "react";
import "./chart.css";
import Navbar from "../component/Navbar/Navbar";
import PersonSelection from "../component/person_selection/person_selection";
import { Link, useParams } from "react-router-dom";

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
import { Choose_person, months } from "../component/filtring_function";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const Line_chart = () => {
  let labels2;
  let dataset2;
  let data2;
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

  let options;
  let options2;
  options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "",
      },
    },
  };
  const labels = Languages_used(state.p1d);
  const dataset1 = Comment_by_language(state.p1d, labels);
  console.log("dataset1=\n", dataset1);
  const data = {
    labels,
    datasets: [
      {
        label: state.p1n,
        data: dataset1,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  if (twoPersons) {
    options2 = {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "",
        },
      },
    };
    labels2 = Languages_used(state.p2d);
    dataset2 = Comment_by_language(state.p2d, labels2);
    console.log("dataset2=\n", dataset2);
    console.log("labels=\n", labels);
    console.log("labels2=\n", labels2);
    data2 = {
      labels2,
      datasets: [
        {
          label: state.p2n,
          data: dataset2,
          backgroundColor: "rgba(180, 99, 132, 0.5)",
        },
      ],
    };
  }
  return (
    <>
      <PersonSelection
        changeState={changeState}
        state={state}
        twoPersons={twoPersons}
      />
      {!twoPersons && (
        <div className="line_chart">
          <Bar options={options} data={data} />
        </div>
      )}
      {twoPersons && (
        <>
          <div className="line_chart">
            <Bar options={options} data={data} />
          </div>
          <div className="line_chart">
            <Bar options={options2} data={data2} />
          </div>
        </>
      )}
    </>
  );
};
export default Line_chart;
