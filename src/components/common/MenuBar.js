import { Header } from 'antd/lib/layout/layout';
import { Menu, Space } from 'antd';
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
          </div>
    )
}

export default MenuBar;

