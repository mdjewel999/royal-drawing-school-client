

const StudentesClass = ({item}) => {
    const {name, instructorName, price, availableSeats, image}= item;
    console.log(item);
    return (
        <div>
            <img className="w-[400px] h-[250px]" src={image} alt="" />
            <h1>Name: {name}</h1>
            <p>instructor Name: {instructorName}</p>
            <p>price: $ {price}</p>
            <p>available Seats: {availableSeats}</p>
        </div>
    );
};

export default StudentesClass;