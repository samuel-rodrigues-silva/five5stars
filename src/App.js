import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { LandingPage } from './features/LandingPage';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' children={LandingPage}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
