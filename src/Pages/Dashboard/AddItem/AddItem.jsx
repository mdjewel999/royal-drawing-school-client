import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;


const AddItem = () => {
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;


  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { name, price,ClassDetails,  category, instructorName,InstructorEmail ,availableSeats} = data;
          const newItem = {
            name,
            price: parseFloat(price),
            category,
            instructorName,
            InstructorEmail,
            availableSeats,
            ClassDetails,
            image: imgURL,
          };
          console.log(newItem);
          axiosSecure.post("/menu", newItem).then((data) => {
            console.log("after posting new menu item", data.data);
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Class added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };

  return (
    <div className="w-full px-10">
      <SectionTitle
        subHeading="What's new"
        heading="Add Classes"
      ></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
       

        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Instructor name*</span>
          </label>
          <input
            type="text"
            placeholder="Instructor name"
            {...register("InstructorName", { required: true, maxLength: 120 })}
            className="input input-bordered w-full "
          />
        </div>

        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold"> Instructor email*</span>
          </label>
          <input
            type="text"
            placeholder=" Instructor email"
            {...register("InstructorEmail", { required: true, maxLength: 120 })}
            className="input input-bordered w-full "
          />
        </div>

        <div className="form-control w-full ml-4">
            <label className="label">
              <span className="label-text font-semibold">Available seats*</span>
            </label>
            <input
              type="number"
              {...register("availableSeats", { required: true })}
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
        <div className="flex my-4">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Add a Class Name*</span>
            </label>
            <select
              defaultValue="Pick One"
              {...register("category", { required: true })}
              className="select select-bordered"
            >
              <option disabled>Add a Class Name</option>
              <option>Anatomy Drawing</option>
              <option>Still Life Drawing</option>
              <option>Cartoon Drawing</option>
              <option>Portrait Drawing</option>
              <option>Figure Drawing</option>
              <option>Experimental Drawing</option>
            </select>
          </div>
          <div className="form-control w-full ml-4">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <input
              type="number"
              {...register("price", { required: true })}
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Class Details</span>
          </label>
          <textarea
            {...register("ClassDetails", { required: true })}
            className="textarea textarea-bordered h-24"
            placeholder="Details"
          ></textarea>
        </div>
        <div className="form-control w-full my-4">
          <label className="label">
            <span className="label-text">Class Image*</span>
          </label>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input file-input-bordered w-full "
          />
        </div>
        <input className="btn btn-secondary mt-4" type="submit" value="Add Class" />
      </form>
    </div>
  );
};

export default AddItem;
