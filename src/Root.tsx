import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "./LoginPage";

function Root() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route>
          <h1>404 - Page Not Found</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Root;
