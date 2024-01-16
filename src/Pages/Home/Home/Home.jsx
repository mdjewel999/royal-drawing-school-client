import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstruct from "../PopularInstruct/PopularInstruct";
import Testimonials from "../../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Banner></Banner>
      <PopularClasses></PopularClasses>
      <PopularInstruct></PopularInstruct>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
