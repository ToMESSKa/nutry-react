import { Menu } from "antd";
import React from "react";
import {Link, useHistory} from "react-router-dom";
import Login from "../routing/login/Login";

function MenuBar() {
  let history = useHistory();

  const tokenClear = () => {
    localStorage.clear();
    console.log(localStorage.getItem("token"));
    history.push("/login");
    window.location.reload(false);
  }

    return(
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="addfood">
          <Link to={"/add-food"} className="nav-link">
            <h1>Meal planning</h1>
          </Link>
        </Menu.Item>
        <Menu.Item key="statistics">
          <Link to={"/statistics"} className="nav-link">
            <h1>Statistics</h1>
          </Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link to={"/profile"} className="nav-link">
            <h1>Profile</h1>
          </Link>
        </Menu.Item>
        <Menu.Item key="logout" onClick={tokenClear}>
          <Link to={"/login"}  className="nav-link" >
            <h1>Logout</h1>
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default MenuBar;
