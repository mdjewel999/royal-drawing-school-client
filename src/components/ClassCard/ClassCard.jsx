

const ClassCard = ({item}) => {
    const {name, instructorName, price, availableSeats, image}= item;
    return (
       <>
       
        <div className="">
       <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
          className="w-[400px] h-[250px]"
            src={image}
            alt="Shoes"
          />
        </figure>
        <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">${price}</p>
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title">{name}</h2>
          <p>{instructorName}</p>
          <p>{availableSeats}</p>
          
        </div>
      </div>
        </div>
       </>
    );
};

export default ClassCard;