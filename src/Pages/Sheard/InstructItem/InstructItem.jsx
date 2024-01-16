import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './InstructItem.css';

const InstructItem = ({ item }) => {
  const { name, image, email } = item;
  const [isHovered, setIsHovered] = useState(false);

  const animationProps = useSpring({
    scale: isHovered ? 1.1 : 1,
  });

  return (
   <div>
     <div
      className="image-container relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <animated.div style={{ transform: animationProps.scale.interpolate(scale => `scale(${scale})`) }}>
        <img className=" object-cover" src={image} alt="" />
      </animated.div>
      {isHovered && (
      <div className='overlay absolute inset-0 bg-green-500 bg-opacity-50 flex items-center justify-center text-white'>
      <div className="content text-xl font-serif text-black">
        <h1>Name: {name}</h1>
        <p>Email: {email}</p>
      </div>
      </div>
       )}
    </div>
    <div className="items-center">
        <button className="btn-apply">CONTACT US</button>
      </div>
   </div>
  );
};

export default InstructItem;
