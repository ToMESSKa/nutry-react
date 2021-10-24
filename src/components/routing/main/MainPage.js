import { Menu, Layout, Row, Col } from "antd";

import React from "react";
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";
import AppHeader from "../../common/AppHeader";
import DividedLayout from "../../common/DivivedLayout";
import LeftColumn from "../../common/LeftColumn";
import RightColumn from "../../common/RightColumn ";
import MenuBar from "../../common/MenuBar";
import AddFood from "./addfood/AddFood";
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
