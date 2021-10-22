import {} from "antd";
import React from "react";
import {} from "react-router-dom";

function Profile({ children }) {
  return (
    <div className="profile">
      <p>Profile</p>
      {children}
    </div>
  );
}

export default Profile;
