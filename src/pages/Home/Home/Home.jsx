import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Services from "../Services/Services";


const Home = () => {
    return (
      <div>
        <Helmet>
          <title>computer mechanics | Home</title>
        </Helmet>
          <Banner></Banner>
          <About></About>
          <Services></Services>
        
      </div>
    );
};

export default Home;