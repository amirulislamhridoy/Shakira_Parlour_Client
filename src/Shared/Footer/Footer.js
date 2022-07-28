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
      <div class="footer p-10 text-base-content max-w-7xl mx-auto pt-14 pb-24">
        <div>
          <p>
          <FontAwesomeIcon className='mr-2 text-xl' icon={faLocationDot} />
            H@000 (oth Floor), Read #00,
            <br />
            New DOHS, Mohahali, Dhaka, Bangladesh
          </p>
        </div>
        <div>
          <span class="footer-title ">Company</span>
          <a class="link link-hover">About</a>
          <a class="link link-hover">Project</a>
          <a class="link link-hover">Our Team</a>
          <a class="link link-hover">Terms Conditions</a>
          <a class="link link-hover">Submit Listing</a>
        </div>
        <div>
          <span class="footer-title">Quick Links</span>
          <a class="link link-hover">Quick Links</a>
          <a class="link link-hover">Rentals</a>
          <a class="link link-hover">Sales</a>
          <a class="link link-hover">Contact</a>
          <a class="link link-hover">Our blog</a>
        </div>
        <div>
          <span class="footer-title">About us</span>
          <p>Lorem ipsum</p>
          <div className='flex items-center'>
          <a class="link link-hover"><img className='w-10 mx-2' src={fb} alt=''/></a>
          <a class="link link-hover"><img className='w-10 mx-2' src={ins} alt=''/></a>
          <a class="link link-hover"><img className='w-10 mx-2' src={lin} alt=''/></a>
          <a class="link link-hover"><img className='w-10 mx-2' src={you} alt=''/></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
