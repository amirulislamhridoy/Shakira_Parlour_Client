import React from "react";
import icon from "../../icons/icons_without_bg.png";
import {Link, useNavigate} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import CustomLink from "../CustomLink/CustomLink";
import auth from '../../firebase.init'
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from "firebase/auth";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate()
  
  function logout(){
    signOut(auth);
    navigate('/login')
  };
  const btn = (
    <>
      <li><CustomLink to='/'>Home</CustomLink></li>
      <li><CustomLink to='/ourPortfolio'>Our Portfolio</CustomLink></li>
      <li><CustomLink to='/ourTeam'>Our Team</CustomLink></li>
      <li><CustomLink to='/contactUs'>Contact Us</CustomLink></li>
      {user ? <li><Link onClick={logout} className='btn text-white px-9 bg-primary border-0' to='/login'>Log out</Link></li> : 
      <li ><CustomLink className='btn btn-primary px-7 text-white' to='/login'>Login</CustomLink></li>}
    </>
  );
  return (
    <nav>
      <div className="navbar">
        <div className="navbar-start">
          <Link to='/' className="btn btn-ghost">
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
              className="menu menu-compact dropdown-content mt-3 mr-4 p-2 shadow bg-base-100 rounded-box w-48"
            >{btn}
            </ul>
          </div>
        </div>
      </div>
      
    </nav>
  );
};

export default Header;
