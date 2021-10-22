import { Menu, Layout, Row, Col } from "antd";

import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import AddFood from "./AddFood";
import Profile from "./Profile";
import Statistics from "./Statistics";

function MainPage({ children }) {
  return (
    <div className="main-page">
      <BrowserRouter>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/add-food'} className="nav-link"> Add Food </Link></li>
            <li><Link to={'/statistics'} className="nav-link">Statistics</Link></li>
            <li><Link to={'/profile'} className="profile">Profile</Link></li>
          </ul>
          </nav> 
          {/* <Menu node="horizontal">
          <Menu.Item as={Link} to={"/add-food"} key="addfood">
            Add Food
          </Menu.Item>
          <Menu.Item as={Link} to={"/statistics"} key="statistics">
            Statistics
          </Menu.Item>
          <Menu.Item as={Link} to={"/profile"} key="profile">
            Profile
          </Menu.Item>
        </Menu>  */}
         <Switch>
          <Route path="/add-food" exact component={AddFood} />
          
          <Route path="/statistics" exact component={Statistics} />
          
          <Route path="/profile" exact component={Profile} />
          
        </Switch>
      </BrowserRouter>

      {children}
    </div>
  );
}

export default MainPage;
