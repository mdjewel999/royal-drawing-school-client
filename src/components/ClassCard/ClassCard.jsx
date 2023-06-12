import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const ClassCard = ({ item }) => {
  const { name, instructorName, price, availableSeats, image, _id } = item;
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToService = () => {
    if (user && user.email) {
      const cartItem = {
        menuItemId: _id,
        name,
        instructorName,
        availableSeats: availableSeats - 1,
        image,
        price,
        email: user.email,
      };

      fetch("https://royal-drawing-school-server-mdjewel999.vercel.app/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Classes added to the cart.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((error) => {
          console.error("Error adding class to cart:", error);
        });
    } else {
      Swal.fire({
        title: "Please login to order the class",
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
    <div className="">
      <div className="card h-[480px] w-full bg-base-100 shadow-xl">
        <figure>
          <img className="w-[400px] h-[250px]" src={image} alt="Shoes" />
        </figure>
        <p className="absolute right-0 mr-4 mt-4 px-4 bg-yellow-600 rounded-full text-white">
          ${price}
        </p>
        <div className="card-body flex flex-col mx-auto my-auto justify-start">
          <h2 className="card-title">Name: {name}</h2>
          <p>instructor Name: {instructorName}</p>
          <p>available Seats: {availableSeats}</p>
        </div>
        <div>
          <button
            onClick={handleAddToService}
            className="btn w-2/3 mb-4 justify-center btn-primary"
            disabled={availableSeats === 0}
          >
            My Enrolled Classes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;










// import { useContext } from "react";
// import { AuthContext } from "../../providers/AuthProvider";
// import Swal from "sweetalert2";
// import { useLocation, useNavigate } from "react-router-dom";
// import useCart from "../../hooks/useCart";


// const ClassCard = ({ item }) => {
//   const { name, instructorName, price, availableSeats, image, _id } = item;
//   const { user } = useContext(AuthContext);
//   const [, refetch] = useCart();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleAddToService = () => {
//     if (user && user.email) {
//       const cartItem = {
//         menuItemId: _id,
//         name,
//         instructorName,
//         availableSeats: availableSeats - 1,
//         image,
//         price,
//         email: user.email,
//       };

//       fetch("https://royal-drawing-school-server-mdjewel999.vercel.app/carts", {
//         method: "POST",
//         headers: {
//           "content-type": "application/json",
//         },
//         body: JSON.stringify(cartItem),
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           if (data.insertedId) {
//             refetch();
//             Swal.fire({
//               position: "top-end",
//               icon: "success",
//               title: "Classes added to the cart.",
//               showConfirmButton: false,
//               timer: 1500,
//             });
//           }
//         });
//     } else {
//       Swal.fire({
//         title: "Please login to order the class",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "Login now!",
//       }).then((result) => {
//         if (result.isConfirmed) {
//           navigate("/login", { state: { from: location } });
//         }
//       });
//     }
//   };

//   return (
//     <div className="">
//       <div className="card h-[480px] w-full bg-base-100 shadow-xl">
//         <figure>
//           <img className="w-[400px] h-[250px]" src={image} alt="Shoes" />
//         </figure>
//         <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">
//           ${price}
//         </p>
//         <div className="card-body flex flex-col mx-auto my-auto justify-start">
//           <h2 className="card-title">Name: {name}</h2>
//           <p>instructor Name: {instructorName}</p>
//           <p>available Seats: {availableSeats}</p>
//         </div>
//         <div>
//           <button
//             onClick={handleAddToService}
//             className="btn w-2/3 justify-center btn-primary"
//             disabled={availableSeats === 0}
//           >
//             My Enrolled Classes
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClassCard;
