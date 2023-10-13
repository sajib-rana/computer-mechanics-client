import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";


const Home = () => {
    return (
      <div>
        <Helmet>
          <title>computer mechanics | Home</title>
        </Helmet>
          <Banner></Banner>
          <About></About>
          <Services></Services>
          <Testimonial></Testimonial>
        
      </div>
    );
};

export default Home;