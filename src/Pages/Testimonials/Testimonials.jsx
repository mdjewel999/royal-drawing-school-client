import testimonials from "../../assets/home/testimonial.jpg";

const Testimonials = () => {
  return (
    <>
      <div className="hero w-full mx-auto mt-8">
        <div className="hero-content flex-col lg:flex-row gap-6 ">
          <img src={testimonials} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl px-16">
              Summer School 2023 | One-week courses in drawing, painting,
              printmaking and sculpture | Starts 3 July
            </h1>
            <button className="btn btn-primary mt-4 ml-16">Learn more {'>'}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
