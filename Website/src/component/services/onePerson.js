import "./onePerson.css";
import { Link, useParams } from "react-router-dom";
import listData from "./listData";
const OnePerson = ({ id, name, status, description, image }) => {
  return (
    <div className="one-item-of-list">
      <Link to={`/${id}`}>
        <div class="card">
          <div class="imgbox">
            <div class="img">
              <img src={image} alt={id} />
            </div>
          </div>
          <div class="details">
            <h2 class="title">
              <div className="info-cart1">{name}</div>
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default OnePerson;
