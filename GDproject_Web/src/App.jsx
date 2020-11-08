import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainPage from './pages/MainPage/MainPage';
import IntroducePage from './pages/IntroducePage/IntroducePage'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={MainPage} />
        <Route path='/introduce' component={IntroducePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
