import React, { useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import fb from "../../icons/fb.png";
import gl from "../../icons/Group 573.png";
import {
  useSignInWithGoogle,
  useSignInWithFacebook,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import LoginHeader from "./LoginHeader";
import useToken from "../../hook/userToken";

const Login = () => {
  const password = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithFacebook, fUser, fLoading, fError] =
    useSignInWithFacebook(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const currentPassword = password.current.value;
    const email = e.target.email.value;
    signInWithEmailAndPassword(email, currentPassword);
  };

  const [token] = useToken(user || gUser || fUser)
  let from = location.state?.from?.pathname || "/";

  if(token){
    navigate(from)
  }

  return (
    <section className="max-w-7xl mx-auto">
      <LoginHeader />
      <div className="max-w-[500px] sm:mx-auto mx-2">
        <div className="border border-2 rounded px-10 pt-5 pb-2 mt-5">
          <h3 className="text-2xl font-bold">Please Login</h3>
          <form onSubmit={handleFormSubmit}>
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
              className="btn btn-primary w-full text-white mt-7"
              type="submit"
              value="Login"
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
        <div className="mx-14">
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithFacebook()}
            className="btn btn-ghost w-full rounded-full border-secondary border-2 flex"
          >
            <img className="w-8" src={fb} alt="" />
            <span className="flex-1">Continue with Facebook</span>
          </button>
          <br />
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-ghost w-full rounded-full border-secondary border-2 flex"
          >
            <img className="w-7" src={gl} al="" />
            <span className="flex-1">Continue with Google</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
