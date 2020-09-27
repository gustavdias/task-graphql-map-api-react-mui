import React from "react";
import Album from "./components/Album/Album";
import { Route, Switch } from "react-router-dom";
import Details from "./components/Details";
import { ProtectedRoute } from "./auth/protected.route";
import  LandingPage  from "./components/LandingPage";


function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <ProtectedRoute exact path="/app" component={Album} />
        <Route path="/details" component={Details} />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
