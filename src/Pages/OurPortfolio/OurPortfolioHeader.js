import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import icon from '../../icons/icons_without_bg.png'

const OurPortfolioHeader = () => {
  const location = useLocation()
  const [user, loading, error] = useAuthState(auth);
  let locationName;
  
  if(location.pathname === '/ourPortfolio'){
    locationName = 'Order List'
  }else if(location.pathname === '/ourPortfolio/addService'){
    locationName = 'Add Service'
  }else if(location.pathname === '/ourPortfolio/makeAdmin'){
    locationName = 'Make Admin'
  }else if(location.pathname === '/ourPortfolio/manageServices'){
    locationName = 'Manage Services'
  }
    return (
        <nav>
      <div className="navbar">
        <div className="navbar-start">
          <Link to='/' className="btn btn-ghost">
            <img className="w-10" src={icon} alt="" />
            <span><b>Shakira</b> <br /> Parlour</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex w-3/5">
          <ul className="menu menu-horizontal p-0">
            <b className='text-2xl'>{locationName}</b>
          </ul>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li className='mr-4'>{user?.displayName}</li>
          </ul>
        </div>
        <div className="navbar-end lg:hidden">
        <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <FontAwesomeIcon className='h-5 w-5' icon={faBars} />
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 mr-4 p-2 shadow bg-base-100 rounded-box w-"
            >

            </ul>
          </div>
        </div>
      </div>
      
    </nav>
    );
};

export default OurPortfolioHeader;