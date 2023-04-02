import React, { useState } from "react";
import Navbar from "../component/Navbar/Navbar";
import { Choose_person } from "../component/filtring_function";
import { Link, useParams } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import "./chart.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Calcul from "../component/clacul";
import PersonSelection from "../component/person_selection/person_selection";
import { filtring_by_date } from "../component/filtring_function";
ChartJS.register(ArcElement, Tooltip, Legend);

const Doughnut_chart = () => {
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
        <div className="doughtnur_chart">
          <Doughnut data={data} />
        </div>
      )}
      {twoPersons && (
        <div className="two-images">
          <div className="doughtnur_chart">
            <Doughnut data={data} />
          </div>
          <div className="doughtnur_chart">
            <Doughnut data={data2} />
          </div>
        </div>
      )}
    </>
  );
};

export default Doughnut_chart;
