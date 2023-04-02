import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./component/error/error";
import Dashboard from "./pages/dashboard";
import Home from "./pages/home";
import Area_chart from "./pages/area_chart";
import Bar_chart from "./pages/bar_chart";
import Bubble_chart from "./pages/bubble_chart";
import Doughnut_chart from "./pages/doughnut_chart";
import Line_chart from "./pages/line_chart";
import Analyse_by_language from "./pages/analyse_by_language";
import Pie_chart from "./pages/pie_chart";
import Multiaxis_line_chart from "./pages/multiaxis_line_chart";
import SinglePerson from "./component/services/SinglePerson";
import trump from "./data";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/services" element={<Dashboard data={trump} />} /> */}
          <Route path=":personId/bar_chart" element={<Bar_chart />} />
          <Route path=":personId/bubble_chart" element={<Bubble_chart />} />
          <Route path=":personId/Doughnut_chart" element={<Doughnut_chart />} />
          <Route path=":personId/line_chart" element={<Line_chart />} />
          <Route
            path=":personId/analyse_by_language"
            element={<Analyse_by_language />}
          />
          <Route path=":personId/pie_chart" element={<Pie_chart />} />
          <Route
            path=":personId/multiaxis_line_chart"
            element={<Multiaxis_line_chart />}
          />
          <Route path=":productId" element={<SinglePerson />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
