import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainPage from './pages/MainPage/MainPage';
import SubPage from './pages/SubPage/SubPage'
import Auth from './pages/AuthPage/AuthPage';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact={true} component={MainPage} />
        <Route path='/subPage' component={SubPage} />
        <Route path='/auth' component={Auth} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
