

const InstructItem = ({item}) => {
    const {name, image, email}= item;
    return (
        <div>
            <img className="w-[400px] h-[250px]" src={image} alt="" />
            <h1>Name: {name}</h1>
            <p>Email: {email}</p>
        </div>
    );
};

export default InstructItem;