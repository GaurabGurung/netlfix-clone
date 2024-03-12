import React, { useState } from "react";
import "./LoginScreen.scss";

import Maxflix from "../../assets/maxflix.png";
import maxflix_background from "../../assets/maxflix_background1.jpeg";

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);
  return (
    <div
      className="login__container"
      style={{
        backgroundImage: `url(${maxflix_background})`,
      }}
    >
      <div className="loginScreen__background">
        <img className="maxflix_log" src={Maxflix} alt="" />
        <button className="signin_btn" onClick={() => setSignIn(true)}>
          Sign In
        </button>
        <div className="loginScreen_gradient" />
        <div className="login_body">
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
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
