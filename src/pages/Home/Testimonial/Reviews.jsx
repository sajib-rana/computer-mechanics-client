

const Reviews = ({ review }) => {
  return (
    <div>
      <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <div className="card-body">
          <p>{review.reviews}</p>
        </div>
        <div className="flex item-center p-5">
          <img className="w-12 h-12 rounded-full" src={review.img} alt="" />
          <div className="pl-5">
            <h2 className="text-xl font-bold">{review.name}</h2>
            <h2>{review.state}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
