import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Navbar from "../component/Navbar/Navbar";
import { Pie } from "react-chartjs-2";
import Calcul from "../component/clacul";
import "./chart.css";
import { Link, useParams } from "react-router-dom";
import PersonSelection from "../component/person_selection/person_selection";
import {
  Choose_person,
  Languages_used,
  Filter_data_by_language,
  filtring_by_language,
} from "../component/filtring_function";

ChartJS.register(ArcElement, Tooltip, Legend);
const Analyse_by_language = () => {
  let Languages_used_array;
  let result;
  {
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
    Languages_used_array = Languages_used(state.p1d);
    result = Filter_data_by_language(state.p1d, Languages_used_array);
    return (
      <div>
        <h1> Analysis By Language</h1>
        <PersonSelection
          changeState={changeState}
          state={state}
          twoPersons={twoPersons}
        />
        <div className="analyse_by_language">
          {result.map((one_table) => {
            return (
              <div className="chart-item">
                <p>
                  <h1>{one_table[0].Language}</h1>
                  <Pie key={one_table.N} data={one_table} />
                  <div className="pie_chart">
                    <Pie key={one_table.N} data={one_table} />
                  </div>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};
export default Analyse_by_language;
