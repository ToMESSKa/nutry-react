import { Menu, Button } from "antd";
import React from "react";
import {Link, useHistory } from "react-router-dom";
import Login from "../routing/login/Login";

function MenuBar({history}) {

  const logOut = () => {
    localStorage.clear();
    console.log(localStorage.getItem("token"));
    history.push("/login");
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
        <Menu.Item key="logout" >
          <div className="nav-link" onClick={logOut}>
            Logout
          </div>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default MenuBar;
