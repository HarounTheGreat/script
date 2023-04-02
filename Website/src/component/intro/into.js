import "./intro.css";
const Intro = ({ intro_img }) => {
  return (
    <div className="into">
      <div className="website-description">
        <div className="into-item into-item-1">
          <h2>Fastest and easyest way to see reviews from social media</h2>
        </div>
        <div className="into-item into-item-2">
          <p>
            Accurately analyzing feedback from customers and evaluations in many
            languages
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
