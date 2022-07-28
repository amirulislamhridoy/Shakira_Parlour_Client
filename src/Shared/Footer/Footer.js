import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import fb from '../../icons/Vector.png'
import ins from '../../icons/Vector-1.png'
import lin from '../../icons/Vector-2.png'
import you from '../../icons/Vector-3.png'

const Footer = () => {
  return (
    <footer className='bg-primary'>
      <div className="footer p-10 text-base-content max-w-7xl mx-auto pt-14 pb-24">
        <div>
          <p>
          <FontAwesomeIcon className='mr-2 text-xl' icon={faLocationDot} />
            H@000 (oth Floor), Read #00,
            <br />
            New DOHS, Mohahali, Dhaka, Bangladesh
          </p>
        </div>
        <div>
          <span className="footer-title ">Company</span>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Project</a>
          <a className="link link-hover">Our Team</a>
          <a className="link link-hover">Terms Conditions</a>
          <a className="link link-hover">Submit Listing</a>
        </div>
        <div>
          <span className="footer-title">Quick Links</span>
          <a className="link link-hover">Quick Links</a>
          <a className="link link-hover">Rentals</a>
          <a className="link link-hover">Sales</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Our blog</a>
        </div>
        <div>
          <span className="footer-title">About us</span>
          <p>Lorem ipsum</p>
          <div className='flex items-center'>
          <a className="link link-hover"><img className='w-10 mx-2' src={fb} alt=''/></a>
          <a className="link link-hover"><img className='w-10 mx-2' src={ins} alt=''/></a>
          <a className="link link-hover"><img className='w-10 mx-2' src={lin} alt=''/></a>
          <a className="link link-hover"><img className='w-10 mx-2' src={you} alt=''/></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
