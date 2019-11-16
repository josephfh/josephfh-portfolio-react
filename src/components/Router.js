import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Index from "../pages/Index";
import NotFound from "../pages/404";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
