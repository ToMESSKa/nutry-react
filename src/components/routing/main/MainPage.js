import { Menu, Layout, Row, Col } from "antd";

import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import AppHeader from "../../AppHeader";
import MenuBar from "../../MenuBar";
import AddFood from "./AddFood";
import Profile from "./Profile";
import Statistics from "./Statistics";

function MainPage({ children }) {
  return (
    <div className="main-page">
      
      <BrowserRouter>
      <AppHeader/>
      <MenuBar/>
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
