import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import StudentesClass from "../../Sheard/StudentesClass/StudentesClass";
import './PopularClasses.css'

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
      <div className="grid md:grid-cols-3 gap-6">
        {popularInstruct.slice(0, showAll ? popularInstruct.length : 6).map(item => (
          <StudentesClass key={item._id} item={item}></StudentesClass>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="btn btn-show" onClick={handleToggleView}>
          {showAll ? "Show Less" : "Show All"}
        </button>
      </div>
    </section>
  );
};

export default PopularClasses;


