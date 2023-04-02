import "./services.css";
import List from "./list";
const Services = ({ img1, img2 }) => {
  return (
    <div>
      <h1> Our Services</h1>
      <div className="services">
        <div className="box1">
          <div className="analyse-on-one-person">
            <div className="analyse-on-one-person analyse-on-one-person-1">
              <img src={img2} alt="trump_image" />
            </div>
            <div className="analyse-on-one-person analyse-on-one-person-2">
              analyse on one person
            </div>
            <div className="analyse-on-one-person analyse-on-one-person-3">
              You see the analysis on specific person order by date , languages
              and reviews Types for example Donald Trump
            </div>
          </div>
        </div>
        <div className="box2">
          <div className="comparison-tow-persons">
            <div className="comparison-tow-persons comparison-tow-persons-1">
              <img src={img2} alt="biden_image" />
            </div>
            <div className="comparison-tow-persons comparison-tow-persons-2">
              comparison tow persons
            </div>
            <div className="comparison-tow-persons comparison-tow-persons-3">
              You can see the analysis of comparison between two persons order
              by date , languages and reviews Types. for example Donald Trump VS
              Joe Biden
            </div>
          </div>
        </div>
      </div>
      <List />
    </div>
  );
};
export default Services;
