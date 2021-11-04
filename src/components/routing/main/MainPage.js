import {} from "antd";

import React from "react";
import DividedLayout from "../../common/DivivedLayout";
import LeftColumn from "../../common/LeftColumn";
import RightColumn from "../../common/RightColumn ";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import AppHeader from "../../header/AppHeader";
import MenuBar from "../../common/MenuBar";
import AddFood from "./addfood/AddFood";
import Profile from "./Profile";
import Statistics from "./Statistics";
import Loader from 'react-promise-loader'
import { usePromiseTracker } from 'react-promise-tracker';
import Login from "../login/Login";
import AppFooter from "../../footer/AppFooter";

function MainPage({ children }) {

  const background = {
    background: "efefef",

  };
  

  return (
    <div className="main-page" style={background} >
      <BrowserRouter>
      <AppHeader/>
        <MenuBar/>
         <Switch>
             {/*<Redirect from="/" to="/add-food" exact component={AddFood}/>*/}
          <Route path="/add-food" exact component={AddFood} />
          <Route path="/statistics" exact component={Statistics} />
          <Route path="/profile" exact component={Profile} />
        </Switch>
      </BrowserRouter>

      {children}
    <AppFooter/>
    </div>
  );
}

export default MainPage;
