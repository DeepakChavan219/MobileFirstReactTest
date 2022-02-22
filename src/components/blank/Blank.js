import React from "react";
import { Switch, Route } from "react-router-dom";
import Welcome from "../features/Welcome";
const Blank = () => {
  return (
    <>
      <Switch>
        <Route path="/">
          <Welcome />
        </Route>
      </Switch>
    </>
  );
};

export default Blank;
