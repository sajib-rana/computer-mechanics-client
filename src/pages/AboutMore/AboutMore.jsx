// import Banner from "../Home/Banner/Banner";
import { Helmet } from 'react-helmet-async';
import img from '../../assets/imges/banner-1.webp'


const AboutMore = () => {
    return (
      <div>
        <Helmet>
          <title>computer mechanics | AboutMore</title>
        </Helmet>
        {/* <Banner></Banner> */}
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                  Which way to connected your computer mechanic servicing Team?
                </div>
                <div className="collapse-content">
                  <p>
                    These are general steps for servicing a computer, but the
                    specifics can vary depending on the type of computer and the
                    nature of the service You are performing. Always consult the
                    computer manual and follow best practices to ensure safety
                    and proper servicing. If you have a specific issue or
                    question, feel free to provide more details, and I can offer
                    more targeted advice.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                  Which way to connected your computer mechanic servicing Team?
                </div>
                <div className="collapse-content">
                  <p>
                    {" "}
                    These are general steps for servicing a computer, but the
                    specifics can vary depending on the type of computer and the
                    nature of the service You are performing. Always consult the
                    computer manual and follow best practices to ensure safety
                    and proper servicing. If you have a specific issue or
                    question, feel free to provide more details, and I can offer
                    more targeted advice.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                  Which way to connected your computer mechanic servicing Team?
                </div>
                <div className="collapse-content">
                  <p>
                    {" "}
                    These are general steps for servicing a computer, but the
                    specifics can vary depending on the type of computer and the
                    nature of the service You are performing. Always consult the
                    computer manual and follow best practices to ensure safety
                    and proper servicing. If you have a specific issue or
                    question, feel free to provide more details, and I can offer
                    more targeted advice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AboutMore;