import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";




const ExpertTeam = () => {
     const [reviews, setReviews] = useState([]);

     useEffect(() => {
       fetch("review.json")
         .then((res) => res.json())
         .then((data) => setReviews(data));
     }, []);
    return (
      <div>
        <SectionTitle heading="Meet Our Team" subHeading="Team"></SectionTitle>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col items-center my-6">
                  <img src={review.img} alt="" />
                <p className="pt-2">{review.name}</p>
                <h3 className="text-2xl text-orange-400">{review.reviews}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
};

export default ExpertTeam;