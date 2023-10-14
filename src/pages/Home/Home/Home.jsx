import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";
import Info from "../Info/Info";
import ExpertTeam from "../ExpertTeam/ExpertTeam";
import Featured from "../Featured/Featured";


const Home = () => {
    return (
      <div>
        <Helmet>
          <title>computer mechanics | Home</title>
        </Helmet>
          <Banner></Banner>
          <About></About>
          <Services></Services>
          <Info></Info>
          <ExpertTeam></ExpertTeam>
          <Featured></Featured>
          <Testimonial></Testimonial>
        
      </div>
    );
};

export default Home;