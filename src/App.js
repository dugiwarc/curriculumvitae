import React from "react";
import NotFound from "./components/NotFound";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Page from "./Page";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Page} />
        <Route render={() => <NotFound />} />
      </Switch>
    </div>
  );
}

export default App;
