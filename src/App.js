import logo from "./logo.svg";
import React from "react";
import "./App.css";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import MainPage from "./components/routing/main/MainPage";
import Login from "./components/routing/login/Login";
import Registration from "./components/routing/registration/Registration";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={() => <MainPage />} />
          <Route path="/login" exact render={() => <Login />}/>
          <Route path="/registration" exact render={() => <Registration />}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
