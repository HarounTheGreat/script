import Recherche from "../component/first_comments/recherche/recherche";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";
import Area_chart from "./area_chart";
const Dashboard = ({ data }) => {
  let { productId } = useParams();
  productId = parseInt(productId);
  return (
    <>
      <Navbar idnumber={productId} />
      <section className="section">
        <Recherche data={data} />
      </section>
    </>
  );
};
export default Dashboard;
