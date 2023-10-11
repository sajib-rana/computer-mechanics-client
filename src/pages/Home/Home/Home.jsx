import { Helmet } from "react-helmet-async";


const Home = () => {
    return (
      <div>
        <Helmet>
          <title>computer mechanics | Home</title>
        </Helmet>

        <button className="btn btn-secondary">Secondary</button>
        <button className="btn btn-accent">Accent</button>
      </div>
    );
};

export default Home;