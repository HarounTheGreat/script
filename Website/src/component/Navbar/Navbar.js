import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = ({ idnumber }) => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link style={{ textDecoration: "none" }} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            style={{ textDecoration: "none" }}
            to={`/${idnumber}/area_chart`}
          >
            Area Chart
          </Link>
        </li>
        <li>
          <Link
            style={{ textDecoration: "none" }}
            to={`/${idnumber}/bar_chart`}
          >
            Bar Chart
          </Link>
        </li>
        <li>
          <Link
            style={{ textDecoration: "none" }}
            to={`/${idnumber}/bubble_chart`}
          >
            Bubble Chart
          </Link>
        </li>
        <li>
          <Link
            style={{ textDecoration: "none" }}
            to={`/${idnumber}/column_chart`}
          >
            Column Chart
          </Link>
        </li>
        <li>
          <Link
            style={{ textDecoration: "none" }}
            to={`/${idnumber}/doughnut_chart`}
          >
            Doughnut Chart
          </Link>
        </li>
        <li>
          <Link
            style={{ textDecoration: "none" }}
            to={`/${idnumber}/line_chart`}
          >
            Line Chart
          </Link>
        </li>
        <li>
          <Link
            style={{ textDecoration: "none" }}
            to={`/${idnumber}/pie_chart`}
          >
            Pie Chart
          </Link>
        </li>
        <li>
          <Link
            style={{ textDecoration: "none" }}
            to={`/${idnumber}/stacked_bar_charts`}
          >
            Stacked Bar Charts
          </Link>
        </li>
        <li>
          <Link
            style={{ textDecoration: "none" }}
            to={`/${idnumber}/analyse_by_language`}
          >
            Analyse by Language
          </Link>
        </li>
        <li>
          <Link
            style={{ textDecoration: "none" }}
            to={`/${idnumber}/multiaxis_line_chart`}
          >
            Multiaxis Line Chart
          </Link>
        </li>
      </ul>
      <p></p>
    </nav>
  );
};
export default Navbar;
