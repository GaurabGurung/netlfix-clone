import React, { useState } from "react";
import "./LoginScreen.scss";
import { handleAnonymousLogin } from "../../utils/firebase";
import Maxflix from "../../assets/maxflix.png";
import maxflix_background from "../../assets/maxflix_background1.jpeg";
import SignIn from "../SignIn/SignIn";

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(true);

  // Function to handle anonymous login
  const handleLogin = async () => {
    try {
      const userCredential = await handleAnonymousLogin();
      if (userCredential && userCredential.user) {
        const user = userCredential.user;
      } else {
        console.error();
      }
    } catch (error) {
      console.error("Error signing in anonymously:", error.message);
    }
  };

  return (
    <div
      className="login__container"
      style={{
        backgroundImage: `url(${maxflix_background})`,
      }}
    >
      <div className="loginScreen__background">
        <img className="maxflix_log" src={Maxflix} alt="" />
        <div className="signin_container">
          <button className="signin_btn" onClick={() => setSignIn(true)}>
            Sign In
          </button>
          <button className="anonymous_signin_btn" onClick={handleLogin}>
            Guest Login
          </button>
        </div>
        <div className="loginScreen_gradient" />
        <div className="login_body">
          {signIn ? (
            <SignIn />
          ) : (
            <>
              <h1>Unlimited films, TV programmes and more,</h1>
              <h2>Watch anywhere. Cancel at any time.</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership
              </h3>
              <div className="loginScreen__input">
                <form>
                  <input type="email" placeholder="Email Address" />
                  <button
                    className="getStarted_btn"
                    onClick={() => setSignIn(true)}
                  >
                    GET STARTED
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
