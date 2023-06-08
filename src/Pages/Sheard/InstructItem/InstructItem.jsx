

const InstructItem = ({item}) => {
    const {name, image, email}= item;
    return (
        <div>
            <img src={image} alt="" />
            <h1>Name: {name}</h1>
            <p>Email: {email}</p>
        </div>
    );
};

export default InstructItem;