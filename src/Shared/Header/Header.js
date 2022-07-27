import React from "react";
import icon from "../../icons/icons_without_bg.png";
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  const btn = (
    <>
      <li><CustomLink to='/'>Home</CustomLink></li>
      <li><Link to='/ourPortfolio'>Our Portfolio</Link></li>
      <li><Link to='/ourTeam'>Our Team</Link></li>
      <li><Link to='/contactUs'>Contact Us</Link></li>
      <li><Link className='btn text-white px-9 bg-primary border-0' to='/login'>Login</Link></li>
    </>
  );
  return (
    <nav>
      <div className="navbar">
        <div className="navbar-start">
          <Link to='' className="btn btn-ghost">
            <img className="w-10" src={icon} alt="" />
            <span><b>Shakira</b> <br /> Parlour</span>
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {btn}
          </ul>
        </div>
        <div className="navbar-end lg:hidden">
        <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <FontAwesomeIcon className='h-5 w-5' icon={faBars} />
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 mr-4 p-2 shadow bg-base-100 rounded-box w-36"
            >{btn}
            </ul>
          </div>
        </div>
      </div>
      
    </nav>
  );
};

export default Header;
