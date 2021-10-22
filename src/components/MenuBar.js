import { Header } from 'antd/lib/layout/layout';
import logo from "../static/logo.png";
import { Menu, Space } from 'antd';
import "../static/css/MainPage.css";
import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from "react-router-dom";

function MenuBar() {
    return(
        <div>
        <Menu mode="horizontal">
        <Menu.Item key="mail">
        <Link to={'/add-food'} className="nav-link"> Add Food </Link>
        </Menu.Item>
        <Menu.Item key="app">
        <Link to={'/statistics'} className="nav-link">Statistics</Link>
        </Menu.Item>
        <Menu.Item key="app">
        <Link to={'/profile'} className="profile">Profile</Link>
        </Menu.Item>
        </Menu>


        {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/add-food'} className="nav-link"> Add Food </Link></li>
            <li><Link to={'/statistics'} className="nav-link">Statistics</Link></li>
            <li><Link to={'/profile'} className="profile">Profile</Link></li>
          </ul>
          </nav> */}
          </div>
    )
}

export default MenuBar;

