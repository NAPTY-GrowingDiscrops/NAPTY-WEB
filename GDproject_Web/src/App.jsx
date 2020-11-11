import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainPage from './pages/MainPage/MainPage';
import SubPage from './pages/SubPage/SubPage'
import Auth from './pages/AuthPage/AuthPage';

const App = () => {

  const [isRegister, setIsRegister] = useState('1234');

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact={true} component={MainPage} isRegister={isRegister} setIsRegister={setIsRegister} />
        <Route path='/subPage' component={SubPage} />
        <Route path='/auth' component={Auth} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
