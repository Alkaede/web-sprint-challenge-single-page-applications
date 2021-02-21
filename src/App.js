import React from "react";
import { Homepg } from "./Components/Homepage";
import { Navigation } from './Components/Nav'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
    <Router>
      <Navigation />
    </Router>

      <Homepg />
    </>
  );
};
export default App;
