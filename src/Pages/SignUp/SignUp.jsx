import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../Sheard/SocialLogin/SocialLogin";
import { Helmet } from "react-helmet-async";
import signUp from "../../assets/others/signup.jpeg";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const { name, email, password, photoURL, confirmPassword, gender, phoneNumber, address } = data;
    if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Password does not match",
      });
      return;
    }

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);

        updateUserProfile(name, photoURL)
          .then(() => {
            const saveUser = {
              name,
              email,
              photoURL,
              gender,
              phoneNumber,
              address,
            };
            fetch("http://localhost:5000/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(saveUser),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  console.log("user profile info updated");
                  reset();
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User created successfully.",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  navigate("/");
                }
              });
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Registration failed",
          text: error.message,
        });
      });
  };

  const password = watch("password");
  // const confirmPassword = watch("confirmPassword");

  return (
    <>
      <Helmet>
        <title>Sign Up Page</title>
      </Helmet>

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <img className="rounded-md" src={signUp} alt="" />
          </div>
          <div className="card flex-shrink-0  md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className="text-red-600">Photo URL is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                  })}
                  placeholder="Password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-600">Password is required</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-600">
                    Password must be at least 6 characters
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  {...register("confirmPassword", {
                    required: true,
                    validate: (value) => value === password,
                  })}
                  placeholder="Confirm Password"
                  className="input input-bordered"
                />
                {errors.confirmPassword?.type === "required" && (
                  <span className="text-red-600">Confirm Password is required</span>
                )}
                {errors.confirmPassword?.type === "validate" && (
                  <span className="text-red-600">Passwords do not match</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Gender</span>
                </label>
                <select {...register("gender", { required: true })} className="input input-bordered">
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                {errors.gender && (
                  <span className="text-red-600">Gender is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="text"
                  {...register("phoneNumber", { required: true })}
                  placeholder="Phone Number"
                  className="input input-bordered"
                />
                {errors.phoneNumber && (
                  <span className="text-red-600">Phone Number is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <textarea
                  {...register("address", { required: true })}
                  placeholder="Address"
                  className="textarea textarea-bordered"
                ></textarea>
                {errors.address && (
                  <span className="text-red-600">Address is required</span>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p>
              <small>
                Already have an account <Link to="/login">Login</Link>
              </small>
            </p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
