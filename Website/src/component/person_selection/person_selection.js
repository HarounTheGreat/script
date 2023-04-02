import Select from "react-select";
import React, { useState } from "react";
import listData from "../services/listData";
import "./person_selection.css";
import {
  Choose_person,
  All_Languages_used,
  filtring,
  label,
  Data_by_Day,
} from "../filtring_function";
const PersonSelection = ({ state, changeState }) => {
  const [twoPersons, setTwoPersons] = useState(false);
  const [selectedPersons, setSelectedPersons] = useState({
    person1: Choose_person(state.p1n, state.p1n),
    person2: Choose_person(state.p2n, state.p2n),
  });
  const [opinion, setOpinion] = useState({
    positive: true,
    netural: true,
    negative: true,
  });
  const [expanded, setExpanded] = useState(false);
  const [date, setDate] = useState({ year: "All", month: "All" });
  let int_selectedLanguages = {};
  let display = "show-checkboxes";
  let languages_used;
  let selection_options = [];
  let one_option = {};
  const months = [
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
  const years = [
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
  ];
  let yearsOptions = [];
  let monthsOptions = [{ value: "All", label: "All" }];
  for (let i = 1; i < months.length + 1; i++) {
    one_option = {
      value: i < 10 ? "0" + i.toString() : i.toString(),
      label: months[i - 1],
    };
    monthsOptions.push(one_option);
  }
  for (let i = 0; i < years.length; i++) {
    one_option = {
      value: years[i],
      label: years[i],
    };
    yearsOptions.push(one_option);
  }
  one_option = {};
  if (selectedPersons.person2 === undefined)
    languages_used = All_Languages_used(
      selectedPersons.person1.person_data,
      undefined
    );
  else
    languages_used = All_Languages_used(
      selectedPersons.person1.person_data,
      selectedPersons.person2.person_data
    );
  for (let i = 0; i < listData.length; i++) {
    one_option = {
      value: listData[i].Fullname,
      label: listData[i].Fullname,
    };
    selection_options.push(one_option);
  }
  for (let i = 0; i < languages_used.length; i++) {
    int_selectedLanguages[languages_used[i]] = true;
  }
  const [selectedLanguages, setSelectedLanguages] = useState(
    int_selectedLanguages
  );
  expanded ? (display = "hide-checkboxes") : (display = "show-checkboxes");
  return (
    <div className="person-selection">
      <div className="select-two-persons">
        <div className="two-persons">
          <div className="two-persons-text">First Person</div>
        </div>
        <div className="select-persons">
          <Select
            defaultValue={"firstPerson"}
            onChange={(change) => {
              let change1 = {
                person1: Choose_person(change.label, change.label),
                person2: selectedPersons.person2,
              };
              setSelectedPersons(change1);
            }}
            options={selection_options}
          />
        </div>
        <div className="two-persons">
          <div className="two-persons-text">Second Person</div>
        </div>
        <div className="select-persons">
          <Select
            defaultValue={"firstPerson"}
            onChange={(change) => {
              console.log("=============");
              setTwoPersons(true);
              let change2 = {
                person1: selectedPersons.person1,
                person2: Choose_person(change.label, change.label),
              };
              setSelectedPersons(change2);
            }}
            options={selection_options}
          />
        </div>
      </div>
      {!twoPersons && (
        <div className="person-card">
          <img
            className="person-card-img"
            alt={selectedPersons.person1.Fullname}
            src={selectedPersons.person1.Image}
          />
          <div className="person-card-desc">
            <div className="person-card-fullname">
              {selectedPersons.person1.Fullname}
            </div>
            <div className="person-card-title">
              {selectedPersons.person1.Status}
            </div>
            <div className="person-card-description">
              {selectedPersons.person1.Description}
            </div>
          </div>
        </div>
      )}
      {twoPersons && (
        <>
          <div className="two-images">
            <div className="person-card">
              <img
                className="person-card-img"
                alt={selectedPersons.person1.Fullname}
                src={selectedPersons.person1.Image}
              />
              <div className="person-card-desc">
                <div className="person-card-fullname">
                  {selectedPersons.person1.Fullname}
                </div>
                <div className="person-card-title">
                  {selectedPersons.person1.Status}
                </div>
                <div className="person-card-description">
                  {selectedPersons.person1.Description}
                </div>
              </div>
            </div>
            <div className="vs">VS</div>
            <div className="person-card2">
              <img
                className="person-card-img"
                alt={selectedPersons.person2.Fullname}
                src={selectedPersons.person2.Image}
              />
              <div className="person-card-desc">
                <div className="person-card-fullname">
                  {selectedPersons.person2.Fullname}
                </div>
                <div className="person-card-title">
                  {selectedPersons.person2.Status}
                </div>
                <div className="person-card-description">
                  {selectedPersons.person2.Description}
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <div className="slicer">
        <div></div>
        <div className="slicer-date">
          <div className="slicer-date-title">Date</div>
          <div className="slicer-date-option">
            <div className="slicer-date-from">
              <div className="slicer-date-from-title">Year :</div>
              <Select
                className="slicer-date-from-date"
                defaultValue={"2023"}
                onChange={(change) => {
                  setDate((date) => ({ ...date, year: change.value }));
                }}
                options={yearsOptions}
              />
            </div>
            <div className="slicer-date-from">
              <div className="slicer-date-from-title">Month :</div>
              <Select
                className="slicer-date-from-date"
                defaultValue={"firstPerson"}
                onChange={(change) => {
                  setDate((date) => ({ ...date, month: change.value }));
                }}
                options={monthsOptions}
              />
            </div>
          </div>
        </div>
        <div className="slicer-opinion">
          <div className="slicer-opinion-title">Opinion</div>
          <div></div>
          <div className="slicer-opinion-box">
            <div className="slicer-opinion-box1">
              <div className="checkbox-wrapper-31">
                <input
                  type="checkbox"
                  id="scales"
                  name="scales"
                  onChange={() =>
                    setOpinion({
                      positive: !opinion.positive,
                      netural: opinion.netural,
                      negative: opinion.negative,
                    })
                  }
                  checked={opinion.positive ? "checked" : ""}
                />
                <svg viewBox="0 0 35.6 35.6">
                  <circle
                    className="background"
                    cx="17.8"
                    cy="17.8"
                    r="17.8"
                  ></circle>
                  <circle
                    className="stroke"
                    cx="17.8"
                    cy="17.8"
                    r="14.37"
                  ></circle>
                  <polyline
                    className="check"
                    points="11.78 18.12 15.55 22.23 25.17 12.87"
                  ></polyline>
                </svg>
              </div>
              <div className="slicer-opinion-option">Positive</div>
            </div>
            <div className="slicer-opinion-box2">
              <div className="checkbox-wrapper-31">
                <input
                  type="checkbox"
                  id="scales"
                  name="scales"
                  onChange={() =>
                    setOpinion({
                      positive: opinion.positive,
                      netural: !opinion.netural,
                      negative: opinion.negative,
                    })
                  }
                  checked={opinion.netural ? "checked" : ""}
                />
                <svg viewBox="0 0 35.6 35.6">
                  <circle
                    className="background"
                    cx="17.8"
                    cy="17.8"
                    r="17.8"
                  ></circle>
                  <circle
                    className="stroke"
                    cx="17.8"
                    cy="17.8"
                    r="14.37"
                  ></circle>
                  <polyline
                    className="check"
                    points="11.78 18.12 15.55 22.23 25.17 12.87"
                  ></polyline>
                </svg>
              </div>
              <div className="slicer-opinion-option">Netural</div>
            </div>
            <div className="slicer-opinion-box3">
              <div className="checkbox-wrapper-31">
                <input
                  type="checkbox"
                  id="scales"
                  name="scales"
                  onChange={() =>
                    setOpinion({
                      positive: opinion.positive,
                      netural: opinion.netural,
                      negative: !opinion.negative,
                    })
                  }
                  checked={opinion.negative ? "checked" : ""}
                />
                <svg viewBox="0 0 35.6 35.6">
                  <circle
                    className="background"
                    cx="17.8"
                    cy="17.8"
                    r="17.8"
                  ></circle>
                  <circle
                    className="stroke"
                    cx="17.8"
                    cy="17.8"
                    r="14.37"
                  ></circle>
                  <polyline
                    className="check"
                    points="11.78 18.12 15.55 22.23 25.17 12.87"
                  ></polyline>
                </svg>
              </div>
              <div className="slicer-opinion-option">Negative</div>
            </div>
          </div>
        </div>
        <div className="slicer-language">
          <div className="slicer-language-title">Language</div>
          <div className="slicer-language-options">
            <form>
              <div className="multiselect">
                <div
                  className="selectBox"
                  onClick={() => setExpanded(!expanded)}
                >
                  Choose Languages
                </div>
                <div className={display}>
                  <label className="language-options">
                    {languages_used.map((lan) =>
                      Languages(lan, selectedLanguages, setSelectedLanguages)
                    )}
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div></div>
      </div>
      <div className="filtring-button">
        <div
          className="fancy"
          onClick={() => {
            let labels;
            let p2d;
            let p2n;
            let result;
            console.log("date=\n", date);
            labels = label(date);
            let dataset2;
            let dataset1 = Data_by_Day(
              labels,
              date.month,
              selectedPersons.person1.person_data
            );
            if (selectedPersons.person2 === undefined) {
              p2d = undefined;
              p2n = undefined;
              dataset2 = undefined;
            } else {
              dataset2 = Data_by_Day(
                labels,
                date.month,
                selectedPersons.person2.person_data
              );
              result = {
                labels: labels,
                dataset1: dataset1,
                dataset2: dataset2,
              };
              p2d = filtring(
                date,
                opinion,
                selectedPersons.person2.person_data,
                selectedLanguages
              );
              p2n = selectedPersons.person2.Fullname;
            }
            console.log("result=\n", result);
            changeState(
              selectedPersons.person1.Fullname,
              filtring(
                date,
                opinion,
                selectedPersons.person1.person_data,
                selectedLanguages
              ),
              p2n,
              p2d,
              result
            );
          }}
        >
          <span className="top-key"></span>
          <span className="text">Search</span>
          <span className="bottom-key-1"></span>
          <span className="bottom-key-2"></span>
        </div>
      </div>
    </div>
  );
};
const Languages = (lan, selectedLanguages, setSelectedLanguages) => {
  return (
    <div className="languages">
      <div className="languages-name">{lan}</div>
      <div className="languages-option">
        <label className="rocker rocker-small">
          <input
            type="checkbox"
            onClick={(e) => {
              Change_selectedLanguages(
                lan,
                selectedLanguages,
                setSelectedLanguages
              );
            }}
            checked={selectedLanguages[lan]}
          />
          <span className="switch-left">Yes</span>
          <span className="switch-right">No</span>
        </label>
      </div>
    </div>
  );
};
const Change_selectedLanguages = (
  lan,
  selectedLanguages,
  setSelectedLanguages
) => {
  var R = !selectedLanguages[lan];
  setSelectedLanguages((selectedLanguages) => ({
    ...selectedLanguages,
    ...(selectedLanguages[lan] = R),
  }));
};
export default PersonSelection;
