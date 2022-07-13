
import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
          <Switch>    
            {/* Routes */}
            {/* TODO: could direct unknown URL to PageNotFound page displaying 404 error */}


            <Route path="/" exact render={props => <HomePage {...props} />} />

            <Redirect to="/" />
          </Switch>
      </Router>
    </>
  );
}

export default App;
