import {  NavLink, Outlet } from "react-router-dom";
import { FaBook, FaCalendarAlt, FaHome, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();


  // const isAdmin = true;
  const [isAdmin] = useAdmin();

  return (
    <>
  
    <div className="drawer drawer-mobile ">
    <ul className="menu p-4 w-80">

{isAdmin ? (
  <>
    <li>
      <NavLink to="/dashboard/adminhome">
        <FaHome></FaHome> Admin Home
      </NavLink>
    </li>
    <li>
      <NavLink to="/dashboard/addItem">
        {" "}
        <FaUtensils></FaUtensils> Add An Classes
      </NavLink>
    </li>
    <li>
      <NavLink to="/dashboard/manageClass">
        <FaWallet></FaWallet> Manage Classes
      </NavLink>
    </li>
    <li>
      <NavLink to="/dashboard/">
        <FaBook></FaBook> Manage Bookings
      </NavLink>
    </li>
    <li>
      <NavLink to="/dashboard/allusers">
        <FaUsers></FaUsers> All Users
      </NavLink>
    </li>
  </>
) : (
  <>
    <li>
      <NavLink to="/dashboard/userhome">
        <FaHome></FaHome> User Home
      </NavLink>
    </li>
    <li>
      <NavLink to="/dashboard/reservations">
        <FaCalendarAlt></FaCalendarAlt> Reservations
      </NavLink>
    </li>
    <li>
      <NavLink to="/dashboard/history">
        <FaWallet></FaWallet> Payment History
      </NavLink>
    </li>
    <li>
      <NavLink to="/dashboard/mycart">
        <FaShoppingCart></FaShoppingCart> My Class
        <span className="badge inl badge-secondary">
          +{cart?.length || 0}
        </span>
      </NavLink>
    </li>
  </>
)}

<div className="divider"></div>
<li>
  <NavLink to="/">
    <FaHome></FaHome> Home
  </NavLink>{" "}
</li>
<li>
  <NavLink to="/menu"> Our Menu</NavLink>
</li>
<li>
  <NavLink to="/classes">My Classes</NavLink>
</li>
</ul>
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        
      </div>
      <div className="drawer-side bg-[#D1A054]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
       
      </div>
    </div>
    </>
  );
};

export default Dashboard;
