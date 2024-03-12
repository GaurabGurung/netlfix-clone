import React from "react";
import "./LoginScreen.scss";

import Maxflix from "../../assets/maxflix.png";
import maxflix_background from "../../assets/maxflix_background1.jpeg";

const LoginScreen = () => {
  return (
    <div
      className="login__container"
      style={{
        backgroundImage: maxflix_background,
        backgroundImage: `url(${maxflix_background})`,
      }}
    >
      <div className="loginScreen__background">
        <img className="maxflix_log" src={Maxflix} alt="" />
        <button className="signin_btn">Sign In</button>
        <div className="loginScreen_gradient" />
      </div>
    </div>
  );
};

export default LoginScreen;
