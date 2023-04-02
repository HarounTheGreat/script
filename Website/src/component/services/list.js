import OnePerson from "./onePerson";
import "./list.css";
import { Link } from "react-router-dom";
import listData from "./listData";
const List = () => {
  return (
    <div>
      <div className="services-list">
        {listData.map((item) => (
          <>
            <OnePerson
              id={item.Id}
              name={item.Fullname}
              status={item.Status}
              description={item.Description}
              image={item.Image}
            />
            {/* <Link to={`/${item.Id}`}>more info</Link> */}
          </>
        ))}
      </div>
    </div>
  );
};
export default List;
