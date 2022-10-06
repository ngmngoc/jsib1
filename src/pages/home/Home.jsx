import Bod from "../../components/content/Body";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./home.css"

const Home = () => {
  return (
    <div className="homeHeader">
      <Navbar />
      <Header/>
      <div className="homeContainer">
        <Bod/>
      </div>
    </div>
  );
};

export default Home;