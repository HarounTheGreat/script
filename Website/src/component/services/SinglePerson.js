import { Link, useParams } from "react-router-dom";
import listData from "./listData";
import Dashboard from "../../pages/dashboard";
const SinglePerson = () => {
  let product;
  let { productId } = useParams();
  productId = parseInt(productId);
  for (let i = 0; i < listData.length; i++) {
    if (listData[i].Id === productId) {
      product = listData[i];
    }
  }
  const { Id, Name, Fullname, Status, Description, Image } = product;
  let data = require("../data/" + product.Name + ".json");
  return (
    <div className="single-person">
      <h1>{Fullname}</h1>
      <Dashboard data={data} />
    </div>
  );
};
export default SinglePerson;
