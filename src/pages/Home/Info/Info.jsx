
import InfoCard from "./InfoCard";
import clock from "../../../assets/imges/clock.svg";
import marker from "../../../assets/imges/marker.svg";
import phone from "../../../assets/imges/phone.svg";

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-28">
      <InfoCard
        bgClass="bg-gradient-to-r from-cyan-500 to-blue-500"
        cardTittle="Opening Hours"
        img={clock}
      ></InfoCard>
      <InfoCard
        bgClass="bg-primary"
        cardTittle="Our Locatons"
        img={marker}
      ></InfoCard>
      <InfoCard
        bgClass="bg-gradient-to-r from-cyan-500 to-blue-500"
        cardTittle="Contact us"
        img={phone}
      ></InfoCard>
    </div>
  );
};

export default Info;
