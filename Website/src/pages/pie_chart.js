import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Navbar from "../component/Navbar/Navbar";
import { Pie } from "react-chartjs-2";
import Calcul from "../component/clacul";
import "./chart.css";
import { Link, useParams } from "react-router-dom";
import PersonSelection from "../component/person_selection/person_selection";
import { Choose_person } from "../component/filtring_function";

ChartJS.register(ArcElement, Tooltip, Legend);
const Pie_chart = () => {
  let { personId } = useParams();
  let data2;
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
  const data = {
    labels: ["Netural", "Positive", "Negative"],
    datasets: [
      {
        label: "# of Comments",
        data: Calcul(state.p1d),
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
  if (twoPersons) {
    data2 = {
      labels: ["Netural", "Positive", "Negative"],
      datasets: [
        {
          label: "# of Comments",
          data: Calcul(state.p2d),
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
  }
  return (
    <>
      <h1>Doughnut Chart</h1>
      <PersonSelection
        changeState={changeState}
        state={state}
        twoPersons={twoPersons}
      />

      {!twoPersons && (
        <div className="pie_chart">
          <Pie data={data} />
        </div>
      )}
      {twoPersons && (
        <div className="two-images">
          <div className="pie_chart">
            <Pie data={data} />
          </div>
          <div className="pie_chart">
            <Pie data={data2} />
          </div>
        </div>
      )}
    </>
  );
};
export default Pie_chart;
