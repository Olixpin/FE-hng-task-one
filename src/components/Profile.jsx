import React from "react";
import "./Profile.css";

const Profile = (props) => {
  return (
    <div className="profile">
      <img
        src="https://avatars.githubusercontent.com/u/29031558?v=4"
        alt="profile image"
        id="profile-img"
      />
      <h1 id="twitter">Olixpin</h1>
      <h2
        id="slack"
        style={{
          display: "none",
        }}
      >
        Noibi Abdulrasaq O.
      </h2>
    </div>
  );
};

export default Profile;
