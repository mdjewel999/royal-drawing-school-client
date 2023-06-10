import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import StudentesClass from "../../Sheard/StudentesClass/StudentesClass";

const PopularClasses = () => {
  const [popularInstruct, setPopularInstruct] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch('popularClass.json')
      .then(res => res.json())
      .then(data => setPopularInstruct(data))
      .catch(error => console.log(error));
  }, []);

  const handleToggleView = () => {
    setShowAll(!showAll);
  };

  return (
    <section>
      <SectionTitle
        heading={"Popular Class"}
        subHeading={"Teaching Online"}
      ></SectionTitle>
      <div className="grid md:grid-cols-3 gap-4">
        {popularInstruct.slice(0, showAll ? popularInstruct.length : 6).map(item => (
          <StudentesClass key={item._id} item={item}></StudentesClass>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button className="btn btn-primary" onClick={handleToggleView}>
          {showAll ? "Show Less" : "Show All"}
        </button>
      </div>
    </section>
  );
};

export default PopularClasses;





// import { useEffect, useState } from "react";
// import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// import StudentesClass from "../../Sheard/StudentesClass/StudentesClass";

// const PopularClasses = () => {

//   const [popularInstruct, setPopularInstruct] = useState([]);
//   const [showAll, setShowAll] = useState(false);

//   useEffect(() => {
//     fetch('popularClass.json')
//       .then(res => res.json())
//       .then(data => setPopularInstruct(data))
//       .catch(error => console.log(error)); // Add error handling if needed
//   }, []);

//   const handleToggleView = () => {
//     setShowAll(!showAll);
//   };


//   return (
//     <section>
//     <SectionTitle
//       heading={"Popular Class"}
//       subHeading={"Teaching Online"}
//     ></SectionTitle>
//     <div className="grid md:grid-cols-3 gap-4">
//       {popularInstruct.slice(0, showAll ? popularInstruct.length : 6).map(item => (
//         <StudentesClass key={item.id} item={item}></StudentesClass>
//       ))}
//     </div>
//     {showAll ? (
//       <div className="flex justify-center mt-4">
//         <button className="btn btn-primary" onClick={handleToggleView}>
//           Show Less
//         </button>
//       </div>
//     ) : (
//       <div className="flex justify-center mt-4">
//         <button className="btn btn-primary" onClick={handleToggleView}>
//           Show All
//         </button>
//       </div>
//     )}
//   </section>
//   );
// };

// export default PopularClasses;
