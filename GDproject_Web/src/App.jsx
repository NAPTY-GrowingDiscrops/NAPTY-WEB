import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainPage from './pages/MainPage/MainPage';
import SubPage from './pages/SubPage/SubPage'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact={true} component={MainPage} />
        <Route path='/subPage' component={SubPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
