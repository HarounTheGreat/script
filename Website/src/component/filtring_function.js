// return fillring data without change the data structur
import listData from "./services/listData";
export const filtring_by_date = (data, from_Date, to_Date, language) => {
  let filtring_data = [];
  if (language === undefined) {
    var dateCheck = "02-07-2021";
    var d1 = from_Date.split("-");
    var d2 = to_Date.split("-");
    var c = ["", "", ""];
    var from = new Date(d1[0], parseInt(d1[1]) - 1, d1[2]); // -1 because months are from 0 to 11
    var to = new Date(d2[0], parseInt(d2[1]) - 1, d2[2]);
    var check;
    for (let i = 0; i < data.length; i++) {
      // dateCheck = data[i].Year;
      // c = dateCheck.split("-");
      c = data[i].year;
      check = new Date(c[0], parseInt(c[1]) - 1, c[2]);
      if (check > from && check < to) {
        filtring_data.push(data[i]);
      }
    }
  } else {
    filtring_data = [0];
  }
  return filtring_data;
};

// returns An Array contains the used changuage
// example : [en , fr , ar , hi]

export const Languages_used = (Y) => {
  let R = [];
  for (let i = 0; i < Y.length; i++) {
    R.push(Y[i].Language);
  }
  let res;
  res = R.filter((item, index) => R.indexOf(item) === index);
  return res;
};

export const All_Languages_used = (X, Y) => {
  let R = [];
  for (let i = 0; i < X.length; i++) {
    R.push(X[i].Language);
  }
  if (Y !== undefined)
    for (let i = 0; i < Y.length; i++) {
      R.push(Y[i].Language);
    }
  let res;
  res = R.filter((item, index) => R.indexOf(item) === index);
  return res;
};

// returns number of comments Example
// Languages_used = [en , fr , ar , hi]
// function returns [200,24,5,20]
// that's mean there is
//  -200 comments writen in English
//  -24 comments writen in French
//  -200 comments writen in Arabic
//  -24 comments writen in Hindi
export const Comment_by_language = (data, Languages_used) => {
  let res = [];
  let position;
  for (let h = 0; h < Languages_used.length; h++) {
    res.push(0);
  }
  for (let i = 0; i < data.length; i++) {
    position = Languages_used.indexOf(data[i].Language);
    res[position] = res[position] + 1;
  }
  return res;
};

export const Filter_data_by_language = (data, Languages_used) => {
  let res = [];
  let position;
  for (let h = 0; h < Languages_used.length; h++) {
    res.push([]);
  }
  for (let i = 0; i < data.length; i++) {
    position = Languages_used.indexOf(data[i].Language);
    if (position !== -1) {
      res[position].push(data[i]);
    }
  }
  return res;
};

export const calculate_data_by_type = (X) => {
  let res = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let p = "";
  let a = 0;
  let type = "O";
  for (let i = 0; i < X.length; i++) {
    type = X[i].comment_type;
    if (type === "P") {
      p = X[i].year[1];
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
  }
  return res;
};

export const calculate_data_by_type_and_month = (
  trump_data,
  from_date,
  to_date
) => {
  let data1;
  let d1 = [];
  let res = [];
  data1 = filtring_by_date(trump_data, from_date, to_date, undefined);
  d1 = calculate_data_by_type(data1);
  for (let i = 0; i < d1.length; i++) {
    res.push({ x: 10, y: d1[i], r: 10 });
  }
  return res;
};

export const Choose_person = (personId, fullname) => {
  let person_data;
  let res = [];
  if (fullname === undefined && personId === undefined) {
    return undefined;
  }
  if (fullname === undefined) {
    personId = parseInt(personId);
    for (let i = 0; i < listData.length; i++) {
      if (listData[i].Id === personId) {
        res = listData[i];
      }
    }
    person_data = require("../component/data/" + res.Name + ".json");
  } else {
    for (let i = 0; i < listData.length; i++) {
      if (listData[i].Fullname === fullname) {
        res = listData[i];
      }
    }
    person_data = require("../component/data/" + res.Name + ".json");
  }
  return { ...res, person_data: person_data };
};

// Months

export const months = (X) => {
  if (X === undefined) {
    return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  }
  let p = "";
  let a = 0;
  let res = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < X.length; i++) {
    p = X[i].year[1];
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

export const Get_personID_by_Fullname = (Fullname) => {
  let res;
  for (let i = 0; i < listData.length; i++) {
    if (listData[i].Fullname === Fullname) {
      res = listData[i].Id;
    }
  }
  return res;
};

export const Filter_by_languages = (
  lan,
  languages_used,
  onoff,
  setOnOff,
  type
) => {
  const position = languages_used.indexOf(lan);
  if (onoff[position] === type) {
    onoff[position] = "off";
  } else {
    onoff[position] = "on";
  }
  setOnOff(onoff);
};
export const filtring_by_type = (data, type) => {
  let res = [];
  let opinion = [type.positive, type.netural, type.negative];
  if (opinion[0]) opinion.push("P");
  if (opinion[1]) opinion.push("O");
  if (opinion[2]) opinion.push("N");
  for (let i = 0; i < data.length; i++) {
    if (opinion.includes(data[i].comment_type)) res.push(data[i]);
  }
  return res;
};
export const filtring_by_language = (data, languages) => {
  let res = [];
  let selectedlanguages = [];
  for (const property in languages) {
    if (languages[property]) {
      selectedlanguages.push(property);
    }
  }
  for (let i = 0; i < data.length; i++) {
    if (selectedlanguages.includes(data[i].Language)) res.push(data[i]);
  }
  return res;
};
export const filtring = (date, opinion, state, selectedLanguages) => {
  let from = date.year;
  let to = date.to;
  let res = state;
  // if (date.from === "-") from = "2020-03-01";
  // if (date.to === "-") to = "2024-03-01";
  res = Filtring_by_Year(date, state);
  if (date.month !== "All") {
    res = Filtring_by_Month(date, state);
  }
  // res = filtring_by_type(res, opinion);
  // res = filtring_by_language(res, selectedLanguages);
  return res;
};

export const Filtring_by_Year = (date, data) => {
  let year;
  date.year === "All" ? (year = "2023") : (year = date.year);
  let res = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].year[0] === year) res.push(data[i]);
  }
  return res;
};
export const Filtring_by_Month = (date, data) => {
  if (date.month === "All") {
    return data;
  }
  const month = date.month.toString();
  let res = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].year[1] === month) res.push(data[i]);
  }
  return res;
};

export const label = (date) => {
  const month = date.month;
  let i = 0;
  let res = [];
  let calender31 = ["01", "03", "05", "07", "08", "10", "12"];
  let calender30 = ["04", "06", "09", "11"];
  let calender28 = ["02"];
  if (month === "All")
    res = [
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
  else {
    if (calender31.includes(month))
      for (i = 1; i < 32; i++) {
        res.push(i.toString());
      }
    if (calender30.includes(month))
      for (i = 1; i < 31; i++) {
        res.push(i.toString());
      }
    if (calender28.includes(month))
      for (i = 1; i < 29; i++) {
        res.push(i.toString());
      }
  }
  return res;
};

export const Data_by_Day = (labels, month, data) => {
  let res = [];
  for (let i = 0; i < labels.length; i++) {
    res.push(0);
  }
  console.log("month\n", month);
  for (let i = 0; i < data.length; i++) {
    if (month === data[i].year[1]) {
      res[parseInt(data[i].year[2]) - 1] =
        res[parseInt(data[i].year[2]) - 1] + 1;
    }
  }
  return res;
};
