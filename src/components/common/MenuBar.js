import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import Login from "../routing/login/Login";

function MenuBar() {

  const tokenClear = () => {
    localStorage.clear();
    console.log(localStorage.getItem("token"))
  }

    return(
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="addfood">
          <Link to={"/add-food"} className="nav-link">
            Meal planning
          </Link>
        </Menu.Item>
        <Menu.Item key="statistics">
          <Link to={"/statistics"} className="nav-link">
            Statistics
          </Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link to={"/profile"} className="nav-link">
            Profile
          </Link>
        </Menu.Item>
        <Menu.Item key="logout" onClick={tokenClear}>
          <Link to={{ pathname: "/login" }} className="nav-link" >
            Logout
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default MenuBar;
