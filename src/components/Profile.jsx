import React from "react";
import "./Profile.css";
import { ReactComponent as Share } from "../assets/Share.svg";
import { ReactComponent as Share2 } from "../assets/share2.svg";

const Profile = (props) => {
  return (
    <div className="profile">
      <Share />
      {/* Create a tooltip */}
      <div className="tooltip">
        <span className="tooltiptext">Click to share</span>
      </div>
      <div>
        <Share2 id="share2" />
      </div>
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
