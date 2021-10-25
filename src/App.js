//import logo from "./logo.svg";
import React from "react";
import "./App.css";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import MainPage from "./components/routing/main/MainPage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={() => <MainPage />} />
          <Route />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
