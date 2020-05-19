import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import {Labels} from './views/Labels';
import {Money} from './views/Money';
import {Statistics} from './views/Statistics';
import {NoMatch} from './views/NoMatch';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/labels">
          <Labels/>
        </Route>
        <Route path="/money">
          <Money/>
        </Route>
        <Route path="/statistics">
          <Statistics/>
        </Route>
        <Redirect exact from="/" to="/money"/>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
