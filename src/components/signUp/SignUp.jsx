import React, { useRef } from "react";
import "./SignUp.scss";
import {
  createAuthUserWithEmailandPassword,
  signInUserAuthWithEmailAndPassword,
} from "../../utils/firebase";

const SignUp = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    createAuthUserWithEmailandPassword(
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
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
    <div className="signup__container">
      <form>
        <h1>Sign Up</h1>
        <input type="email" placeholder="Email" ref={emailRef} />
        <input type="Password" placeholder="password" ref={passwordRef} />
        <button type="submit" onClick={signIn}>
          Sign Up
        </button>
        <h4>
          <span className="grey_text"> Already have an account? </span>
          <span className="signUp_link" onClick={register}>
            Sign In Here
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignUp;
