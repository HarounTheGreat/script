import React, { useState } from "react";
import Navbar from "../component/Navbar/Navbar";

import { Link } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import "./chart.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Calcul from "../component/clacul";
import { filtring_by_date } from "../component/filtring_function";
let language = undefined;
ChartJS.register(ArcElement, Tooltip, Legend);

const Doughnut_chart = ({ trump_data }) => {
  const [filtred_data, setFiltred_data] = useState(Calcul(trump_data));
  const [from_Date, setFrom_Date] = useState("");
  const [to_Date, setTo_Date] = useState("");
  let test = false;
  if (filtred_data[0] === 0 && filtred_data[1] === 0 && filtred_data[2] === 0) {
    test = false;
  } else {
    test = true;
  }
  const submitHandler = (event) => {
    event.preventDefault();
    let arr = filtring_by_date(trump_data, from_Date, to_Date, language);
    // ---------------- call function
    setFiltred_data(Calcul(arr));
  };

  const data = {
    labels: ["Netural", "Positive", "Negative"],
    datasets: [
      {
        label: "# of Comments",
        data: filtred_data,
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
  if (test) {
    return (
      <div className="doughtnur_chart">
        <h1>Doughnut Chart</h1>
        <Doughnut data={data} />
        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                min="2019-01-01"
                max="2021-12-31"
                onChange={(e) => setFrom_Date(e.target.value)}
                value={from_Date}
              />
            </div>
          </div>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                min="2019-01-01"
                max="2021-12-31"
                onChange={(e) => setTo_Date(e.target.value)}
                value={to_Date}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
          </div>
        </form>
      </div>
    );
  } else {
    return (
      <div className="doughtnur_chart">
        <h1> There is no Data here</h1>
        <Link to="/">Home Page</Link>
      </div>
    );
  }
};

export default Doughnut_chart;
