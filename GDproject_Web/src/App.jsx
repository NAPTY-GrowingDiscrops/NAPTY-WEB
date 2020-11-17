import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import * as uuid from 'uuid';

import MainPage from './pages/MainPage/MainPage';
import SubPage from './pages/SubPage/SubPage'
import Auth from './pages/AuthPage/AuthPage';

const App = () => {

  const [isRegister, setIsRegister] = useState('1234');

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact={true} component={MainPage} isRegister={isRegister} setIsRegister={setIsRegister} />
        <Route path='/sub/:subPage' component={SubPage} />
        <Route path='/auth/:bool' component={Auth} />
        <Redirect from='/auth' to={`/auth/${uuid.v4()}`} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
