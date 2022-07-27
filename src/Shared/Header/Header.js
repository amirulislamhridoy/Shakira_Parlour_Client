import React from "react";
import icon from "../../icons/icons_without_bg.png";
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const btn = (
    <>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/ourPortfolio'>Our Portfolio</Link></li>
      <li><Link to='/ourTeam'>Our Team</Link></li>
      <li><Link to='/contactUs'>Contact Us</Link></li>
      <li><Link className='' to='/login'>Login</Link></li>
    </>
  );
  return (
    <nav>
      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <Link to='' class="btn btn-ghost">
            <img className="w-10" src={icon} alt="" />
            <span><b>Shakira</b> <br /> Parlour</span>
          </Link>
        </div>
        <div class="navbar-end hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            {btn}
          </ul>
        </div>
        <div class="navbar-end lg:hidden">
        <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <FontAwesomeIcon className='h-5 w-5' icon={faBars} />
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 mr-4 p-2 shadow bg-base-100 rounded-box w-36"
            >{btn}
            </ul>
          </div>
        </div>
      </div>
      
    </nav>
  );
};

export default Header;
