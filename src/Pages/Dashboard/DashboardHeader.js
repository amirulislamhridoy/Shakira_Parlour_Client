import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import icon from "../../icons/icons_without_bg.png";

const DashboardHeader = () => {
  const location = useLocation();
  const [user, loading, error] = useAuthState(auth);
  let locationName;

  if (location.pathname === "/dashboard") {
    locationName = "Order List";
  } else if (location.pathname === "/dashboard/addService") {
    locationName = "Add Service";
  } else if (location.pathname === "/dashboard/makeAdmin") {
    locationName = "Make Admin";
  } else if (location.pathname === "/dashboard/manageServices") {
    locationName = "Manage Services";
  } else if (location.pathname === "/dashboard/book") {
    locationName = "Book";
  } else if (location.pathname === "/dashboard/bookingList") {
    locationName = "Booking List";
  } else if (location.pathname === "/dashboard/review") {
    locationName = "Review";
  }
  return (
    <nav>
      <div className="navbar">
        <div className="navbar-start">
          <Link to="/" className="btn btn-ghost px-0 md:px-4">
            <img className="w-10" src={icon} alt="" />
            <span>
              <b>Shakira</b> <br /> Parlour
            </span>
          </Link>
        </div>
        <div className="navbar-center lg:flex w-3/5 hidden sm:block ">
          <ul className="menu menu-horizontal p-0">
            <b className="text-xl lg:text-2xl">{locationName}</b>
          </ul>
        </div>
        <div className="navbar-end ">
          <div className="dropdown dropdown-end">
            <button className="btn btn-ghost btn-sm">{user?.displayName}</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardHeader;
