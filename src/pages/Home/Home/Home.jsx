import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import About from "../About/About";


const Home = () => {
    return (
      <div>
        <Helmet>
          <title>computer mechanics | Home</title>
        </Helmet>
          
          <Banner></Banner>
          <About></About>
        
      </div>
    );
};

export default Home;