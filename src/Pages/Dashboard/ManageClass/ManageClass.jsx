// import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// import useMenu from "../../../hooks/useMenu";
// import Swal from "sweetalert2";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";

// const ManageClass = () => {
//   const [menu, , refetch] = useMenu();
//   const [axiosSecure] = useAxiosSecure();

//   const handleDelete = (item) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         axiosSecure.delete(`/menu/${item._id}`).then((res) => {
//           console.log("deleted res", res.data);
//           if (res.data.deletedCount > 0) {
//             refetch();
//             Swal.fire("Deleted!", "Your file has been deleted.", "success");
//           }
//         });
//       }
//     });
//   };

//   return (
//     <div className="w-full">
//       <SectionTitle
//         heading="Manage All Class"
//         subHeading="Admin Manage Classes page"
//       ></SectionTitle>

//       <div className="grid md:grid-cols-3 gap-4">
//         {menu.map((item) => (
//           <div
//             key={item._id}
//             className="card shadow-xl hover:scale-105 transition-transform duration-500"
//           >
//             <div>
//               <figure>
//                 <img className="w-72 h-48" src={item.image} alt="Shoes" />
//               </figure>
//               <div className="card-body">
//                 <h4 className="card-title">{item.instructorName}</h4>
//                 <p>Class Name: {item.category}</p>
//                 <p>Instructor Email: {item.instructorEmail}</p>
//                 <p>Seats: {item.availableSeats}</p>
//                 <p>Email: {item.instructorEmail}</p>
//                 <div className="flex gap-2">
//                   <button className="btn btn-sm bg-orange-600">pending</button>
//                   <button className="btn btn-sm bg-yellow-600">approved</button>
//                   <button
//                     onClick={() => handleDelete(item)}
//                     className="btn bg-red-600 btn-sm"
//                   >
//                     denied
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ManageClass;


import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageClass = () => {
  const [menu, , refetch] = useMenu();
  const [axiosSecure] = useAxiosSecure();


  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/menu/${item._id}`).then((res) => {
          console.log("deleted res", res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    });
  };

  const handleApprove = (item) => {
    Swal.fire({
        title: 'Are you sure?',
        text: "Your class is Approved!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Approve it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Approved!',
            'Your file has been Approved.',
            'success'
          )
        }
      })
    axiosSecure
      .patch(`/menu/${item._id}`, { status: "approved" })
      .then((res) => {
        console.log("approved res", res.data);
        refetch();
      })
      .catch((error) => {
        console.error("Approve error", error);
      });
  };

  const handleDeny = (item) => {
    Swal.fire({
        title: 'Are you sure?',
        text: "Your Class Pending this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Pending it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
    axiosSecure
      .patch(`/menu/${item._id}`, { status: "denied" })
      .then((res) => {
        console.log("denied res", res.data);
        refetch();
      })
      .catch((error) => {
        console.error("Deny error", error);
      });
  };


  return (
    <div className="w-full">
      <SectionTitle
        heading="Manage All Class"
        subHeading="Admin Manage Classes page"
      ></SectionTitle>

      <div className="grid md:grid-cols-3 gap-4">
        {menu.map((item) => (
          <div
            key={item._id}
            className="card shadow-xl hover:scale-105 transition-transform duration-500"
          >
            <div>
              <figure>
                <img className="w-72 h-48" src={item.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h4 className="card-title">{item.instructorName}</h4>
                <p>Class Name: {item.category}</p>
                <p>Instructor Email: {item.instructorEmail}</p>
                <p>Seats: {item.availableSeats}</p>
                <p>Email: {item.instructorEmail}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleDeny(item)}
                    className="btn btn-sm bg-orange-600"
                  >
                    Pending
                  </button>
                  <button
                    onClick={() => handleApprove(item)}
                    className="btn btn-sm bg-yellow-600"
                  >
                    Approved
                  </button>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn bg-red-600 btn-sm"
                  >
                    Denied
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageClass;

