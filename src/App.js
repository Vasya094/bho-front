import React from "react";
import NavBar from "./components/NavBar.js";
import MainPicture from "./components/MainPicture.js";
import About from "./components/About.js";
import Events from "./components/Events.js";
import Login from "./components/Login.js";
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
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <MainPicture />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
