import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const CheckOut = () => {
     const service = useLoaderData();
     const { title, _id, price, img } = service;
     const { user } = useContext(AuthContext);
      const location = useLocation();
      const navigate = useNavigate();
    
     const handleBookService = (event) => {
       event.preventDefault();

       const form = event.target;
       const name = form.name.value;
       const date = form.date.value;
       const email = user?.email;
       const booking = {
         customerName: name,
         email,
         img,
         date,
         service: title,
         service_id: _id,
         price: price,
       };


      if(user){
         fetch("http://localhost:5000/bookings", {
           method: "POST",
           headers: {
             "content-type": "application/json",
           },
           body: JSON.stringify(booking),
         })
           .then((res) => res.json())
           .then((data) => {
             console.log(data);
             if (data.insertedId) {
               Swal.fire({
                 title: "Done",
                 text: "Order Completed Successfully",
                 imageUrl: "https://unsplash.it/400/200",
                 imageWidth: 400,
                 imageHeight: 200,
                 imageAlt: "Custom image",
               });
             }
           });
      }
      else{
         Swal.fire({
           title: "Please login before purchase",
           icon: "warning",
           showCancelButton: true,
           confirmButtonColor: "#3085d6",
           cancelButtonColor: "#d33",
           confirmButtonText: "Login now!",
         }).then((result) => {
           if (result.isConfirmed) {
             navigate("/login", { state: { from: location } });
           }
         });
      }
     };
    return (
      <div>
        <h2 className="text-center text-3xl">Book Service: {title} </h2>
        <form onSubmit={handleBookService}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
              required
                type="text"
                defaultValue={user?.displayName}
                name="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input required type="date" name="date" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
              required
                type="text"
                name="email"
                defaultValue={user?.email}
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Due amount</span>
              </label>
              <input
              required
                type="text"
                defaultValue={"$" + price}
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-primary btn-block"
              type="submit"
              value="Order Confirm"
            />
          </div>
        </form>
        <div className="card-body"></div>
      </div>
    );
};

export default CheckOut;