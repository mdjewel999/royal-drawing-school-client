import "./StudentesClass.css";
import { useState } from "react";

const StudentesClass = ({ item }) => {
  const { name, instructorName, price, availableSeats, image } = item;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="shadow-xl rounded-md p-2 cursor-pointer">
      <div
        className="image-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          className={`w-[400px] h-[250px] course-box ${
            isHovered ? "zoomed" : ""
          }`}
          src={image}
          alt=""
        />
      </div>
      <div className="p-2 font-serif ">
        <h1 className="text-xl font-bold">
          <span className="text-xl font-semibold my-2">Name :</span> {name}
        </h1>
        <p className="  my-2">Instructor : {instructorName}</p>
        <p className=" my-2">Price : $ {price}</p>
        <p className=" my-2">Available Seats : {availableSeats}</p>
      </div>
      <div className="items-center">
        <button className="btn-apply">APPLY NOW</button>
      </div>
    </div>
  );
};

export default StudentesClass;
