import { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const StudentesClass = ({ item }) => {
  const { name, instructorName, price, availableSeats, image } = item;
  const [isHovered, setIsHovered] = useState(false);

  const animationProps = useSpring({
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
    config: { tension: 300, friction: 10 },
  });

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <animated.div style={animationProps}>
        <img className="w-[400px] h-[250px]" src={image} alt="" />
        <h1>Name: {name}</h1>
        <p>Instructor Name: {instructorName}</p>
        <p>Price: $ {price}</p>
        <p>Available Seats: {availableSeats}</p>
      </animated.div>
    </div>
  );
};

export default StudentesClass;
