import React from "react";
import NavBar from "./components/NavBar.js";
import MainPicture from "./components/MainPicture.js";
import About from "./components/About.js";
import Events from "./components/Events.js";
import Login from "./components/Login.js";
import AdminPanel from "./components/AdminPanel.js";
import NotFound from "./components/NotFound.js";
import Registration from "./components/Registration.js";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/events">
          <Events />
        </Route>
        <Route
          path="/admin_panel"
          render={(props) => <AdminPanel {...props} />}
        ></Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/registration">
          <Registration />
        </Route>
        <Route path="/" exact>
          <MainPicture />
        </Route>
        <Route path="*" exact={true}>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
