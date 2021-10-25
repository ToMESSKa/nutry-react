import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";

function MenuBar() {
    return(
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="addfood">
          <Link to={"/add-food"} className="nav-link">
            {" "}
            Add Food{" "}
          </Link>
        </Menu.Item>
        <Menu.Item key="statistics">
          <Link to={"/statistics"} className="nav-link">
            Statistics
          </Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link to={"/profile"} className="profile">
            Profile
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default MenuBar;
