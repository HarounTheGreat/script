import "./intro.css";
const Intro = ({ intro_img }) => {
  return (
    <div className="into">
      <div className="website-description">
        <div className="into-item into-item-1">
          <h2>Fastest and easyest way to see Predicting Business Trends</h2>
        </div>
        <div className="into-item into-item-2">
          <p>
            Accurately predict trading trends using historical and real-time
            data analysis.
          </p>
        </div>
        <button className="into-item into-item-3">See More</button>
      </div>
      <div className="intro-img">
        <img className="imgimg" src={intro_img} alt="intro img"></img>
      </div>
    </div>
  );
};
export default Intro;
