import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import fb from '../../icons/fb.png'
import gl from '../../icons/Group 573.png'
import { toast } from 'react-toastify';
import { useSignInWithGoogle, useSignInWithFacebook, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const Register = () => {
  const password = useRef(null)
  const [confirmP, setConfirmP] = useState('')
  const [updateProfile, updating, uError] = useUpdateProfile(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithFacebook, fUser, fLoading, fError] = useSignInWithFacebook(auth);
  const [ createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const currentPassword = password.current.value
    const matchPassword = currentPassword === confirmP
    if(!matchPassword){
      return toast.error("Password don't match.")
    }
    const fullName = e.target.firstName?.value + " " + e.target.lastName?.value
    const email = e.target.email?.value
    await createUserWithEmailAndPassword(email, currentPassword)
    await updateProfile({displayName: fullName})
  };

  return (
    <section>
      <Header />
      <div className='max-w-[500px] sm:mx-auto mx-2'>
        <div className="border border-2 rounded px-10 pt-5 pb-2 mt-5">
          <h3 className="text-2xl font-bold">Create an account</h3>
          <form onSubmit={handleFormSubmit}>
            <input
              className="border-b-2 w-full mt-10"
              placeholder="First Name"
              name='firstName'
              required
            />
            <input
              className="border-b-2 w-full mt-7"
              placeholder="Last Name"
              name='lastName'
              required
            />
            <input
              className="border-b-2 w-full mt-7"
              placeholder="Username of Email"
              name="email"
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
            <div className="divider">OR</div>
            <button onClick={() => signInWithFacebook()} className='btn btn-ghost w-full rounded-full border-secondary border-2 flex'>
                <img className='w-8' src={fb} alt='' />
                <span className='flex-1'>Continue with Facebook</span>
            </button>
            <br />
            <button onClick={() => signInWithGoogle()} className='btn btn-ghost w-full rounded-full border-secondary border-2 flex'>
                <img className='w-7' src={gl} al='' />
                <span className='flex-1'>Continue with Google</span>
            </button>
        </div>
      </div>
    </section>
  );
};

export default Register;
