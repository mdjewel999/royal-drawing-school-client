import { useEffect, useState } from "react";

const InstructorsPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/reviews");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  return (
    <div>
     
      <div className="grid md:grid-cols-3 gap-4 mt-4 mx-auto">
        {data.map((item) => (
          <div key={item._id}>
            <div className="card card-compact w-full   bg-base-100 shadow-xl">
              <figure>
                <img
                 className="w-[384px] h-[255px] rounded-t-md"
                  src={item.image}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h1 className="card-title">Instructors Nmae: {item.name}</h1>
                <h2>Email: {item.email}</h2>
                <h2>Classes taken: {item.numClassesTaken}</h2>
                <div className="card-actions justify-center">
                  <button className="btn btn-primary ">show classes </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructorsPage;
