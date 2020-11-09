import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainPage from './pages/MainPage/MainPage';
import SubPage from './pages/SubPage/SubPage'
import Register from './pages/RegisterPage/RegisterPage';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact={true} component={MainPage} />
        <Route path='/subPage' component={SubPage} />
        <Route path='/register' component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
