import {} from "antd";
import React from "react";
import {} from "react-router-dom";
import ImageUploader from "../../routing/main/ImageUploader"

function Profile({ children }) {
  return (
    <div className="profile">
      <ImageUploader></ImageUploader>
      <p>Profile</p>
      {children}
    </div>
  );
}

export default Profile;
