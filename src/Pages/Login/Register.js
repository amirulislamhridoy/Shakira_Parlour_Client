import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import fb from '../../icons/fb.png'
import gl from '../../icons/Group 573.png'

const Register = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <Header />
      <div className='max-w-[570px] sm:mx-auto mx-2'>
        <div className="border border-2 rounded px-10 pt-5 pb-2 mt-5">
          <h3 className="text-2xl font-bold">Create an account</h3>
          <form onSubmit={handleFormSubmit}>
            <input
              className="border-b-2 w-full mt-10"
              placeholder="First Name"
              required
            />

            <input
              className="border-b-2 w-full mt-7"
              placeholder="Last Name"
              required
            />

            <input
              className="border-b-2 w-full mt-7"
              placeholder="Username of Email"
              required
            />

            <input
              type="password"
              className="border-b-2 w-full mt-7"
              placeholder="Password"
              required
            />

            <input
              type="password"
              className="border-b-2 w-full mt-7"
              placeholder="Confirm Password"
              required
            />

            <input
              className="btn btn-primary w-full text-white mt-7"
              type="submit"
              value="Create an account"
            />
          </form>
          <p className="mt-3 mb-8">
            Already have an account?{" "}
            <Link
              className="border-b-2 border-primary text-primary"
              to="/login"
            >
              Login
            </Link>
          </p>
        </div>
        <div className='mx-14'>
            <div class="divider">OR</div>
            <button className='btn btn-ghost w-full rounded-full border-secondary border-2 flex'>
                <img className='w-8' src={fb} alt='' />
                <span className='flex-1'>Continue with Facebook</span>
            </button>
            <br />
            <button className='btn btn-ghost w-full rounded-full border-secondary border-2 flex'>
                <img className='w-7' src={gl} al='' />
                <span className='flex-1'>Continue with Google</span>
            </button>
        </div>
      </div>
    </section>
  );
};

export default Register;
