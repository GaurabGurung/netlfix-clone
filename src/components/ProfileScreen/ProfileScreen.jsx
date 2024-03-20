import React from "react";
import "./ProfileScreen.scss";
import profileLogo from "../../assets/profile.jpg";

import Nav from "../Nav/Nav";
import { useSelector } from "react-redux";
import { signOutUser } from "../../utils/firebase";
import { selectUser } from "../../redux/user/user.reducer";

const ProfileScreen = () => {
  const user = useSelector(selectUser);
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
              <button className="signOut_btn" onClick={() => signOutUser}>
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
