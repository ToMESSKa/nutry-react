//import logo from "./logo.svg";
import React from "react";
import "./App.css";
import {
  BrowserRouter,
  Switch,
  Route, Redirect, useHistory,
} from "react-router-dom";
import MainPage from "./components/routing/main/MainPage";
import Login from "./components/routing/login/Login";
import Registration from "./components/routing/registration/Registration";
import AddFood from "./components/routing/main/addfood/AddFood";


function App() {
  let history = useHistory();

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => (localStorage.getItem("token") ? (<MainPage history={history}/>):(<Redirect to={"/login"} />))} />
            {/*{localStorage.getItem("token") ? <Route path="/" exact render={() => <MainPage />} /> : <Route path="/login" exact render={() => <Login />}/>}*/}
          <Route path="/" exact render={() => <MainPage history={history}/>}/>
          <Route path="/login" exact render={() => <Login history={history}/>}/>
          <Route path="/registration" exact render={() => <Registration />}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
