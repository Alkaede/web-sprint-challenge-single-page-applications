import React from "react";
import { Homepg } from "./Components/Homepage";
import { Navigation } from './Components/Nav'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Foodform from './Components/Form Handlers/FoodForm';
import PayScreen from "./Components/Form Handlers/PayScreen";
import Help from "./Components/Help";
import FormStuff from "./Components/Form Handlers/FormStatesEtc";


const App = () => {
  return (
    <>
    <Router>
      <Navigation />
      <Switch>
        <Route path='/pizza'>
          <FormStuff />
        </Route>
        <Route path='/payment'>
          <PayScreen />
        </Route>
        <Route path='/help'>
          <Help />
        </Route>
        <Route path='/'>
          <Homepg />
        </Route> 
      </Switch>
    </Router>
    </>
  );
};
export default App;
