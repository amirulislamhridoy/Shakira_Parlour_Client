import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import fb from '../../icons/fb.png'
import gl from '../../icons/Group 573.png'

const Login = () => {
    const password = useRef(null)
  const [confirmP, setConfirmP] = useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const currentPassword = password.current.value
  };
    return (
        <section>
      <Header />
      <div className='max-w-[500px] sm:mx-auto mx-2'>
        <div className="border border-2 rounded px-10 pt-5 pb-2 mt-5">
          <h3 className="text-2xl font-bold">Please Login</h3>
          <form onSubmit={handleFormSubmit}>
            <input
              className="border-b-2 w-full mt-7"
              placeholder="Username of Email"
              email="email"
              required
            />
            <input
              type="password"
              className="border-b-2 w-full mt-7"
              placeholder="Password"
              ref={password}
              required
            />
            <input
              type="password"
              className="border-b-2 w-full mt-7"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmP(e.target.value)}
              required
            />
            <input
              className="btn btn-primary w-full text-white mt-7"
              type="submit"
              value="Create an account"
            />
          </form>
          <p className="mt-3 mb-8">
            Create an account?{" "}
            <Link
              className="border-b-2 border-primary text-primary"
              to="/register"
            >
              Register
            </Link>
          </p>
        </div>
        <div className='mx-14'>
            <div className="divider">OR</div>
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

export default Login;