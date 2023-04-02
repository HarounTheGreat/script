import Services from "../component/services/services";
import trump from "../img/trump.jpg";
import biden from "../img/biden.jpg";
import Intro from "../component/intro/into";
import intro_img from "../img/intro_img.png";
import Contact from "../component/contact us/contact";
import Navbar from "../component/Navbar";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Intro intro_img={intro_img} />
      <Services img1={trump} img2={biden} />
      <Contact />
    </div>
  );
};
export default Home;
