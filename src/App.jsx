import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.css";
import Product from "./components/Product/Product";
import LatestProduct from "./components/LatestProduct/LatestProduct";
import Contact from "./components/Contact/Contact";
import FindUs from "./components/FindUs/FindUs";
import Footer from "./components/Footer/Footer";
import TeamMember from "./components/TeamMember/TeamMember";
import VisionMission from "./components/VisionMission/VisionMission";
import LatestProduct1 from "./components/LatestProduct1/LatestProduct1";
import Video from "./components/Video/Video";
function App() {
  return (
    <div className="App">
      <div>
        <div className="blue-gradient" />
        <Header />
        <Hero />
        <Video />
      </div>
      <div>
        <Product />
        <div className="white-gradient"></div>
        <LatestProduct1 />
      </div>
      <LatestProduct />
      <div className="pink-gradient"></div>
      <VisionMission />
      <TeamMember />
      <FindUs />
      <div className="green-gradient" />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
