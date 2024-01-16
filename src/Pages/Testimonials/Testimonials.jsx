import testimonials from "../../assets/home/testimonial.jpg";
import './Testimonials.css'

const Testimonials = () => {
  return (
    <>
      <div className="hero w-full mx-auto mt-16">
        <div className="hero-content flex-col lg:flex-row gap-6 ">
          <img src={testimonials} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="border rounded px-8 py-16 shadow-xl">
            <h1 className="text-3xl px-16">
              Summer School 2023 | One-week courses in drawing, painting,
              printmaking and sculpture | Starts 3 July
            </h1>
            <button className="btn btn-test mt-4 ml-16">Learn more {'>'}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
