import React from "react";
import icon from "../../icons/icons_without_bg.png";
import {Link} from 'react-router-dom'

const Header = () => {
  const btn = (
    <>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/ourPortfolio'>Our Portfolio</Link></li>
      <li><Link to='/ourTeam'>Our Team</Link></li>
      <li><Link to='/contactUs'>Contact Us</Link></li>
      <li><Link to='/login'>Login</Link></li>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
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
