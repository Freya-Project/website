import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/pages/HomePage";

function MainRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/commands">
          <div>Commands</div>
          <Link to="/">Home</Link>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default MainRouter;
