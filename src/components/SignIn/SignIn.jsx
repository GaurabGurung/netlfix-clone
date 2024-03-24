import React, { useRef } from "react";
import "./SignIn.scss";
import {
  createAuthUserWithEmailandPassword,
  signInUserAuthWithEmailAndPassword,
} from "../../utils/firebase";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const navigate = useNavigate();

  const navigateToSignUp = () => {
    navigate("/signup");
  };
  const signIn = (e) => {
    e.preventDefault();

    signInUserAuthWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).catch((error) => {
      alert(error.message);
    });
  };

  return (
    <div className="signin__container">
      <form>
        <h1>Sign In</h1>
        <input type="email" placeholder="Email" ref={emailRef} />
        <input type="Password" placeholder="password" ref={passwordRef} />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="grey_text"> New to Maxflix? </span>
          <span className="signUp_link" onClick={navigateToSignUp}>
            Sign Up now
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignIn;
