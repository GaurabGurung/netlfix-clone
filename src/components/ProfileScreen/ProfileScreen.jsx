import React from "react";
import "./ProfileScreen.scss";
import profileLogo from "../../assets/profile.jpg";

import { useSelector } from "react-redux";
import { signOutUser } from "../../utils/firebase";
import { selectUser } from "../../redux/user/user.reducer";
import { useNavigate } from "react-router-dom";
import Nav from "../Nav/Nav";

const ProfileScreen = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate("/");

  const handleSignOut = () => {
    signOutUser();
    navigate("/");
  };
  return (
    <div className="profileScreen_container">
      <Nav />
      <div className="profile_body">
        <h1>Edit Profile</h1>
        <div className="profile_info">
          <img src={profileLogo} alt="" />

          <div className="profile_details">
            <h2>{user.email}</h2>
            <div className="profile_plans">
              <h3>Plans ( Current Plan: premium )</h3>
              <button className="signOut_btn" onClick={handleSignOut}>
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
