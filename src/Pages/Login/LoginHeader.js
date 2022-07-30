import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import CustomLink from "../../Shared/CustomLink/CustomLink";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icons from "../../icons/icons_without_bg.png";

const LoginHeader = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  function logout() {
    signOut(auth);
    navigate("/login");
  }
  const btn = (
    <>
      <li className='mx-4'>
        <CustomLink to="/">Home</CustomLink>
      </li>
      <li className='mx-4'>
        <CustomLink to="/aboutUs">About Us</CustomLink>
      </li>
      <li className='mx-4'>
        <CustomLink to="/project">Project</CustomLink>
      </li>
      <li className='mx-4'>
        <CustomLink to="/contact">Contact</CustomLink>
      </li>
      <li className='mx-4'>
        <CustomLink to="/contact">Admin</CustomLink>
      </li>
    </>
  );
  return (
    <nav>
      <div className="navbar">
        <div className="navbar-start">
          <Link to="/" className="btn btn-ghost">
            <img className="w-10" src={icons} alt="" />
            <span>
              <b>Shakira</b> <br /> Parlour
            </span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{btn}</ul>
        </div>

        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link className="btn text-white px-9 bg-primary border-0" to="/login"> Login </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end lg:hidden">
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <FontAwesomeIcon className="h-5 w-5" icon={faBars} />
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 mr-4 p-2 shadow bg-base-100 rounded-box w-40"
            >
              {btn}
              <li>
              <Link className="btn text-white px-9 bg-primary border-0" to="/login"> Login </Link>
            </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LoginHeader;
