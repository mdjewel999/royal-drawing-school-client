import { Link } from "react-router-dom";
import logo from "../../../assets/logo/logo.jpg";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";
import "./ThemeToggle.css";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handelLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const navOption = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      {isAdmin ? (
        <li>
          <Link to="/dashboard/allusers">Admin Dashboard</Link>
        </li>
      ) : (
        <li>
          <Link to="/login">Dashboard</Link>
        </li>
      )}

      <li>
        <Link to="/dashboard/mycart">Students Dashboard</Link>
      </li>
      <li>
        <Link to="classes">Classes page</Link>
      </li>
      <li>
        <Link to="InstructorsPage">Instructors Page</Link>
      </li>

      <li>
        <Link to="/dashboard/mycart">
          <button className="btn gap-2">
            <FaShoppingCart></FaShoppingCart>
            <div className="badge badge-secondary">+{cart?.length || 0}</div>
          </button>
        </Link>
      </li>

      {user ? (
        <>
          {/* <span>{user?.displayName}</span> */}
          <button onClick={handelLogOut} className="btn btn-active ">
            LogOut
          </button>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <>
      <div
        className={`navbar  max-w-screen-xl bg-opacity-30 ${
          isDarkMode ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOption}
            </ul>
          </div>
          <div className="flex">
            <img className="w-16 h-16 rounded-full" src={logo} alt="" />
            <Link to="/" className="btn btn-ghost normal-case text-xl">Royal Drawing</Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOption}</ul>
        </div>
        <div className="navbar-end">
          <button
            className="btn rounded-full h-6"
            onClick={() => setIsDarkMode(isDarkMode === "" ? "dark-mode" : "")}
          >
            Toggle Theme
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;

// import { Link } from "react-router-dom";
// import logo from "../../../assets/logo/logo.jpg";
// import { useContext, useState } from "react";
// import { AuthContext } from "../../../providers/AuthProvider";
// import { FaShoppingCart } from "react-icons/fa";
// import useCart from "../../../hooks/useCart";
// import useAdmin from "../../../hooks/useAdmin";

// const NavBar = () => {
//   const { user, logOut } = useContext(AuthContext);
//   const [cart] = useCart();
//   const [isAdmin] = useAdmin();
//   const [theme, setTheme] = useState("mytheme");

//   const handleThemeChange = () => {
//     setTheme((prevTheme) => (prevTheme === "mytheme" ? "dark" : "mytheme"));
//   };

//   const handleLogOut = () => {
//     logOut()
//       .then(() => {})
//       .catch((error) => console.log(error));
//   };

//   const navOptions = (
//     <>
//       <li>
//         <Link to="/">Home</Link>
//       </li>
//       <li>
//         <Link to="secret">secret</Link>
//       </li>

//       {isAdmin ? (
//         <li>
//           <Link to="/dashboard/adminhome">Dashboard</Link>
//         </li>
//       ) : (
//         <li>
//           <Link to="/dashboard/userhome">Dashboard</Link>
//         </li>
//       )}

//       <li>
//         <Link to="classes">Classes page</Link>
//       </li>
//       <li>
//         <Link>Instructors Page</Link>
//       </li>

//       <li>
//         <Link to="/dashboard/mycart">
//           <button className="btn gap-2">
//             <FaShoppingCart></FaShoppingCart>
//             <div className="badge badge-secondary">+{cart?.length || 0}</div>
//           </button>
//         </Link>
//       </li>

//       {user ? (
//         <>
//           {/* <span>{user?.displayName}</span> */}
//           <button onClick={handleLogOut} className="btn btn-active">
//             LogOut
//           </button>
//         </>
//       ) : (
//         <>
//           <li>
//             <Link to="/login">Login</Link>
//           </li>
//         </>
//       )}
//     </>
//   );

//   return (
//     <>
//       <div className={`navbar max-w-screen-xl bg-${theme}  bg-opacity-30 bg-black text-white`}>
//         <div className="navbar-start">
//           <div className="dropdown">
//             <label tabIndex={0} className="btn btn-ghost lg:hidden">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h16"
//                 />
//               </svg>
//             </label>
//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
//             >
//               {navOptions}
//             </ul>
//           </div>
//           <div className="flex">
//             <img className="w-16 h-16 rounded" src={logo} alt="" />
//             <a className="btn btn-ghost normal-case text-xl">Royal Drawing</a>
//           </div>
//         </div>
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1">{navOptions}</ul>
//         </div>
//         <div className="navbar-end">
//           <button onClick={handleThemeChange} className="btn">
//             Change Theme
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default NavBar;
