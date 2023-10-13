
import people1 from "../../../assets/imges/sajib.webp";
import people2 from "../../../assets/imges/sajib.webp";
import people3 from "../../../assets/imges/sajib.webp";
import Reviews from "./Reviews";

const Testimonials = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Harry",
      reviews:
        "This is very good service. I appreciate for this service and thank you for everything",
      img: people1,
      state: "New York",
    },
    {
      _id: 2,
      name: "Ms Harry",
      reviews:
        "This is very good service. I appreciate for this service and thank you for everything",
      img: people2,
      state: "Washington DC",
    },
    {
      _id: 3,
      name: "Harry potan",
      reviews:
        "This is very good service. I appreciate for this service and thank you for everything",
      img: people3,
      state: "California",
    },
  ];
  return (
    <div className="my-28">
      <div className="flex justify-between">
        <div>
          <h4 className="text-xl text-accent font-bold">Testimonials</h4>
          <h2 className="text-3xl">What say our customer</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((review) => (
          <Reviews key={review._id} review={review}></Reviews>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
